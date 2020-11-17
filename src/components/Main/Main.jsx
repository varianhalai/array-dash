import React from 'react';
import styled from 'styled-components';

//components
import ArrayInfo from './arrayInfo/ArrayInfo';
import Content from './Content/Content';


const Main = () => {
    return (
        <Container>
            <ArrayInfo />
            <Content />
            
        </Container>
    );
}

export default Main;

const Container =  styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
background-color: #121212;
height: 100vh;



`;
