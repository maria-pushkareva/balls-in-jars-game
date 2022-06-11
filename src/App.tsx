import React from 'react';
import './App.css';
import _ from 'lodash';
import GameField from './Components/GameField';
import { IBall, IBasicProps, IJar, IState } from './Components/interfaces';
import { sixteenBallsSet, twentyEightBallsSet } from './initialStates/ballsSets';
import { nineJarSet, sixJarsSet } from './initialStates/jarsSets';
import styled from 'styled-components';
import Toolbar from './Components/Toolbar';
import DarkTheme from './Themes/DarkTheme';
import LightTheme from './Themes/LightTheme';

export default class App extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);

        this.state = {
            state: 'beginning',
            level: 1,
            theme: DarkTheme,
            activeBallId: null,
            activeJarId: null,
            previousJarsState: null,
            moveCount: 0,
            isWin: false,
            jars: [],
            balls: []
        };
    }

    public toggleTheme = (): void => {
        const { theme } = this.state;
        const newTheme = theme === DarkTheme ? LightTheme : DarkTheme;
        this.setState({ theme: newTheme })
    }

    public reset = (): void => {
        const { level } = this.state;
        this.setState({
            activeBallId: null,
            activeJarId: null,
            previousJarsState: null,
            moveCount: 0,
            isWin: false,
            jars: level === 1 ? sixJarsSet : nineJarSet,
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
            throw Error("Can't find jar by id");
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
                if (topBall?.color === activeBall.color) {
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

    public checkIfWin = (newJars: Array<IJar>): void => {
        const { balls } = this.state;

        let isWin: boolean = true;
        newJars.forEach((jar) => {
            if (jar.ballsId.length > 0 && jar.ballsId.length < 4) {
                isWin = false;
            }
            else if (jar.ballsId.length === 4) {
                const firstBallColor = this.findBall(jar.ballsId[0]).color;

                jar.ballsId.forEach((ballId) => {
                    const ballColor = this.findBall(ballId).color;
                    if (ballColor !== firstBallColor) {
                        isWin = false;
                    }
                })
            }
        })

        if(isWin) {
            setTimeout(() => {
                this.setState({ isWin, state: 'win' });
            }, 500)
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

    public choseFirstLevel = (): void => {
        this.setState({
            level: 1,
            state: 'game',
            jars: sixJarsSet,
            balls: sixteenBallsSet
        })
    }

    public choseSecondLevel = (): void => {
        this.setState({
            level: 2,
            state: 'game',
            jars: nineJarSet,
            balls: twentyEightBallsSet
        })
    }

    render() {
        const { state, theme, balls, jars, activeBallId, moveCount, isWin, previousJarsState } = this.state;

        return (
            <MainContainer id={"main-container"} theme={theme}>
                <CustomTitle theme={theme}>
                    {"SORT BALLS PUZZLE"}
                </CustomTitle>
                <Toolbar
                    theme={theme}
                    moveCount={moveCount}
                    isWin={isWin}
                    onBackClick={this.handleBackStep}
                    onThemeToggle={this.toggleTheme}
                    reset={this.reset}
                    isBackActive={previousJarsState !== null}
                />
                <Field theme={theme}>
                    {state === 'beginning' &&
                        <>
                            <div>{'Lets start a game!'}</div>
                            <ChoseLevelButton theme={theme} onClick={this.choseFirstLevel}>{'EASY'}</ChoseLevelButton>
                            <ChoseLevelButton theme={theme} onClick={this.choseSecondLevel}>{'MIDDLE'}</ChoseLevelButton>
                        </>
                    }
                    {state === 'game' &&
                        <GameField
                            theme={theme}
                            activeBallId={activeBallId}
                            balls={balls}
                            jars={jars}
                            onBallClick={this.handleClickOnBall}
                            onJarClick={this.handleClickOnJar}
                        />
                    }
                    {state === 'win' &&
                        <div>{'Hey, you won!'}</div>
                    }
                </Field>
            </MainContainer>
        );
    }
}

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: impact;
    
    background-color: ${(props: any) => props.theme.background}
`

const CustomTitle = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    height: 80px;
    width: 800px;

    font-size: 50px;

    color: ${(props: IBasicProps) => props.theme.font};
    background-color: ${(props: IBasicProps) => props.theme.title.background};
`

const Field = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    

    height: 400px;
    width: 800px;

    color: ${(props: IBasicProps) => props.theme.font};
    background-color: ${(props: IBasicProps) => props.theme.field.background};
`

const ChoseLevelButton = styled.button`
    height: 50px;
    width: 100px;

    margin: 20px;

    border: 5px solid ${(props: IBasicProps) => props.theme.accents};
    border-radius: 10px;

    background-color: ${(props: IBasicProps) => props.theme.toolbar.background};
`
