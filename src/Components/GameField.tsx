import styled from "styled-components"
import { IBall, IBasicProps, IGameFieldProps, IJar } from "./interfaces"
import Jar from "./Jar"

const GameField = (props: IGameFieldProps) => {
    const { theme, balls, jars, activeBallId, onBallClick, onJarClick } = props;

    return (
        <GameFieldContainer>
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
                    return <Jar theme={theme} key={id} onBallClick={onBallClick} onJarClick={onJarClick} id={id} balls={ballsInJar} activeBallId={activeBallId} />
                })
            }
        </GameFieldContainer>
    );
}

const GameFieldContainer = styled.div`;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: inherited;
    width: inherited;
`

export default GameField;