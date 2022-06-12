import styled from "styled-components";
import { IBasicProps, IToolbarProps } from "./interfaces";
import { FaBeer } from 'react-icons/fa';
import ButtonSmall from "./ButtonSmall";
import LightTheme from "../Themes/LightTheme";

const Toolbar = (props: IToolbarProps) => {
    const { theme, level, moveCount, isBackActive, onBackClick, onThemeToggle, reset } = props;
    return <Container theme={theme}>
        <ButtonBlock>
        <TextDiv>{`Level: ${level === 1 ? 'Easy' : 'Medium'}`}</TextDiv>
        <TextDiv>{`Move count: ${moveCount}`}</TextDiv>
        </ButtonBlock>
        <ButtonBlock>
            <ButtonSmall text={'BACK'} light={true} onClick={onBackClick} theme={theme} />
            <ButtonSmall text={theme === LightTheme ? 'DARK' : 'LIGHT'} light={true} onClick={onThemeToggle} theme={theme} />
            <ButtonSmall text={'RESET'} light={true} onClick={reset} theme={theme} />
        </ButtonBlock>
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

const TextDiv = styled.span`
    width: 130px;
    margin: 8px 20px 0px 20px;
`

const ButtonBlock = styled.div`

`

export default Toolbar;