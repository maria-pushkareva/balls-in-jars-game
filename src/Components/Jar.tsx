import { IBallProps, IJarProps } from './interfaces';
import styled from "styled-components";

const Jar = (props: IJarProps) => {
    const { id, balls, activeBallId, onBallClick, onJarClick } = props;
    return (
        <Container onClick={() => onJarClick(id)}>
            {
                balls.map((ball) => {
                    return <Ball
                        key={ball.id}
                        onClick={(e) => onBallClick(id, ball.id, e)}
                        color={ball.color}
                        isSelected={ball.id === activeBallId} />
                })
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex; 
    flex-direction: column-reverse;   

    height: 230px;
    width: 60px;

    margin: 20px;

    background-color: lightslategrey;
    border: 6px solid lightsteelblue;
    border-top: 3px solid lightsteelblue;
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