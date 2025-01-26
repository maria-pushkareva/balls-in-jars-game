import styled from "styled-components";
import Utils from "../Utils/Utils";
import { IButtonSmallProps } from "./interfaces";
import { CssVarUtils } from "../styles/CssVariablesUtils";
import { FunctionalVariables } from "../styles/ICssVariables";


interface IStyledProps {
    light: boolean;
    isDisabled: boolean;
}
const ButtonSmall = (props: IButtonSmallProps) => {
    const { text, onClick, light, disabled } = props;

    return <StyledButton light={light} onClick={onClick} isDisabled={!Utils.isTrueOrUndefined(disabled)}>{text}</StyledButton>
}


const StyledButton = styled.button`
    height: 30px;
    width: 60px;

    margin: 10px 5px;

    border: 3px solid ${CssVarUtils.getVar(FunctionalVariables.AccentsColor)};
    border-radius: 10px;

    font-family: impact;

    cursor: ${(props: IStyledProps) => props.isDisabled ? 'default' : 'pointer'};

    background-color: ${(props: IStyledProps) => props.light ? CssVarUtils.getVar(FunctionalVariables.ButtonLightBackgroundColor) : CssVarUtils.getVar(FunctionalVariables.ButtonDarkBackgroundColor)};
    color: ${(props: IStyledProps) => props.isDisabled ? CssVarUtils.getVar(FunctionalVariables.FontColorTransparent) : CssVarUtils.getVar(FunctionalVariables.FontColor)}
`
export default ButtonSmall;