import React from 'react';
import './App.css';
import GameField from './Components/GameField';
// import { IState } from './Components/interfaces';

export default class App extends React.Component {

    constructor(props: any) {
        super(props);

        // How I can assign interface to state?
        this.state = {
            selectedBall: 1,
            roundCount: null,
        };
    }

    render() {
        return (
            <GameField selectedBall={1}/>
        );
    }
}


