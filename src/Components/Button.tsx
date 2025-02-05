import styled from "styled-components";
import Utils from "../Utils/Utils";
import { IButtonProps } from "./interfaces";
import { CssVarUtils } from "../styles/CssVariablesUtils";
import { FunctionalVariables } from "../styles/ICssVariables";


interface IStyledProps {
    $light: boolean;
    $isDisabled: boolean;
    $isSmall?: boolean;
}

const ButtonSmall = (props: IButtonProps) => {
    const { text, light, disabled, isSmall, onClick } = props;

    return (
        <StyledButton
            $light={light}
            $isSmall={isSmall}
            $isDisabled={!Utils.isTrueOrUndefined(disabled)}
            onClick={onClick}
        >
            {text}
        </StyledButton>
    )
}


const StyledButton = styled.button<IStyledProps>`
    height: ${({ $isSmall }) => $isSmall ? 30 : 50}px;
    width: ${({ $isSmall }) => $isSmall ? 60 : 100}px;

    margin: 10px ${({ $isSmall }) => $isSmall ? 5 : 20}px;

    border: 3px solid ${CssVarUtils.getVar(FunctionalVariables.AccentsColor)};
    border-radius: 10px;

    background-color: ${({ $light }) =>
        $light
            ? CssVarUtils.getVar(FunctionalVariables.ButtonLightBackgroundColor)
            : CssVarUtils.getVar(FunctionalVariables.ButtonDarkBackgroundColor)};
    color: ${({ $isDisabled }) =>
        $isDisabled
            ? CssVarUtils.getVar(FunctionalVariables.FontColorTransparent)
            : CssVarUtils.getVar(FunctionalVariables.FontColor)};
    
    font-family: impact;

    cursor: ${({ $isDisabled }) => $isDisabled ? 'default' : 'pointer'};
`
export default ButtonSmall;