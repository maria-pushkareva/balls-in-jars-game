import styled from "styled-components";
import { IBasicProps, IToolbarProps } from "./interfaces";

const Toolbar = (props: IToolbarProps) => {
    const { theme, level, moveCount, isBackActive, onBackClick, onThemeToggle, reset } = props;
    return <Container theme={theme}>
        <MoveCountDiv>{`Level: ${level} | Move count: ${moveCount}`}</MoveCountDiv>
        <div onClick={onBackClick} style={{ cursor: isBackActive ? "pointer" : 'default', marginRight: '100px'}}>{"Back"}</div>
        <div onClick={onThemeToggle} style={{ cursor: 'pointer', marginRight: '100px'}}>{'Toggle theme'}</div>
        <div onClick={reset} style={{ cursor: 'pointer'}}>{'Reset'}</div>
    </Container>
}


const Container = styled.div`
    position: relative;
    top: 0px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 50px;
    width: inherit;

    font-size: 20px;

    color: ${(props: IBasicProps) => props.theme.font};
    background-color:  ${(props: IBasicProps) => props.theme.toolbar.background};
`

const MoveCountDiv = styled.div`
    margin-right: 100px;
`

export default Toolbar;