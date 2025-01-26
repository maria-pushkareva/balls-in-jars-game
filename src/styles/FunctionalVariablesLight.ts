import { FunctionalVariables, IFunctionalVariables } from "./ICssVariables";
import { CssVarUtils } from "./CssVariablesUtils";

const functionalVariablesLight: IFunctionalVariables = {
    [FunctionalVariables.BackgroundColor]: 'rgba(192, 192, 192, 1)',
    [FunctionalVariables.FontColor]: 'rgba(23, 112, 140, 1)',
    [FunctionalVariables.FontColorTransparent]: 'rgba(23, 112, 140, 0.5)',
    [FunctionalVariables.TitleBackgroundColor]: "#C1DFE1",
    [FunctionalVariables.AccentsColor]: "#5EA1B6",
    [FunctionalVariables.ToolbarBackgroundColor]: "#F0FAF9",
    [FunctionalVariables.FieldBackgroundColor]: "#F0FAF9",
    [FunctionalVariables.ModalShadow]: "rgba(192, 192, 192, 0.7)",
    [FunctionalVariables.ModalBackgroundColor]: "#C1DFE1",
    [FunctionalVariables.BallFirstColor]: "#FF5794",
    [FunctionalVariables.BallSecondColor]: "#C751FF",
    [FunctionalVariables.BallThirdColor]: "#FBFF42",
    [FunctionalVariables.BallFourthColor]: "#00A0C3",
    [FunctionalVariables.BallFifthColor]: "#90C948",
    [FunctionalVariables.BallSixthColor]: "#F55F2F",
    [FunctionalVariables.BallSeventhColor]: "#636FE3",
    [FunctionalVariables.BallOnSelectBorderColor]: "white",
    [FunctionalVariables.JarsBackgroundColor]: "#D9E6EC",
    [FunctionalVariables.JarsBorderColor]: "#7D9EC8",
    [FunctionalVariables.ButtonDarkBackgroundColor]: "#C1DFE1",
    [FunctionalVariables.ButtonLightBackgroundColor]: "#C1DFE1"
}

export const FunctionalVariablesLightComponent = CssVarUtils.createStyledComponent(functionalVariablesLight);
