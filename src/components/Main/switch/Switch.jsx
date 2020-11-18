import React,{useContext} from 'react';
import UIC from '../../../context/Context';
import styled from 'styled-components';
import {style} from '../../../styles/appStyles';

const Switch = () => {
    const {depositing,setDepositing} = useContext(UIC);
    return (
        <Switchy>
            
            <label className="switch">
                <input
                type="checkbox"
                checked={depositing}
                onChange={() =>
                    setDepositing(!depositing)
                }
                />
                <div className="slider round">{depositing ? <p className="left">withdraw</p> : <p className="right">deposit</p> }</div>
            </label>
                  
        </Switchy>
    );
}

export default Switch;

const Switchy = styled.div`
position: relative;
display: inline-block;
width: 8rem;
height: 2.6rem;
left: 2%;
top: 30px;
    * Hide default HTML checkbox */
    .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    }

    /* The slider */
    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 5px;
    background-color: ${style.lightBackground};
    -webkit-transition: .4s;
    transition: .4s;
    p {
        margin-top: 7px;
        font-size: 1.2em;
        color: white;
    }
    .right {
        float: right;
        
    }
    }

    

    .slider:before {
    position: absolute;
    content: "";
    height: 1.9rem;
    width: 1.9rem;
    left: 3px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
   
    }

    input:checked + .slider {
    background-color: ${style.lightBackground};
    }

    input:focus + .slider {
    box-shadow: 0 0 1px ${style.lightBackground};
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(5.3rem);
    -ms-transform: translateX(5.3rem);
    transform: translateX(5.3rem);
    }

    /* Rounded sliders */
    .slider.round {
    border-radius: .5rem;
    }

    .slider.round:before {
    border-radius: .5rem;
    }

    input[type="button"]:focus, button:focus {
        outline: none;
    }

`;
