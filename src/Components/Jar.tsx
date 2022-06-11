import { IBallProps, IBasicProps, IJarProps } from './interfaces';
import styled from "styled-components";
import { ITheme } from '../Themes/ITheme';

interface IProps {
    theme: ITheme,
    level: 1 | 2
}

const Jar = (props: IJarProps) => {
    const { theme, level, id, balls, activeBallId, onBallClick, onJarClick } = props;
    return (
        <Container theme={theme} level={level} onClick={() => onJarClick(id)}>
            {
                balls.map((ball) => {
                    let color: string;
                    switch (ball.color) {
                        case 'first':
                            color = theme.balls.firstColor;
                            break;
                        case 'second':
                            color = theme.balls.secondColor;
                            break;
                        case 'third':
                            color = theme.balls.thirdColor;
                            break;
                        case 'fourth':
                            color = theme.balls.fourthColor;
                            break;
                        case 'fifth':
                            color = theme.balls.fifthColor;
                            break;
                        case 'sixth':
                            color = theme.balls.sixthColor;
                            break;
                        case 'seventh':
                            color = theme.balls.seventhColor;
                            break;
                        default:
                            throw Error("Color wasn't found");
                    }

                    return <Ball
                        level={level}
                        theme={theme}
                        key={ball.id}
                        onClick={(e) => onBallClick(id, ball.id, e)}
                        color={color}
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

    background-color: ${(props: IProps) => props.theme.jars.background};
    border: 6px solid ${(props: IProps) => props.theme.jars.border};
    border-top: 3px solid  ${(props: IProps) => props.theme.jars.border};
    border-radius: 0px 0px 25px 25px;
`;

const Ball = styled.div`
    height: ${(props: IBallProps) => props.isSelected ? '42px' : '50px'};
    width: ${(props: IBallProps) => props.isSelected ? '42px' : '50px'};

    margin: 0px 5px 5px 5px;

    background-color: ${(props: IBallProps) => props.color};

    border-color: ${(props: IBallProps) => props.theme.balls.onSelectBorder};
    border-width: ${(props: IBallProps) => props.isSelected ? '4px' : '0px'};
    border-style: solid;

    border-radius: 25px;
`;

export default Jar;