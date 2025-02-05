import styled from "styled-components";
import { IToolbarProps, ThemeName } from "./interfaces";
import Button from "./Button";
import { FunctionalVariables } from "../styles/ICssVariables";
import { CssVarUtils } from "../styles/CssVariablesUtils";

interface IButton {
    text: string;
    disabled?: boolean;
    onClick: () => void;
}

const Toolbar = (props: IToolbarProps) => {
    const { level, moveCount, isBackActive, themeName, onBackClick, onThemeToggle, reset, switchLevel } = props;

    const buttons: IButton[] = [
        {
            text: 'BACK',
            onClick: onBackClick,
            disabled: isBackActive
        },
        {
            text: 'RESET',
            onClick: reset,
            disabled: moveCount !== 0
        },
        {
            text: level === 1 ? 'MEDIUM' : 'EASY',
            onClick: switchLevel,
        },
        {
            text: themeName === ThemeName.Light ? 'DARK' : 'LIGHT',
            onClick: onThemeToggle,
        },
    ]

    return <Container>
        <div>
            <TextSpan>{`Level: ${level === 1 ? 'Easy' : 'Medium'}`}</TextSpan>
            <TextSpan>{`Move count: ${moveCount}`}</TextSpan>
        </div>
        <div>
            {buttons.map(({ text, disabled, onClick }) => (
                <Button text={text} disabled={disabled} onClick={onClick} light={true} isSmall={true} />
            ))}
        </div>
    </Container>
}


const Container = styled.div`
    position: relative;
    top: 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 50px;
    width: inherit;

    font-size: 20px;

    color: ${CssVarUtils.getVar(FunctionalVariables.FontColor)};
    background-color:  ${CssVarUtils.getVar(FunctionalVariables.ToolbarBackgroundColor)};
`

const TextSpan = styled.span`
    width: 130px;
    margin: 0px 20px;
`

export default Toolbar;