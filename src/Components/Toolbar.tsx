import styled from "styled-components";
import { IToolbarProps } from "./interfaces";

const Toolbar = (props: IToolbarProps) => {
    const { moveCount, isWin, isBackActive, onBackClick } = props;
    return <Container>
        <MoveCountDiv>{`Move count: ${moveCount}`}</MoveCountDiv>
        {isWin &&
            <div>{"Hurray!"}</div>
        }
        <div onClick={onBackClick} style={{ cursor: isBackActive ? "pointer" : ""}}>{"Back"}</div>
    </Container>
}


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 50px;
    width: 800px;

    font-size: 20px;
    font-family: impact;

    color: white;
    background-color: darkcyan;
`

const MoveCountDiv = styled.div`
    margin-right: 100px;
`

export default Toolbar;