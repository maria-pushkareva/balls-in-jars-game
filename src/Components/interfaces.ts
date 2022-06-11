import { ITheme } from "../Themes/ITheme";


export interface IBasicProps {
    theme: ITheme
}

export interface IState {
    state: 'beginning' | 'game' | 'win'
    theme: ITheme,
    level: number,
    activeBallId: number | null,
    activeJarId: number | null,
    moveCount: number,
    previousJarsState: Array<IJar> | null,
    isWin: boolean,
    jars: Array<IJar>,
    balls: Array<IBall>
}

export interface IJar {
    id: number;
    ballsId: Array<number>;
    // balls: Array<IBall>;
    // activeBallId: number | false;
    // color?: string;
}

export interface IJarProps extends IBasicProps {
    id: number;
    // balls: Array<number>;
    balls: Array<IBall>;
    activeBallId: number | null;
    onBallClick: (jarId: number, ballId: number, e: any) => void;
    onJarClick: (jarId: number) => void;
}

export interface IBall {
    id: number;
    color: string;
}

export interface IBallProps extends IBasicProps {
    color: string;
    isSelected: boolean;
}

export interface IGameFieldProps extends IBasicProps {
    jars: Array<IJar>,
    balls: Array<IBall>,
    activeBallId: number | null,
    onBallClick: (jarId: number, ballId: number, e: any) => void;
    onJarClick: (jarId: number) => void;
}

export interface IToolbarProps extends IBasicProps {
    moveCount: number,
    isWin: boolean,
    isBackActive: boolean,
    onThemeToggle: () => void,
    onBackClick: () => void,
    reset: () => void
}