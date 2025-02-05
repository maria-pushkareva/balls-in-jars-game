export interface IState {
    state: 'start' | 'game'
    themeName: ThemeName,
    level: 1 | 2,
    activeBallId: number | null,
    activeJarId: number | null,
    moveCount: number,
    previousJarsState: Array<IJar> | null,
    jars: Array<IJar>,
    balls: Array<IBall>,
    showModal: boolean,
    modal: {
        type: 'lost' | 'won',
        text: string
    }
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
    level: 1 | 2,
    balls: Array<IBall>;
    activeBallId: number | null;
    onBallClick: (jarId: number, ballId: number, e: any) => void;
    onJarClick: (jarId: number) => void;
}

export interface IBall {
    id: number;
    colorId: number;
    color?: string;
}

export interface IBallProps {
    ballSize: number;
    gapSize: number;
    color: string;
    isSelected: boolean;
    isTop: boolean;
    onClick: (e: React.MouseEvent) => void;
}

export interface IGameFieldProps {
    level: 1 | 2,
    jars: Array<IJar>,
    balls: Array<IBall>,
    activeBallId: number | null,
    onBallClick: (jarId: number, ballId: number, e: any) => void;
    onJarClick: (jarId: number) => void;
}

export interface IToolbarProps {
    level: 1 | 2,
    moveCount: number,
    isBackActive: boolean,
    themeName: ThemeName,
    onThemeToggle: () => void,
    onBackClick: () => void,
    reset: () => void,
    switchLevel: () => void
}

export interface IModalProps {
    text: string;
    buttons: Array<IButton>;
    onDismiss: () => void;
}

export interface IButtonProps {
    disabled?: boolean;
    isSmall?: boolean;
    light: boolean;
    text: string;
    onClick: () => void;
}

export interface IButton {
    text: string;
    onClick: () => void;
}

export enum ThemeName {
    Dark = 'dark',
    Light = 'light'
}