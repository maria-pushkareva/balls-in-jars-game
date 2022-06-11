import styled from "styled-components"
import { IBall, IJar } from "./interfaces"
import Jar from "./Jar"

interface IGameFieldProps {
    jars: Array<IJar>,
    balls: Array<IBall>,
    selectedBallId: number | null
}

const GameField = (props: IGameFieldProps) => {
    const { balls, jars, selectedBallId } = props;

    return (
        <Container>
            {
                jars.map(({ id, ballsId }) => {
                    const ballsInJar: Array<IBall> = [];
                    ballsId.forEach((ballId) => {
                        const ball = balls.find(({ id }) => id === ballId);
                        if (typeof ball === 'undefined') {
                            throw Error("Can't find ball by id")
                        }
                        ballsInJar.push(ball);
                    })
                    return <Jar key={id} id={id} balls={ballsInJar} selectedBallId={selectedBallId}/>
                })
            }
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