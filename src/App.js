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
  //state determining if the sidedrawer is open or closed
  const [depositing, setDepositing] = useState(true)
  //state determining if deposit or withdraw buttons are displayed

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
  //connection and balance status

  const [financialData,setFinancialData] =useState({
    array_market_cap: '20.12M',
    array_staked_apy: 102.48,
    array_locked: 82,
    array_total_assets: "100,000,000",
    array_price: 19.12,
    eth_price: 0,
    pickle_price: 0,
    farm_price: 0
  })
  //array financial stats and coin prices

  const [balance,setBalance] = useState({
    array_balance: 100.3,
    pickle_balance: 50,
    farm_balance: 120,
  })
  //user balance data
  const [staked,setStaked] = useState({
    array_staked: 1000,
    pickle_staked: 255,
    farm_staked: 800,
  })
  //user staked balance data

 
  
  const getTokenPrices = () => {
      //this can be cleaned up.
      gecko.getPrice('0xa0246c9032bC3A600820415aE600c6388619A14D')
      .then(res => {
        console.log(res.toString() / 1000000)
       
        setFinancialData((financialData) => ({...financialData,farm_price: res.toString() / 1000000}))
      })
      .catch(err => {
        console.log(err)
      })
    

      gecko.getPrice(`0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5`)
      .then(res => {
        console.log(res.toString() / 1000000)
      
        setFinancialData((financialData) => ({...financialData,pickle_price: res.toString() / 1000000}))
      })
      .catch(err => {
        console.log(err)
      })
    
      

      axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
      .then(res => {
        console.log(res.data.ethereum['usd'])
        setFinancialData((financialData) => ({...financialData,eth_price: res.data.ethereum['usd'] }))
      })
      .catch(err => {
        console.log(err)
      })
    }

  useEffect(() => {
    
      getTokenPrices()
      //gets token prices on initial page load.
    
  },[])
  useEffect(() => {
    const timer = setTimeout(() => {
      state.manager && getTokenPrices();
    }, 60000);
    return () => clearTimeout(timer);
  });
  //updates token prices every 60 seconds.
  
  return (
    <UIC.Provider 
    value={{open,
            setOpen,
            state, 
            setState,
            financialData,
            depositing,
            setDepositing,
            balance,
            staked}}>
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


