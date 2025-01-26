import { IBallProps, IJarProps } from './interfaces';
import styled from "styled-components";
import { CssVarUtils } from '../styles/CssVariablesUtils';
import { FunctionalVariables } from '../styles/ICssVariables';

interface IProps {
    isFirstLevel: boolean,
}

const Jar = (props: IJarProps) => {
    const { level, id, balls, activeBallId, onBallClick, onJarClick } = props;
    const isFirstLevel = level === 1;
    return (
        <Container isFirstLevel={isFirstLevel} onClick={() => onJarClick(id)}>
            {
                balls.map((ball) => {
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

                    if (isFirstLevel) {
                        return <BigBall
                            key={ball.id}
                            onClick={(e) => onBallClick(id, ball.id, e)}
                            color={color}
                            isSelected={ball.id === activeBallId} />
                    } else {
                        return <SmallBall
                            key={ball.id}
                            onClick={(e) => onBallClick(id, ball.id, e)}
                            color={color}
                            isSelected={ball.id === activeBallId} />
                    }
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

const BigBall = styled.div`
    height: ${(props: IBallProps) => props.isSelected ? '42px' : '50px'};
    width: ${(props: IBallProps) => props.isSelected ? '42px' : '50px'};

    margin: 0px 5px 5px 5px;

    background-color: ${(props: IBallProps) => props.color};

    border-color: ${CssVarUtils.getVar(FunctionalVariables.BallOnSelectBorderColor)};
    border-width: ${(props: IBallProps) => props.isSelected ? '4px' : '0px'};
    border-style: solid;

    border-radius: 25px;
`;

const SmallBall = styled.div`
    height: ${(props: IBallProps) => props.isSelected ? '34px' : '40px'};
    width: ${(props: IBallProps) => props.isSelected ? '34px' : '40px'};

    margin: 0px 3px 3px 3px;

    background-color: ${(props: IBallProps) => props.color};

    border-color: ${CssVarUtils.getVar(FunctionalVariables.BallOnSelectBorderColor)};
    border-width: ${(props: IBallProps) => props.isSelected ? '3px' : '0px'};
    border-style: solid;

    border-radius: 20px;
`;

export default Jar;