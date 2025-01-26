import styled from "styled-components";
import { IToolbarProps, ThemeName } from "./interfaces";
import ButtonSmall from "./ButtonSmall";
import { FunctionalVariables } from "../styles/ICssVariables";
import { CssVarUtils } from "../styles/CssVariablesUtils";

const Toolbar = (props: IToolbarProps) => {
    const { level, moveCount, isBackActive, themeName, onBackClick, onThemeToggle, reset, switchLevel } = props;
    return <Container>
        <div>
            <TextSpan>{`Level: ${level === 1 ? 'Easy' : 'Medium'}`}</TextSpan>
            <TextSpan>{`Move count: ${moveCount}`}</TextSpan>
        </div>
        <div>
            <ButtonSmall text={'BACK'} light={true} onClick={onBackClick} disabled={isBackActive} />
            <ButtonSmall text={'RESET'} light={true} onClick={reset} disabled={moveCount !== 0} />
            <ButtonSmall text={level === 1 ? 'MEDIUM' : 'EASY'} light={true} onClick={switchLevel} />
            <ButtonSmall text={themeName === ThemeName.Light ? 'DARK' : 'LIGHT'} light={true} onClick={onThemeToggle} />
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