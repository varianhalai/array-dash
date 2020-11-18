import React from 'react';
import styled from 'styled-components';

//components
import Switch from '../switch/Switch';
//row1
import Balance from './balance/Balance';
import Staked from './staked/Staked';
import ArrayFinancialDisplay from './arrayFinancialDisplay/ArrayFinancialDisplay';
//row2
import ArrayInteractions from './arrayInteractions/ArrayInteractions';
import Prices from './prices/Prices';
//row3
import FarmInteractions from './farmInteractions/FarmInteractions';
import PickleInteractions from './PickleInteractions/PickleInteractions';


const Content = () => {
    return (
        <ContentContainer>
            <Row>
                <Balance />
                <Staked />
                <ArrayFinancialDisplay />
            </Row>

            <Row className='not-top'>
                <ArrayInteractions />
                <Prices />
            </Row>

            <Row className='not-top'>
                <FarmInteractions />
                <PickleInteractions />
            </Row>
            <Row>
                <Switch />
            </Row>
           
        </ContentContainer>
    );
}

export default Content;


const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
    margin-top: 30px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 65%;
    

    &.not-top {
        margin-top: 30px;
    }
    @media(max-width: 1920px) {
        width: 80%;
        
        
    }
    @media(max-width: 1440px) {
        width: 85%;
        
        
    }
`