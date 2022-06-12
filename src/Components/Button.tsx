import styled from "styled-components";
import { IBasicProps, IButtonProps } from "./interfaces";

const Button = (props: IButtonProps) => {
    const { text, theme, onClick } = props;
    return <StyledButton theme={theme} onClick={onClick}>{text}</StyledButton>
}


const StyledButton = styled.button`
    height: 50px;
    width: 100px;

    margin: 10px 20px;

    border: 3px solid ${(props: IBasicProps) => props.theme.accents};
    border-radius: 10px;

    font-family: impact;

    cursor: pointer;

    background-color: ${(props: IBasicProps) => props.theme.toolbar.background};
    color: ${(props: IBasicProps) => props.theme.font}
`
export default Button;