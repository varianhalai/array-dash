import React,{useContext} from 'react';
import UIC from '../../../../context/Context';
import styled from 'styled-components';
import  {style} from '../../../../styles/appStyles';

const ArrayFinancialDisplay = () => {
    const {financialData} = useContext(UIC);
    return (
        <FinancialContainer>
            <div className="container-header">
            
                <h4>Array is curently managing ${financialData.array_total_assets} in assets</h4>
            
            </div>
            
            <div className="container-content">
                <div className="content-left">
                    <p className="array">Array </p>
                    <p className="array-market-cap">MarketCap </p>
                    <p className="array-staked-apy">StakedAPY </p>
                    <p className="array-locked">Locked </p>
                </div>
                <div className="content-right">
                    <p className='array'>${financialData.array_price}</p>
                    <p>${financialData.array_market_cap}</p>
                    <p>{financialData.array_staked_apy}%</p>
                    <p>{financialData.array_locked}%</p>
                </div>
                
            </div>
           
            
        </FinancialContainer>
    );
}

export default ArrayFinancialDisplay;

const FinancialContainer =  styled.div`
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
        
        
        h4 {
            margin: 0;
            font-size: 1.9em;
            text-align: center;
        }
        
    }
    .container-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 15px;
        height: 52%;
        
        .content-left {
            display: flex;
            flex-direction: column; 
            justify-content: center;
            align-items: flex-start;
            .array-balance {
                font-size: 2em;
            }

        }
        .content-right {
            display: flex;
            flex-direction: column; 
            justify-content: center;
            align-items: flex-end;

        }

        p {
            margin: 3.5px 0;
            font-size: 1.8em;
            text-align: left;
        }
        .array {
            font-size: 2em;
        }
    }
    .container-footer {
        
        padding: 5px 15px;
        p {
            font-size: 1.6em;
            margin: 0;
        }
    }
    
    @media(max-width: 2558px) {

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
    //max-width: 2558px
    @media(max-width: 1920px) {

        .container-header {
            
            
            h4 {
                margin: 0;
                font-size: 1.6em;
            }
            h6 {
                margin: 0;
                font-size: .9em;
            }
        }
        .container-content {
            padding: 0 15px;
    
            p {
                margin-bottom: 4px;
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
                font-size: 1.3em;
            }
            h6 {
                margin: 0;
                font-size: .8em;
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
                font-size: 1em;
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
                font-size: 1.2em;
            }
            h6 {
                margin: 0;
                font-size: .9em;
            }
        }
        .container-content {
            padding: 0 15px;
    
            p {
                margin: 4px 0;
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

    @media(min-width: 3700px) {

        .container-header {
            
            
            h4 {
                margin: 0;
                font-size: 3.3em;
            }
            
        }
        .container-content {
           
            .content-left {
               
                .array-balance {
                    font-size: 2.5em;
                }
    
            }
            .content-right {
                display: flex;
                flex-direction: column; 
                justify-content: center;
                align-items: flex-end;
    
            }
    
            p {
                margin: 6px 0;
                font-size: 2em;
                text-align: left;
            }
            .array {
                font-size: 2.5em;
            }
        }
        .container-footer {
            
            padding: 5px 15px;
            p {
                font-size: 1.8em;
                margin: 0;
            }
        }
    //max-width:2800px
    

`;
