import { FunctionalVariables, IFunctionalVariables } from "./ICssVariables";
import { CssVarUtils } from "./CssVariablesUtils";

const functionalVariablesDark: IFunctionalVariables = {
    [FunctionalVariables.BackgroundColor]: 'rgba(37, 37, 37, 1)',
    [FunctionalVariables.FontColor]: 'rgba(250, 250, 250, 1)',
    [FunctionalVariables.FontColorTransparent]: 'rgba(250, 250, 250, 0.5)',
    [FunctionalVariables.TitleBackgroundColor]: "#008A8A",
    [FunctionalVariables.AccentsColor]: '#B0C4DE',
    [FunctionalVariables.ToolbarBackgroundColor]: "#1A3D3B",
    [FunctionalVariables.FieldBackgroundColor]: "#1A3D3B",
    [FunctionalVariables.ModalShadow]: "rgba(37, 37, 37, 0.7)",
    [FunctionalVariables.ModalBackgroundColor]: "#008A8A",
    [FunctionalVariables.BallFirstColor]: "#FF9CAB",
    [FunctionalVariables.BallSecondColor]: "#A090FF",
    [FunctionalVariables.BallThirdColor]: "#FDFF97",
    [FunctionalVariables.BallFourthColor]: "#80FFF0",
    [FunctionalVariables.BallFifthColor]: "#BCFFA5",
    [FunctionalVariables.BallSixthColor]: "#FFB199",
    [FunctionalVariables.BallSeventhColor]: "#88C6FF",
    [FunctionalVariables.BallOnSelectBorderColor]: "white",
    [FunctionalVariables.JarsBackgroundColor]: "#274A4A",
    [FunctionalVariables.JarsBorderColor]: "#B0C4DE",
    [FunctionalVariables.ButtonDarkBackgroundColor]: "#1A3D3B",
    [FunctionalVariables.ButtonLightBackgroundColor]: "#008A8A"
}

export const FunctionalVariablesDarkComponent = CssVarUtils.createStyledComponent(functionalVariablesDark);
