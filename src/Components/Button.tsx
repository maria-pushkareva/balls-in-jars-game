import styled from "styled-components";
import { IButtonProps } from "./interfaces";
import { CssVarUtils } from "../styles/CssVariablesUtils";
import { FunctionalVariables } from "../styles/ICssVariables";


interface IStyledProps {
    $light: boolean;
}
const Button = (props: IButtonProps) => {
    const { text, onClick, light } = props;
    return <StyledButton $light={light} onClick={onClick}>{text}</StyledButton>
}


const StyledButton = styled.button<IStyledProps>`
    height: 50px;
    width: 100px;

    margin: 10px 20px;

    border: 3px solid ${CssVarUtils.getVar(FunctionalVariables.AccentsColor)};
    border-radius: 10px;

    font-family: impact;

    cursor: pointer;

    background-color: ${({ $light }) => $light ? CssVarUtils.getVar(FunctionalVariables.ButtonLightBackgroundColor) : CssVarUtils.getVar(FunctionalVariables.ButtonDarkBackgroundColor)};
    color: ${CssVarUtils.getVar(FunctionalVariables.FontColor)}
`
export default Button;