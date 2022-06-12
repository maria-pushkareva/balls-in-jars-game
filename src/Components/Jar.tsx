import { IBallProps, IBasicProps, IJarProps } from './interfaces';
import styled from "styled-components";
import { ITheme } from '../Themes/ITheme';

interface IProps {
    theme: ITheme,
    isFirstLevel: boolean,
}

const Jar = (props: IJarProps) => {
    const { theme, level, id, balls, activeBallId, onBallClick, onJarClick } = props;
    const isFirstLevel = level === 1;
    return (
        <Container theme={theme} isFirstLevel={isFirstLevel} onClick={() => onJarClick(id)}>
            {
                balls.map((ball) => {
                    let color: string;
                    switch (ball.colorId) {
                        case 1:
                            color = theme.balls.firstColor;
                            break;
                        case 2:
                            color = theme.balls.secondColor;
                            break;
                        case 3:
                            color = theme.balls.thirdColor;
                            break;
                        case 4:
                            color = theme.balls.fourthColor;
                            break;
                        case 5:
                            color = theme.balls.fifthColor;
                            break;
                        case 6:
                            color = theme.balls.sixthColor;
                            break;
                        case 7:
                            color = theme.balls.seventhColor;
                            break;
                        default:
                            throw Error("Color wasn't found");
                    }

                    if (isFirstLevel) {
                        return <BigBall
                            theme={theme}
                            key={ball.id}
                            onClick={(e) => onBallClick(id, ball.id, e)}
                            color={color}
                            isSelected={ball.id === activeBallId} />
                    } else {
                        return <SmallBall
                            theme={theme}
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

    background-color: ${(props: IProps) => props.theme.jars.background};
    border: 6px solid ${(props: IProps) => props.theme.jars.border};
    border-top: 3px solid  ${(props: IProps) => props.theme.jars.border};
    border-radius: 0px 0px ${(props: IProps) => props.isFirstLevel ? '25px 25px' : '20px 20px'};;
`;

const BigBall = styled.div`
    height: ${(props: IBallProps) => props.isSelected ? '42px' : '50px'};
    width: ${(props: IBallProps) => props.isSelected ? '42px' : '50px'};

    margin: 0px 5px 5px 5px;

    background-color: ${(props: IBallProps) => props.color};

    border-color: ${(props: IBallProps) => props.theme.balls.onSelectBorder};
    border-width: ${(props: IBallProps) => props.isSelected ? '4px' : '0px'};
    border-style: solid;

    border-radius: 25px;
`;

const SmallBall = styled.div`
    height: ${(props: IBallProps) => props.isSelected ? '34px' : '40px'};
    width: ${(props: IBallProps) => props.isSelected ? '34px' : '40px'};

    margin: 0px 3px 3px 3px;

    background-color: ${(props: IBallProps) => props.color};

    border-color: ${(props: IBallProps) => props.theme.balls.onSelectBorder};
    border-width: ${(props: IBallProps) => props.isSelected ? '3px' : '0px'};
    border-style: solid;

    border-radius: 20px;
`;

export default Jar;