export interface IState {
    roundCount: number;
    selectedBall: number | false;
}

export interface IJar {
    balls: Array<IBall>;
    selectedBall: number | false;
    color?: string;
}

export interface IBall {
    color: string;
    id: number;
    position?: number;
}

export interface IBallProps {
    color: string;
    isSelected: boolean;
}