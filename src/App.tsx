import React from 'react';
import './App.css';
import GameField from './Components/GameField';
import { IBall, IJar, IState } from './Components/interfaces';
import ballsSet from './initialStates/ballsSet';
import jarsSet from './initialStates/jarsSet';

export default class App extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);

        this.state = {
            selectedBallId: null,
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

    public handleClickOnJar = (jarId: number, ballId: number): void => {
        const clickedJar = this.state.jars.find(({ id }) => jarId === id);
        if (typeof clickedJar === 'undefined') {
            throw Error("Can't find jar by id");
        }

        const ballsNumber = clickedJar.ballsId.length;
        const topBallId = clickedJar.ballsId[ballsNumber - 1];

        if (topBallId !== ballId || this.state.selectedBallId === ballId) {
            this.setState({ selectedBallId: null });
        } else {
            this.setState({ selectedBallId: ballId });
        }
    }

    render() {
        const { balls, jars, selectedBallId } = this.state;

        return (
            <GameField
                selectedBallId={selectedBallId}
                balls={balls}
                jars={jars}
                onJarClick={this.handleClickOnJar}
            />
        );
    }
}


