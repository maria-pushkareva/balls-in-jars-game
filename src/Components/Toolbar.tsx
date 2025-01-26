import styled from "styled-components";
import { IBasicProps, IToolbarProps } from "./interfaces";
import ButtonSmall from "./ButtonSmall";
import LightTheme from "../Themes/LightTheme";

const Toolbar = (props: IToolbarProps) => {
    const { theme, level, moveCount, isBackActive, onBackClick, onThemeToggle, reset, switchLevel } = props;
    return <Container theme={theme}>
        <div>
            <TextSpan>{`Level: ${level === 1 ? 'Easy' : 'Medium'}`}</TextSpan>
            <TextSpan>{`Move count: ${moveCount}`}</TextSpan>
        </div>
        <div>
            <ButtonSmall text={'BACK'} light={true} onClick={onBackClick} theme={theme} disabled={isBackActive} />
            <ButtonSmall text={'RESET'} light={true} onClick={reset} theme={theme} disabled={moveCount !== 0} />
            <ButtonSmall text={level === 1 ? 'MEDIUM' : 'EASY'} light={true} onClick={switchLevel} theme={theme} />
            <ButtonSmall text={theme === LightTheme ? 'DARK' : 'LIGHT'} light={true} onClick={onThemeToggle} theme={theme} />
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

    color: ${(props: IBasicProps) => props.theme.font};
    background-color:  ${(props: IBasicProps) => props.theme.toolbar.background};
`

const TextSpan = styled.span`
    width: 130px;
    margin: 0px 20px;
`

export default Toolbar;