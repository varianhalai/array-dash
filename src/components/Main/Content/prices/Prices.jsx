import React,{useContext} from 'react';
import UIC from '../../../../context/Context';
import styled from 'styled-components';
import  {style} from '../../../../styles/appStyles';

const Prices = () => {
    const {financialData} =useContext(UIC);
    return (
        <TradeContainer>
            <div className="container-header">
            <h4>prices</h4>
            <button className="trade-array">trade array</button>
            </div>

            
            <div className="container-content">
                <div className="content-left">
                    <p className='array'>ARRAY</p>
                    <p>ETH</p>
                    <p>PICKLE</p>
                    <p>FARM</p>
                </div>
                <div className="content-right">
                    <p className='array'>${financialData.array_price ? financialData.array_price : "---"}</p>
                    <p>${financialData.eth_price ? financialData.eth_price : " ---"}</p>
                    <p>${financialData.pickle_price ? financialData.pickle_price : "---" }</p>
                    <p>${financialData.farm_price ? financialData.farm_price : "---"}</p>
                </div>
                
            </div>
        
    
        </TradeContainer>
    );
}

export default Prices;

const TradeContainer =  styled.div`
width: 30%;
background-color: ${style.lightBackground};
color: white;


.container-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border: ${style.mainBorder};
    
    h4 {
        margin: -10px auto 0 auto;
        font-size: 2em;
        width: 95%;
        

    }
    .trade-array {
        border: ${style.mainBorder};
        background-color: transparent;
        width: 70%;
        color: white;
        font-size: 1.4em;
        padding: 5px 0; 
        position: relative;
        transition: all 300ms ease;
        cursor: pointer;

        &:hover {
            top: 2px;
            background-color: ${style.darkBackground};
        }
    }
}
.container-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    height: 50%;
    
    .content-left {
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: flex-start;
        .array-price {
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
        font-size: 1.2em;
        text-align: left;
    }
    .array,.array-price {
        font-size: 1.5em;
    }
}

@media(max-width: 1440px) {
    .container-header { 
        padding: 5px 15px;
       
        h4 {
            
            font-size: 1.6em;
        }
        .trade-array {
            font-size: 1.2em;
        }
    }
    .container-content {
        
        padding: 5px 15px;
    
        p {
            margin: 0;
            font-size: 1.4em;
            text-align: left;
        }
        .array {
            font-size: 1.5em;
        }
    }
}

@media(max-width: 1280px) {
    
    .container-header {
        padding: 5px 15px;
        
        h4 {
            margin: -10px auto 9px auto;
            font-size: 2em;
        }
        .trade-array {
            font-size: 1.1em;
            padding: 5px; 
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

@media(min-width: 2800px) {
    .container-header { 
        padding: 5px 15px;
       
        h4 {
            
            font-size: 5em;
        }
        .trade-array {
            font-size: 3em;
        }
    }
    .container-content {
       
    
        p {
            margin: 11px 0;
            font-size: 1.8em;
            text-align: left;
        }
        .array {
            font-size: 2.5em;
        }
    }
}
//min-width: 2800px

    
`;