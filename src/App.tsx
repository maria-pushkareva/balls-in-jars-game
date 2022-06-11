import React from 'react';
import './App.css';
import _ from 'lodash';
import GameField from './Components/GameField';
import { IBall, IJar, IState } from './Components/interfaces';
import ballsSet from './initialStates/ballsSet';
import jarsSet from './initialStates/jarsSet';

export default class App extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);

        this.state = {
            activeBallId: null,
            activeJarId: null,
            roundCount: null,
            jars: [],
            balls: []
        };
    }

    componentDidMount() {
        const balls = ballsSet;
        const jars = jarsSet;

        this.setState({ balls, jars })
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

        if (topBallId !== ballId || this.state.activeBallId === ballId) {
            this.setState({ activeBallId: null, activeJarId: null });
        } else {
            this.setState({ activeBallId: ballId, activeJarId: jarId });
        }
    }

    public handleClickOnJar = (jarId: number): void => {
        const { activeBallId, activeJarId, balls, jars } = this.state;

        if (activeBallId && activeJarId) {
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

                this.setState({
                    activeBallId: null,
                    activeJarId: null,
                    jars: newJars
                })
            }
        }
    }

    render() {
        const { balls, jars, activeBallId } = this.state;

        return (
            <GameField
                activeBallId={activeBallId}
                balls={balls}
                jars={jars}
                onBallClick={this.handleClickOnBall}
                onJarClick={this.handleClickOnJar}
            />
        );
    }
}


