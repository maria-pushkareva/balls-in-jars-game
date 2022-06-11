export interface IState {
    selectedBallId: number | null,
    roundCount: number | null,
    jars: Array<IJar>,
    balls: Array<IBall>
}

export interface IJar {
    id: number;
    ballsId: Array<number>;
    // balls: Array<IBall>;
    // selectedBallId: number | false;
    // color?: string;
}

export interface IJarProps {
    id: number;
    // balls: Array<number>;
    balls: Array<IBall>;
    selectedBallId: number | null;
}

export interface IBall {
    id: number;
    color: string;
}

export interface IBallProps {
    color: string;
    isSelected: boolean;
}