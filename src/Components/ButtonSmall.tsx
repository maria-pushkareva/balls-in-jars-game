import styled from "styled-components";
import { IBasicProps, IButtonProps, IButtonSmallProps } from "./interfaces";


interface IStyledProps extends IBasicProps {
    light: boolean;
}
const ButtonSmall = (props: IButtonSmallProps) => {
    const { text, theme, onClick, light } = props;
    console.log(light);
    return <StyledButton theme={theme} light={light} onClick={onClick}>{text}</StyledButton>
}


const StyledButton = styled.button`
    height: 30px;

    margin: 10px 5px;

    border: 3px solid ${(props: IStyledProps) => props.theme.accents};
    border-radius: 10px;

    font-family: impact;

    cursor: pointer;

    background-color: ${(props: IStyledProps) => props.light ? props.theme.button.light : props.theme.button.dark};
    color: ${(props: IStyledProps) => props.theme.font}
`
export default ButtonSmall;