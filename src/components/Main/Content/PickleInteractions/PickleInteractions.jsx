import React from 'react';
import styled from 'styled-components';

const PickleInteractions = () => {
    return (
    <Interaction>
        <div className="interact-header">
            <div className="header-left">
                <h4>pickle.finance</h4>
                <h6>holding $44.8M</h6>
            </div>
            <div className="header-right">
                <h4>182.55% APY</h4>
                <h6>175.12% FARM + 12.18% ARRAY</h6>
            </div>
        </div>
        
        <div className="interact-input">
            <div className="input-container">
                <p className='input-description'>Jar</p>
                <div className="input-and-max">
                    <input type="text"/>
                    <button>max</button>
                </div>
            </div>
            <button className="deposit">deposit</button>
            <div className="rewards-description">
                <p className='reward-apy'>129.4% APY</p>
                <p className="reward-breakdown">112% FARM +</p>
                <p className="reward-breakdown">12.8% Array</p>
            </div>
        </div>

        <div className="interact-input">
            <div className="input-container">
                <p className='input-description'>Jar</p>
                <div className="input-and-max">
                    <input type="text"/>
                    <button>max</button>
                </div>
            </div>
            <button className="deposit">deposit</button>
            <div className="rewards-description">
                <p className='reward-apy'>129.4% APY</p>
                <p className="reward-breakdown">112% FARM +</p>
                <p className="reward-breakdown">12.8% Array</p>
            </div>
        </div>

        <div className="interact-input">
            <div className="input-container">
                <p className='input-description'>Jar</p>
                <div className="input-and-max">
                    <input type="text"/>
                    <button>max</button>
                </div>
            </div>
            <button className="deposit">deposit</button>
            <div className="rewards-description">
                <p className='reward-apy'>129.4% APY</p>
                <p className="reward-breakdown">112% FARM +</p>
                <p className="reward-breakdown">12.8% Array</p>
            </div>
        </div>

        <div className="interact-input">
            <div className="input-container">
                <p className='input-description'>Jar</p>
                <div className="input-and-max">
                    <input type="text"/>
                    <button>max</button>
                </div>
            </div>
            <button className="deposit">deposit</button>
            <div className="rewards-description">
                <p className='reward-apy'>129.4% APY</p>
                <p className="reward-breakdown">112% FARM +</p>
                <p className="reward-breakdown">12.8% Array</p>
            </div>
        </div>
        
    </Interaction>
    );
}

export default PickleInteractions;


