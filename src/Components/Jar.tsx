import { IBallProps, IJarProps } from './interfaces';
import styled from "styled-components";
import { CssVarUtils } from '../styles/CssVariablesUtils';
import { FunctionalVariables } from '../styles/ICssVariables';
import Ball from './Ball';

interface IProps {
    isFirstLevel: boolean,
}

const Jar = (props: IJarProps) => {
    const { level, id, balls, activeBallId, onBallClick, onJarClick } = props;
    const isFirstLevel = level === 1;
    return (
        <Container isFirstLevel={isFirstLevel} onClick={() => onJarClick(id)}>
            {
                balls.map((ball, index) => {
                    let color: string;
                    switch (ball.colorId) {
                        case 1:
                            color = CssVarUtils.getVar(FunctionalVariables.BallFirstColor);
                            break;
                        case 2:
                            color = CssVarUtils.getVar(FunctionalVariables.BallSecondColor);
                            break;
                        case 3:
                            color = CssVarUtils.getVar(FunctionalVariables.BallThirdColor);
                            break;
                        case 4:
                            color = CssVarUtils.getVar(FunctionalVariables.BallFourthColor);
                            break;
                        case 5:
                            color = CssVarUtils.getVar(FunctionalVariables.BallFifthColor);
                            break;
                        case 6:
                            color = CssVarUtils.getVar(FunctionalVariables.BallSixthColor);
                            break;
                        case 7:
                            color = CssVarUtils.getVar(FunctionalVariables.BallSeventhColor);
                            break;
                        default:
                            throw Error("Color wasn't found");
                    }

                    return <Ball
                        key={ball.id}
                        ballSize={isFirstLevel ? 50 : 40}
                        gapSize={isFirstLevel ? 5 : 3}
                        color={color}
                        isSelected={ball.id === activeBallId}
                        isTop={index === balls.length - 1}
                        onClick={(e) => onBallClick(id, ball.id, e)} />
                })
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex; 
    flex-direction: column-reverse;   

    height: ${(props: IProps) => props.isFirstLevel ? '230px' : '180px'};
    width: ${(props: IProps) => props.isFirstLevel ? '60px' : '46px'};

    margin: 12px;

    background-color: ${CssVarUtils.getVar(FunctionalVariables.JarsBackgroundColor)};
    border: 6px solid ${CssVarUtils.getVar(FunctionalVariables.JarsBorderColor)};
    border-top: 3px solid  ${CssVarUtils.getVar(FunctionalVariables.JarsBorderColor)};
    border-radius: 0px 0px ${(props: IProps) => props.isFirstLevel ? '25px 25px' : '20px 20px'};;
`;

export default Jar;