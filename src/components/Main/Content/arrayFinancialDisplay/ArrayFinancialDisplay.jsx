import React from 'react';
import styled from 'styled-components';
import  {style} from '../../../../styles/appStyles';

const ArrayFinancialDisplay = () => {
    return (
        <FinancialContainer>
            <div className="container-header">
            
                <h4>Array is curently managing $XXX,XXX,XXX in assets</h4>
            
            </div>
            <div className="container-content">
                <p>Array - $19.12</p>
                <p>MarketCap - $20.12M</p>
                <p>StakedAPY - 102.48%</p>
                <p>Locked - 82%</p>
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
        padding: 10px;
        height: 30%;
        border-bottom: ${style.mainBorder};
        
        h4 {
            margin: 0 auto;
            font-size: 1.45em;
            width: 95%;
            text-align: center;

        }
        h6 {
            margin: 0;
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
            margin: 5px 0;
            font-size: 1.4em;
            text-align: left;
        }
        .array {
            font-size: 1.5em;
        }
    }
    @media(max-width: 1920px) {

        .container-header {
            
            
            h4 {
                margin: 0;
                font-size: 1.4em;
            }
            h6 {
                margin: 0;
                font-size: 1em;
            }
        }

        .container-content {
            
    
            p {
                margin: 3px 0;
                font-size: 1.3em;
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
            
            
            h4 {
                margin: 0;
                font-size: 1.3em;
            }
            
        }

        .container-content {
            
    
            p {
                margin: 3px 0;
                font-size: 1.1em;
                text-align: left;
            }
        }

    }
    //max-width: 1440px

    @media(max-width: 1280px) {
        
        .container-header {
            padding: 5px 10px;
            
            h4 {
                margin: 0;
                font-size: 1.1em;
            }
            
        }

        .container-content {
            
    
            p {
                margin: 3px 0;
                font-size: 1.1em;
                text-align: left;
            }
        }

    }
    //max-width: 1280px
    
`;
