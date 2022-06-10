import styled from "styled-components"
import { IBall } from "./interfaces"
import Jar from "./Jar"

const GameField = (props: any) => {
    const selectedBall = props.selectedBall;
    const ballOne: IBall = {
        color: "orange",
        id: 1
    }

    const ballTwo: IBall = {
        color: "blue",
        id: 2
    }


    const ballThree: IBall = {
        color: "yellow",
        id: 3
    }

    const ballFour: IBall = {
        color: "orange",
        id: 4
    }

    return (
        <Container>

            <Jar
                balls={[ballOne, ballTwo, ballThree, ballFour]}
                selectedBall={selectedBall}
            />
            <Jar
                balls={[ballOne, ballTwo, ballThree, ballFour]}
                selectedBall={selectedBall}
            />
            <Jar
                balls={[ballOne, ballTwo, ballThree, ballFour]}
                selectedBall={selectedBall}
            />
            <Jar
                balls={[ballOne, ballTwo, ballThree, ballFour]}
                selectedBall={selectedBall}
            />
        </Container>
    );
}

const Container = styled.div`;
    display: flex;
    flex-direction: row; 

    height: 400px;
    width: 800px;

    margin: auto;

    background-color: darkslategrey;
`

export default GameField;