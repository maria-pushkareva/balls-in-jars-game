import React from 'react';
import './App.css';
import _ from 'lodash';
import GameField from './Components/GameField';
import { IBall, IJar, IState, ThemeName } from './Components/interfaces';
import { sixteenBallsSet, twentyEightBallsSet } from './initialStates/ballsSets';
import { nineJarSet, sixJarsSet } from './initialStates/jarsSets';
import styled, { createGlobalStyle } from 'styled-components';
import Toolbar from './Components/Toolbar';
import Modal from './Components/Modal';
import Button from './Components/Button';
import { FunctionalVariablesLightComponent } from './styles/FunctionalVariablesLight';
import { FunctionalVariablesDarkComponent } from './styles/FunctionalVariablesDark';
import { CssVarUtils } from './styles/CssVariablesUtils';
import { FunctionalVariables } from './styles/ICssVariables';

export default class App extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);

        this.state = {
            state: 'start',
            level: 1,
            themeName: ThemeName.Dark,
            activeBallId: null,
            activeJarId: null,
            previousJarsState: null,
            moveCount: 0,
            jars: [],
            balls: [],
            showModal: false,
            modal: {
                type: 'won',
                text: 'Hey, it is modal'
            }
        };
    }

    public toggleTheme = (): void => {
        const { themeName } = this.state;
        const newThemeName = themeName === ThemeName.Dark ? ThemeName.Light : ThemeName.Dark;
        this.setState({ themeName: newThemeName })
    }

    public reset = (): void => {
        const { level } = this.state;
        this.setState({
            activeBallId: null,
            activeJarId: null,
            previousJarsState: null,
            moveCount: 0,
            jars: level === 1 ? sixJarsSet : nineJarSet,
            showModal: false
        })
    }

    public switchLevel = (): void => {
        const { level } = this.state;
        level === 1 ? this.startSecondLevel() : this.startFirstLevel();
    }

    public startFirstLevel = (): void => {
        this.setState({
            state: 'game',
            level: 1,
            activeBallId: null,
            activeJarId: null,
            previousJarsState: null,
            moveCount: 0,
            jars: sixJarsSet,
            balls: sixteenBallsSet,
            showModal: false
        })
    }

    public startSecondLevel = (): void => {
        this.setState({
            state: 'game',
            level: 2,
            activeBallId: null,
            activeJarId: null,
            previousJarsState: null,
            moveCount: 0,
            jars: nineJarSet,
            balls: twentyEightBallsSet,
            showModal: false
        })
    }

    private findJar = (jarId: number): IJar => {
        const jar = this.state.jars.find(({ id }) => jarId === id);
        if (typeof jar === 'undefined') {
            throw Error("Can't find jar by id");
        }
        return jar;
    }

    private findBall = (ballId: number): IBall => {
        const ball = this.state.balls.find(({ id }) => ballId === id);
        if (typeof ball === 'undefined') {
            throw Error("Can't find ball by id");
        }
        return ball;
    }

    public handleClickOnBall = (jarId: number, ballId: number, e: any): void => {
        e.stopPropagation();

        const clickedJar = this.findJar(jarId);

        const ballsNumber = clickedJar.ballsId.length;
        const topBallId = clickedJar.ballsId[ballsNumber - 1];

        if (/*topBallId !== ballId ||*/ this.state.activeBallId === ballId) {
            this.setState({ activeBallId: null, activeJarId: null });
        } else if (topBallId === ballId) {
            this.setState({ activeBallId: ballId, activeJarId: jarId });
        }
    }

    public handleClickOnJar = (jarId: number): void => {
        const { activeBallId, activeJarId, balls, jars } = this.state;

        if (activeBallId && activeJarId && activeJarId !== jarId) {
            const activeBall = this.findBall(activeBallId);

            const clickedJar = this.findJar(jarId);

            let canMove: boolean = false;

            if (clickedJar.ballsId.length === 0) {
                canMove = true;
            } else {
                const ballsNumber = clickedJar.ballsId.length;
                const topBallId = clickedJar.ballsId[ballsNumber - 1];
                const topBall = balls.find(({ id }) => id === topBallId);
                if (topBall?.colorId === activeBall.colorId) {
                    canMove = true;
                }
            }

            if (canMove) {
                const activeJar = this.findJar(activeJarId);

                const activeJarNewBallsId = activeJar?.ballsId.slice(0, -1);
                const newActiveJar: IJar = { id: activeJarId, ballsId: activeJarNewBallsId };

                const clickedJarNewBallsId = [...clickedJar.ballsId, activeBallId];
                const newClickedJar: IJar = { id: jarId, ballsId: clickedJarNewBallsId };

                const newJars = _.cloneDeep(jars).map((jar) => {
                    switch (jar.id) {
                        case activeJarId:
                            return newActiveJar;
                        case jarId:
                            return newClickedJar;
                        default:
                            return jar;
                    }
                })

                const newMoveCount = this.state.moveCount + 1;

                this.setState({
                    activeBallId: null,
                    activeJarId: null,
                    jars: newJars,
                    moveCount: newMoveCount,
                    previousJarsState: jars
                })

                this.checkIfWin(newJars);
            }
        }
    }

    public checkIfWin = (jars: Array<IJar>): void => {
        let isWin: boolean = true;
        jars.forEach((jar) => {
            if (jar.ballsId.length > 0 && jar.ballsId.length < 4) {
                isWin = false;
            }
            else if (jar.ballsId.length === 4) {
                const firstBallColor = this.findBall(jar.ballsId[0]).colorId;

                jar.ballsId.forEach((ballId) => {
                    const ballColor = this.findBall(ballId).colorId;
                    if (ballColor !== firstBallColor) {
                        isWin = false;
                    }
                })
            }
        })

        if (isWin) {
            setTimeout(() => {
                this.setState({
                    showModal: true,
                    modal: {
                        text: `You did it in ${this.state.moveCount} steps!`,
                        type: 'won'
                    }
                });
            }, 300)
        } else {
            this.checkIfLost(jars);
        }
    }

    public checkIfLost = (jars: Array<IJar>): void => {
        let canMakeSteps = false;
        const availableColors: Array<number> = [];

        jars.forEach((jar) => {
            const length = jar.ballsId.length;

            if (length === 0) {
                canMakeSteps = true;
            } else {
                const topBall = this.findBall(jar.ballsId[length - 1]);
                const index = availableColors.indexOf(topBall.colorId);
                if (index !== -1) {
                    canMakeSteps = true;
                }

                if (length < 4) {
                    availableColors.push(topBall.colorId);
                }
            }
        });

        if (!canMakeSteps) {
            setTimeout(() => {
                this.setState({
                    showModal: true,
                    modal: {
                        text: 'You lost!',
                        type: 'lost'
                    }
                });
            }, 300)
        }
    }

    public handleBackStep = (): void => {
        const { previousJarsState } = this.state;
        const newMoveCount = this.state.moveCount + 1;
        if (previousJarsState) {
            this.setState({
                activeBallId: null,
                activeJarId: null,
                jars: previousJarsState,
                moveCount: newMoveCount,
                previousJarsState: null
            })
        }
    }

    public dismissModal = (): void => {
        this.setState({
            showModal: false
        })
    }

    render() {
        const { state, themeName, level, balls, jars, activeBallId, moveCount, previousJarsState, showModal, modal } = this.state;

        return (
            <Background id={"main-container"}>
                <GlobalStyle themeName={themeName} />
                <MainContainer>
                    <CustomTitle>
                        {"SORT BALLS PUZZLE"}
                    </CustomTitle>
                    <Field>
                        {state === 'start' &&
                            <MessageContainer>
                                <div style={{ fontSize: '30px', margin: '10px' }}>{'Lets start!'}</div>
                                <ButtonsContainer>
                                    <Button light={true} text={'EASY'} onClick={this.startFirstLevel} />
                                    <Button light={true} text={'MEDIUM'} onClick={this.startSecondLevel} />
                                </ButtonsContainer>
                            </MessageContainer>
                        }
                        {state === 'game' &&
                            <>
                                <Toolbar
                                    level={level}
                                    themeName={themeName}
                                    moveCount={moveCount}
                                    onBackClick={this.handleBackStep}
                                    onThemeToggle={this.toggleTheme}
                                    reset={this.reset}
                                    switchLevel={this.switchLevel}
                                    isBackActive={previousJarsState !== null}
                                />
                                <GameField
                                    level={level}
                                    activeBallId={activeBallId}
                                    balls={balls}
                                    jars={jars}
                                    onBallClick={this.handleClickOnBall}
                                    onJarClick={this.handleClickOnJar}
                                />
                            </>
                        }
                    </Field>
                    {showModal &&
                        <Modal
                            text={modal.text}
                            onDismiss={this.dismissModal}
                            buttons={[
                                {
                                    text: modal.type === 'won' ? 'Play again' : 'Try again',
                                    onClick: level === 1 ? this.startFirstLevel : this.startSecondLevel
                                },
                                {
                                    text: modal.type === 'won' ? 'Play other level' : 'Try other level',
                                    onClick: level === 1 ? this.startSecondLevel : this.startFirstLevel
                                }
                            ]}
                        />
                    }
                </MainContainer>
            </Background>
        );
    }
}

const Background = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: impact;
    
    background-color: ${CssVarUtils.getVar(FunctionalVariables.BackgroundColor)};
`
const MainContainer = styled.div`
    height: 530px;
    width: 800px
`

const CustomTitle = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    height: 80px;
    width: inherit;

    font-size: 50px;

    color:  ${CssVarUtils.getVar(FunctionalVariables.FontColor)};
    background-color: ${CssVarUtils.getVar(FunctionalVariables.TitleBackgroundColor)};

    border-bottom: 3px solid ${CssVarUtils.getVar(FunctionalVariables.AccentsColor)};
`

const MessageContainer = styled.div`
    height: 450px;
    width: inherit;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Field = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    height: 450px;
    width: inherit;

    color: ${CssVarUtils.getVar(FunctionalVariables.FontColor)};
    background-color: ${CssVarUtils.getVar(FunctionalVariables.FieldBackgroundColor)};
`

const ButtonsContainer = styled.div`
    margin: 10px;
`

const GlobalStyle = createGlobalStyle<{ themeName: ThemeName }>`
    ${({ themeName }) => themeName === ThemeName.Dark ? FunctionalVariablesDarkComponent : FunctionalVariablesLightComponent}
`