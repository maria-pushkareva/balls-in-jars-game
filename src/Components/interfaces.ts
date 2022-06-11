export interface IState {
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

export interface IJarProps {
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

export interface IBallProps {
    color: string;
    isSelected: boolean;
}

export interface IGameFieldProps {
    jars: Array<IJar>,
    balls: Array<IBall>,
    activeBallId: number | null,
    onBallClick: (jarId: number, ballId: number, e: any) => void;
    onJarClick: (jarId: number) => void;
}

export interface IToolbarProps {
    moveCount: number,
    isWin: boolean,
    isBackActive: boolean,
    onBackClick: () => void,
}