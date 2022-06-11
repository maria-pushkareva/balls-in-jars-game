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

    render() {
        const {balls, jars, selectedBallId } = this.state;

        return (
            <GameField
                selectedBallId={selectedBallId}
                balls={balls}
                jars={jars}
            />
        );
    }
}


