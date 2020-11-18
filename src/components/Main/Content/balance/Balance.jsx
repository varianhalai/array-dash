import React,{useContext} from 'react';
import UIC from '../../../../context/Context';
import styled from 'styled-components';
import  {style} from '../../../../styles/appStyles';

const Balance = () => {
    const {balance,financialData} = useContext(UIC);
    return (
        <BalanceContainer>
            <div className="container-header">
                <h4>balance</h4>
                <h6>volume $12.8M</h6>
            </div>
            <div className="container-content">
                <div className="content-left">
                    <p className="array-balance">{balance.array_balance}</p>
                    <p className="pickle-balance">{balance.pickle_balance}</p>
                    <p className="farm-balance">{balance.farm_balance}</p>
                </div>
                <div className="content-right">
                    <p className='array'>ARRAY</p>
                    <p>PICKLE</p>
                    <p>FARM</p>
                </div>
                
            </div>
            <div className="container-footer">
                <p>pending</p>
            </div>
        </BalanceContainer>
    );
}

export default Balance;

const BalanceContainer =  styled.div`
    width: 30%;
    background-color: ${style.lightBackground};
    border: ${style.mainBorder};
    color: white;
   

    .container-header {
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: flex-start;
        padding: 15px;
        height: 30%;
        border-bottom: ${style.mainBorder};
        
        h4 {
            margin: 0;
            font-size: 2em;
        }
        h6 {
            margin: 0;
            font-size: 1em;
        }
    }
    .container-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 15px;
        height: 50%;
        border-bottom: ${style.mainBorder};
        .content-left {
            display: flex;
            flex-direction: column; 
            justify-content: center;
            align-items: flex-start;
            .array-balance {
                font-size: 1.5em;
            }

        }
        .content-right {
            display: flex;
            flex-direction: column; 
            justify-content: center;
            align-items: flex-end;

        }

        p {
            margin: 5px 0;
            font-size: 1.1em;
            text-align: left;
        }
        .array {
            font-size: 1.5em;
        }
    }
    .container-footer {
        
        padding: 5px 15px;
        p {
            font-size: 1.4em;
            margin: 0;
        }
    }

    @media(max-width: 1920px) {

        .container-header {
            
            
            h4 {
                margin: 0;
                font-size: 1.7em;
            }
            h6 {
                margin: 0;
                font-size: .9em;
            }
        }
        .container-content {
            padding: 0 15px;
    
            p {
                margin: 3px 0;
                font-size: 1.1em;
                text-align: left;
            }
            .array {
                font-size: 1.5em;
            }
        }

    }
    //max-width: 1920px
    @media(max-width: 1440px) {

        .container-header {
            padding: 10px;
            
            h4 {
                margin: 0;
                font-size: 1.5em;
            }
            h6 {
                margin: 0;
                font-size: .9em;
            }
        }
        .container-content {
            padding: 0 15px;
    
            p {
                margin: 3px 0;
                font-size: 1em;
                text-align: left;
            }
            .array {
                font-size: 1.3em;
            }
        }
        .container-footer {
        
            padding: 5px 15px;
            p {
                font-size: 1.2em;
                margin: 0;
            }
        }

    }
    //max-width: 1440px

    @media(max-width: 1280px) {

        .container-header {
            padding: 5px;
            
            h4 {
                margin: 0;
                font-size: 1.5em;
            }
            h6 {
                margin: 0;
                font-size: .9em;
            }
        }
        .container-content {
            padding: 0 15px;
    
            p {
                margin: 3px 0;
                font-size: .9em;
                text-align: left;
            }
            .array {
                font-size: 1.2em;
            }
        }
        .container-footer {
        
            padding: 5px 15px;
            p {
                font-size: 1.1em;
                margin: 0;
            }
        }

    }
    //max-width: 1280px
    
`;
