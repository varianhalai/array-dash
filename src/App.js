import {useState,useEffect} from 'react';
import styled from 'styled-components';
import font from './assets/fonts/TechnaSans-Regular.otf'
import UIC from './context/Context';
import axios from 'axios';

import Gecko from './lib/gecko';
import ethers from 'ethers';


//components
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';

function App() {
  const gecko = Gecko.coingecko()
  const [open, setOpen] =useState(false)

  const [state, setState] = useState({
    provider: undefined,
    signer: undefined,
    manager: undefined,
    address: "",
    summaries: [],
    underlyings: [],
    usdValue: 0,
    error: { message: null, type: null, display: false },
  });

  const [financialData,setFinancialData] =useState({
    array_market_cap: '20.12M',
    array_staked_apy: 102.48,
    array_locked: 82,
    array_price: 19.12,
    array_total_assets: "100,000,000",
    eth_price: 0,
    pickle_price: 0,
    farm_price: 0
  })

  const [balance,setBalance] = useState({
    array_balance: 0,
    pickle_balance: 0,
    farm_balance: 0,
  })
  const [staked,setStaked] = useState({
    array_staked: 0,
    pickle_staked: 0,
    farm_staked: 0,
  })

 
  const tokens = [
    {
      id:0,
      name: 'farm',
      address: '0xa0246c9032bC3A600820415aE600c6388619A14D'
    },
    {
      id:1,
      name: 'pickle',
      address: `0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5`
    },
  ]
  const getTokenPrices = () => {
    
      gecko.getPrice('0xa0246c9032bC3A600820415aE600c6388619A14D')
      .then(res => {
        console.log(res.toString() / 1000000)
       
        setFinancialData({...financialData,farm_price: res.toString() / 1000000})
      })
      .catch(err => {
        console.log(err)
      })
    

    gecko.getPrice(`0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5`)
    .then(res => {
      console.log(res.toString() / 1000000)
     
      setFinancialData({...financialData,pickle_price: res.toString() / 1000000})
    })
    .catch(err => {
      console.log(err)
    })
  
    

    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    .then(res => {
      console.log(res.data.ethereum['usd'])
      setFinancialData({...financialData,eth_price: res.data.ethereum['usd'] })
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    if(financialData.pickle_price === 0) {
      getTokenPrices()
    }
    
  },[financialData.pickle_price])
  useEffect(() => {
    const timer = setTimeout(() => {
      state.manager && getTokenPrices();
    }, 60000);
    return () => clearTimeout(timer);
  });
  console.log(financialData)
  return (
    <UIC.Provider value={{open,setOpen,state, setState,financialData}}>
      <Application>
        <Navigation />
        <Main />
      
      </Application>
    </UIC.Provider>
    
  );
}

export default App;

const Application = styled.div`
@font-face {
  font-family: TechnaSans;
  src: url("../") format("opentype");
}
  * {
    box-sizing: border-box;
    font-family: ${font}, serif;
    
  }
  height: 100vh;
  overflow: hidden;
  font-family: ${font}, serif;


`;


