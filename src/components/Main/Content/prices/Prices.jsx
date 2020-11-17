import React from 'react';
import styled from 'styled-components';
import  {style} from '../../../../styles/appStyles';

const Prices = () => {
    return (
        <TradeContainer>
            <div className="container-header">
            
            <h4>prices</h4>
            <button className="trade-array">trade array</button>
        
            </div>
            <div className="container-content">
                <p>Array - $19.12</p>
                <p>MarketCap - $20.12M</p>
                <p>StakedAPY - 102.48%</p>
                <p>Locked - 82%</p>
            </div>
        
    
        </TradeContainer>
    );
}

export default Prices;

const TradeContainer =  styled.div`
width: 30%;
background-color: ${style.lightBackground};
color: white;
height: 100%;


.container-header {
    display: flex;
     width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border: ${style.mainBorder};
    
    h4 {
        margin: 0 auto;
        font-size: 1.8em;
        width: 95%;
        

    }
    .trade-array {
        border: ${style.mainBorder};
        background-color: transparent;
        width: 70%;
        color: white;
        font-size: 1.4em;
        padding: 5px 0; 
    }
}
.container-content {
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
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
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
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
            
            font-size: 1.4em;
        }
        .trade-array {
            font-size: 1em;
        }
    }
    .container-content {
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
        padding: 5px 15px;
    
        p {
            margin: 0;
            font-size: 1.2em;
            text-align: left;
        }
        .array {
            font-size: 1.5em;
        }
    }
}

    
`;