const Interaction = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 46%;

    background-color: #212121;
    color: white;
    .interact-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 3px solid white;
        padding:  10px;
        width: 100%;
        h4 {
            margin: 0;
        }
        h6 {
            margin: 0;
        }
        
        .header-left {
            font-size: 1.2em;
            h4 {
                font-size: 1.4em;
            }
            
        }
        .header-right {
            font-size: 1.2em;
            h4 {
                font-size: 1.4em;
            }
            
        }
    }
    .interact-input {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 10px 20px; 
        
        .input-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 60%;
            .input-description {
                width: 20%;
                font-size: 1.5em;
                margin: 0;
            }
            .input-and-max {
                width: 70%;
                input {
                    font-size: 1.5em;
                    width: 50%;
                    border: 3px solid white;
                    background-color: #121212;
                    color: white;
                    padding: 2%;
                }
                button {
                    background-color: transparent;
                    color: white;
                    font-size: 1.5em;
                    border-top: 3px solid white;
                    border-right: 3px solid white;
                    border-bottom: 3px solid white;
                    border-left: none;
                    padding: 2%;
                    
                }
            }
            
        }
        .deposit {
            background: transparent;
            color: white;
            font-size: 1.5em;
            border: 3px solid white;
            padding: 1%;
            cursor: pointer;
        }
        .rewards-description {
            display: flex;
            flex-direction: column;
            align-items: center;
            p {
                margin: 0;
            }
            .reward-apy {
                font-size: 1.2em;
            }
            .reward-breakdown {
                font-size: .8em;
            }
        }


        

    }
    .assets-managed {
        font-size: 2.4em;
        background-color: #121212;
        padding: 30px;
        p {
            text-align: center;
        }
    
    }

    @media(max-width: 1920px) {
        .interact-input {
            padding: 5px 20px; 
            .input-container {
                .input-description {
                    width: 20%;
                    font-size: 1.4em;
                    margin: 0;
                }
                .input-and-max {
                    width: 70%;
                    input {
                        font-size: 1.4em;
                        width: 50%;
                        border: 3px solid white;
                        background-color: #121212;
                        color: white;
                        padding: 2%;
                    }
                    button {
                        background-color: transparent;
                        color: white;
                        font-size: 1.4em;
                        border-top: 3px solid white;
                        border-right: 3px solid white;
                        border-bottom: 3px solid white;
                        border-left: none;
                        padding: 2%;
                        
                    }
                }
                
            }
            .deposit {
                background: transparent;
                color: white;
                font-size: 1.4em;
                border: 3px solid white;
                padding: 1%;
                cursor: pointer;
            }
            .rewards-description {
                display: flex;
                flex-direction: column;
                align-items: center;
                p {
                    margin: 0;
                }
                .reward-apy {
                    font-size: 1.1em;
                }
                .reward-breakdown {
                    font-size: .8em;
                }
            }


            

        }
    }
    //max-width: 1920px

    @media(max-width: 1440px) {
        .interact-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 3px solid white;
            padding: 5px 10px;
            width: 100%;
            h4 {
                margin: 0;
            }
            h6 {
                margin: 0;
            }
            
            .header-left {
                font-size: 1.1em;
                h4 {
                    font-size: 1.3em;
                }
                
            }
            .header-right {
                font-size: 1.1em;
                h4 {
                    font-size: 1.3em;
                }
                
            }
        }

        .interact-input {
            padding: 4px 20px; 
            .input-container {
                .input-description {
                    width: 20%;
                    font-size: 1.2em;
                    margin: 0;
                }
                .input-and-max {
                    width: 70%;
                    input {
                        font-size: 1.3em;
                        width: 50%;
                        border: 3px solid white;
                        background-color: #121212;
                        color: white;
                        padding: 2%;
                    }
                    button {
                        background-color: transparent;
                        color: white;
                        font-size: 1.3em;
                        border-top: 3px solid white;
                        border-right: 3px solid white;
                        border-bottom: 3px solid white;
                        border-left: none;
                        padding: 2%;
                        
                    }
                }
                
            }
            .deposit {
                background: transparent;
                color: white;
                font-size: 1.3em;
                border: 3px solid white;
                padding: 1%;
                cursor: pointer;
            }
            .rewards-description {
                display: flex;
                flex-direction: column;
                align-items: center;
                p {
                    margin: 0;
                }
                .reward-apy {
                    font-size: .9em;
                }
                .reward-breakdown {
                    font-size: .7em;
                }
            }


            

        }
    }
    //max-width: 1440px

    @media(max-width: 1280px) {
        .interact-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 3px solid white;
            padding: 5px 10px;
            width: 100%;
            h4 {
                margin: 0;
            }
            h6 {
                margin: 0;
            }
            
            .header-left {
                font-size: 1.1em;
                h4 {
                    font-size: 1.3em;
                }
                
            }
            .header-right {
                font-size: 1.1em;
                h4 {
                    font-size: 1.3em;
                }
                
            }
        }

        .interact-input {
            padding: 2px 20px; 
            .input-container {
                .input-description {
                    width: 20%;
                    font-size: 1.2em;
                    margin: 0;
                }
                .input-and-max {

                    input {
                        font-size: 1.2em;
                        border: 3px solid white;
                        background-color: #121212;
                        color: white;
                        padding: 2%;
                    }
                    button {
                        background-color: transparent;
                        color: white;
                        font-size: 1.2em;
                        padding: 2%;
                        
                    }
                }
                
            }
            .deposit {
                background: transparent;
                color: white;
                font-size: 1.2em;
                border: 3px solid white;
                padding: 1%;
                cursor: pointer;
            }
            .rewards-description {
                display: flex;
                flex-direction: column;
                align-items: center;
                p {
                    margin: 0;
                }
                .reward-apy {
                    font-size: .8em;
                }
                .reward-breakdown {
                    font-size: .6em;
                }
            }


            

        }
    }
    //max-width: 1280px

`;