import React,{useContext} from 'react';
import UIC from '../../../context/Context';
import styled from 'styled-components';
import {style} from '../../../styles/appStyles';

const Switch = () => {
    const {depositing,setDepositing} = useContext(UIC);

    const makeWithdrawals = () => {
        setDepositing(false)
    }
    const makeDeposits = () => {
        setDepositing(true)
    }
    return (
        <Switchy>
            
            {depositing ? <div className="placeholder"></div> : <button onClick={makeDeposits} className="deposit">deposit</button> }
            {depositing ? <button onClick={makeWithdrawals} className="withdraw">withdraw</button> : <div className="placeholder"></div> }

            
                  
        </Switchy>
    );
}

export default Switch;

const Switchy = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 10%;
    height: 2.6rem;
    left: 2.5%;
    top: 30px;
        * Hide default HTML checkbox */
        .switch input {
        opacity: 0;
        width: 0;
        height: 0;
        }

    
        button {
            background: transparent;
            color: white;
            font-size: 1.5em;
            height: 40px;
            padding: 1%;
            cursor: pointer;
        }
        .deposit {
            width: 50%;
            width: 50%;
            border-top: ${style.mainBorder};
            border-left: ${style.mainBorder};
            border-bottom: ${style.mainBorder};
        
        }
        .withdraw {
            width: 50%;
            border-top: ${style.mainBorder};
            border-right: ${style.mainBorder};
            border-bottom: ${style.mainBorder};
        
        }
        .placeholder {
            width: 50%;
            border: ${style.mainBorder};
            height: 40px;
        }
        @media(max-width: 2556px) {
            width: 12%;
        }
        @media(max-width: 2556px) {
            width: 15%;
        }
        @media(max-width: 1920px) {
            width: 16%;
        }
        @media(max-width: 1440px) {
            width: 18%;
            button {
                
                font-size: 1.2em;
               
            }
        }
        @media(max-width: 1280px) {
            button {
                font-size: 1em;
            }
        }

`;
