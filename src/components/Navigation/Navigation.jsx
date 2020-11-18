import React,{useEffect,useContext} from 'react';
import styled from 'styled-components';
import {style} from '../../styles/appStyles';

import UIC from '../../context/Context';
import littleLogo from '../../assets/img/arraylogofinal.png';
import harvest from '../../lib/index';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

const {ethers} = harvest;


const web3Modal = new Web3Modal({
    network: "mainnet",  // optional
    cacheProvider: false, // optional
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "eccb6fa1fa2941bf82abe2b9c543bb14", // required
          
        }
      }
    }
  });

const Navigation = () => {
    
    const {toggleSidedrawer,open, state, setState}=useContext(UIC)
    const connectWallet = () => {
        web3Modal.connect().then((provider) => {
            if(!provider) {
                console.log("No Provider")
            }else {
                window.ethereum.enable().then(res => {
                    console.log(res)
                    setProvider(provider)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        })
        .catch(err => {
            console.log(err)
          })
    }

    const setProvider = async (provider) => {
        const ethersProvider = new ethers.providers.Web3Provider(provider);
    
        const signer = ethersProvider.getSigner();
    
        const manager = harvest.manager.PoolManager.allPastPools(
          signer ? signer : provider,
        );
    
        setConnection(provider, signer, manager);
    
        window.ethereum.on("accountsChanged", () => {
          disconnect();
        });
    
        // get the user address
        signer
          .getAddress() // refreshButtonAction called initially to load table
          .then((address) => {
            setAddress(address);
          })
          .catch(error => {
            console.log(error)
          })
          
      };

      const setConnection = (provider, signer, manager) => {
        setState({
          ...state,
          provider: provider,
          signer: signer,
          manager: manager,
        });
      };

      const disconnect = () => {
        setState({
          provider: undefined,
          signer: undefined,
          manager: undefined,
          address: "",
          summaries: [],
          underlyings: [],
          usdValue: 0,
          apy: 0,
          error: { message: null, type: null, display: false },
          theme: window.localStorage.getItem("HarvestFinance:Theme") || "light",
          
          
        });
      };

      const setAddress = (address) => {
        setState((state) => ({ ...state, address: address }));
      };

      useEffect(() => {
        console.log(state.address)
      },[state.address])

      
    
    return (
        <Nav className="header">
            <div className='nav-left'>  
                <img src={littleLogo} alt="array logo"/>
                <nav>
                    <a href='https://cranky-brattain-ecb352.netlify.app/'  className="nav-link">array.finance</a>
                    <a href='https://cranky-brattain-ecb352.netlify.app/roadmap'  className= "nav-link">roadmap</a>
                    {/* <Link href='/faq' className="nav-link">faq</Link> */}
                    <a href='https://cranky-brattain-ecb352.netlify.app/team'  className="nav-link">team</a>
                    <a className='dashboard' href='/' >dashboard</a>
                    
                </nav>

            </div>
            
            <i 
            className={open ? "fas fa-bars rotate" : "fas fa-bars"} 
            onClick={toggleSidedrawer}
            ></i>

            {state.address ? <div className="address">
                <p>{state.address}</p>
            </div>:
            <button onClick={connectWallet} className="connect">connect wallet</button> 
            }
            
            
            
        </Nav>
    );
}

export default Navigation;
const Nav = styled.div`
    display: flex;
    padding: 0 130px;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    background-color: ${style.darkBackground};
    border-bottom: ${style.thinBorder};
    color: white;
    .nav-left {
        display: flex;
        align-items: center;
        img {
            height: 60px;
            width: 60px;
        }
       
        nav {
            margin-left: 25px;
            a {
                font-size: 2.6em;
                padding: 0px 10px;
                margin: 0 40px;
                text-decoration: none;
                color: white;
                transition: all 400ms ease-in;
                
            }
            .dashboard {
                border: 3px solid white;
            }
        }
    }
    
    

    .connect {
        background-color: transparent;
        font-size: 2.6em;
        color: white;
        background-color: ${style.darkBackground};
        border: none;
        padding:  5px 10px;
        transition: all 300ms ease;
        cursor: pointer;
        position: relative;

        &:hover {
            border: 3px solid white;
            background-color: ${style.lightBackground};
            top: 2px;
        }
        
    }

    .address {
        color: white;
        font-size: 1.5em;
        background-color: 
    }

    .fas {
        display: none;
    }
    @media(max-width: 2000px) {
        padding-left: 100px;
    }
    //max-width: 2000px

    @media(max-width: 970px) {
        padding-left: 50px;
        img {
            height: 40px;
            width: 40px;
        }
        nav {
            margin-left: 0px;
            a {
                margin: 0 15px;
                font-size: 2em;
            }
        }
    }
    @media(max-width: 768px) {
        justify-content: space-between;
        padding: 0 15px;
        nav {
            display: none;
        }
        .fas {
            display: inline;
            color: rgba(255,255,255, 0.8);
            font-size: 2.3em;
            transition: all 0.3s ease;
        }
        .rotate {
            transform: rotate(90deg);
        }
    }
    

    .bordered {
        border: 4px solid white;
    }

`