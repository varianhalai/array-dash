import {useState} from 'react';
import styled from 'styled-components';
import font from './assets/fonts/TechnaSans-Regular.otf'
import UIC from './context/Context';

//components
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';

function App() {
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
  return (
    <UIC.Provider value={{open,setOpen,state, setState}}>
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


