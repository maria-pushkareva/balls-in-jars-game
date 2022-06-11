import styled from "styled-components"
import { IBall, IGameFieldProps, IJar } from "./interfaces"
import Jar from "./Jar"


const GameField = (props: IGameFieldProps) => {
    const { balls, jars, activeBallId, onBallClick, onJarClick } = props;

    return (
        <Container>
            {
                jars.map(({ id, ballsId }) => {
                    const ballsInJar: Array<IBall> = [];
                    console.log(ballsId);
                    ballsId.forEach((ballId) => {
                        const ball = balls.find(({ id }) => id === ballId);
                        if (typeof ball === 'undefined') {
                            throw Error("Can't find ball by id")
                        }
                        ballsInJar.push(ball);
                    })
                    return <Jar key={id} onBallClick={onBallClick} onJarClick={onJarClick} id={id} balls={ballsInJar} activeBallId={activeBallId} />
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