import React from 'react';
import { IBallProps, IJar } from './interfaces';
import styled from "styled-components";

const Jar = (props: IJar) => {
    const { balls, selectedBall } = props;
    return (
        <Container>
            {
                balls.map((ball) => {
                    return <Ball color={ball.color} isSelected={ball.id === selectedBall} />
                })
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex; 
    flex-direction: column-reverse;   

    height: 250px;
    width: 60px;

    margin: 20px;

    background-color: lightsteelblue;
    border: 6px solid lightslategrey;
    border-top: 3px solid lightslategrey;
    border-radius: 0px 0px 25px 25px;
`;

const Ball = styled.div`
    height: ${(props: IBallProps) => props.isSelected ? '42px' : '50px'};
    width: ${(props: IBallProps) => props.isSelected ? '42px' : '50px'};

    margin: 0px 5px 5px 5px;

    background-color: ${(props: IBallProps) => props.color};

    border-color: white;
    border-width: ${(props: IBallProps) => props.isSelected ? '4px' : '0px'};
    border-style: solid;

    border-radius: 25px;
`;

export default Jar;