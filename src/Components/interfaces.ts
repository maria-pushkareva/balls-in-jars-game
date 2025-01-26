import { VoidExpression } from "typescript";
import { ITheme } from "../Themes/ITheme";


export interface IBasicProps {
    theme: ITheme
}

export interface IState {
    state: 'start' | 'game'
    theme: ITheme,
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

export interface IJarProps extends IBasicProps {
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

export interface IBallProps extends IBasicProps {
    color: string;
    isSelected: boolean;
}

export interface IGameFieldProps extends IBasicProps {
    level: 1 | 2,
    jars: Array<IJar>,
    balls: Array<IBall>,
    activeBallId: number | null,
    onBallClick: (jarId: number, ballId: number, e: any) => void;
    onJarClick: (jarId: number) => void;
}

export interface IToolbarProps extends IBasicProps {
    level: 1 | 2,
    moveCount: number,
    isBackActive: boolean,
    onThemeToggle: () => void,
    onBackClick: () => void,
    reset: () => void,
    switchLevel: () => void
}

export interface IModalProps extends IBasicProps {
    text: string;
    buttons: Array<IButton>;
    onDismiss: () => void;
}

export interface IButtonProps extends IBasicProps {
    text: string;
    light: boolean;
    onClick: () => void;
}

export interface IButtonSmallProps extends IBasicProps {
    disabled?: boolean,
    text: string,
    light: boolean;
    onClick: () => void;
}

export interface IButton {
    text: string;
    onClick: () => void;
}