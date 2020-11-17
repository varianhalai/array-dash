import axios from 'axios';
import ethers from 'ethers';

/**
 * Memoizing coin gecko api
 */
class GeckoApi {
  /**
   * @param {String} url the api url
   */
  constructor(url) {
    this.url = url;
    this._memos = {};
  }

  /**
   * @param {String} address token address
   * @param {Number} time current time
   * @return {Number} price
   */
  checkMemo(address, time) {
    const key = address.toLowerCase();
    if (this._memos[key] && this._memos[key].validUntil >= time) {
      return this._memos[key].bnPrice;
    }
  }

  /**
   * @param {String} address token address
   * @param {Number} price price in USD
   * @param {Number} validUntil validity of memoization
   * @return {BigNumber} price in microdollars
   */
  memoize(address, price, validUntil) {
    if (!price) return;
    const key = address.toLowerCase();
    const bnPrice = ethers.BigNumber.from(parseInt(price * 1000000));
    this._memos[key] = {
      validUntil,
      bnPrice,
    };
    return bnPrice;
  }

  /**
   * NOTE: silently fails to return unknown or non-existing assets
   * @param {Array} addresses token addresses
   */
  async _getPrices(addresses) {
    const result = {};
    const time = Date.now();

    addresses.forEach((address) => {
      const memo = this.checkMemo(address.toLowerCase(), time);
      if (memo) {
        result[address.toLowerCase()] = memo;
      }
    });

    const s = addresses
      .filter((address) => !(result[address.toLowerCase()]))
      .map((address) => address.toLowerCase())
      .join(',');
    const url = `${this.url}?contract_addresses=${s}&vs_currencies=USD`;

    const response = await axios.get(url);

    Object.entries(response.data).forEach(([address, {usd}]) => {
      result[address.toLowerCase()] = this.memoize(address, usd, time + 5 * 60 * 1000);
    });

    return result;
  }

  /**
   * @param {String} address token address
   * @return {Promise} price in microdollars
   */
  getPrice(address) {
    return this._getPrices([address]).then((res) => {
      return res[address.toLowerCase()];
    });
  }

  /**
   * @param {Array} addresses token addresses
   * @return {Promise} price in microdollars
   */
  getPrices(addresses) {
    return this._getPrices(addresses);
  }
}

const Gecko = (function () {
    const instances = {};

    function createInstance(url) {
        var object = new GeckoApi(url);
        return object;
    }

    function fromUrl(url) {
      url = url ? url : 'https://api.coingecko.com/api/v3/simple/token_price/ethereum';
      if (!instances[url]) {
          instances[url] = createInstance(url);
      }
      return instances[url];
    }

    function coingecko() {
      return fromUrl();
    }

    return {
        coingecko,
        fromUrl
    };
})();

export default Gecko;