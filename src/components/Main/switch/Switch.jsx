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
                <span className="slider round"></span>
            </label>
                  
        </Switchy>
    );
}

export default Switch;

const Switchy = styled.div`
position: relative;
display: inline-block;
width: 6rem;
height: 2.6rem;
right: 44%;
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
    background-color: ${style.lightBackground};
    -webkit-transition: .4s;
    transition: .4s;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 1.9rem;
    width: 1.9rem;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    @media(max-width: 500px) {
        height: 1.7rem;
        width: 1.7rem;
    }
    @media(max-width: 380px) {
        height: 1.5rem;
        width: 1.5rem;
        top: .22rem;
        right: .1rem;
        left: .1rem;
    }
    }

    input:checked + .slider {
    background-color: ${style.lightBackground};
    }

    input:focus + .slider {
    box-shadow: 0 0 1px ${style.lightBackground};
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(3.3rem);
    -ms-transform: translateX(3.3rem);
    transform: translateX(3.3rem);
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
