export enum FunctionalVariables {
    BackgroundColor = 'background-color',
    FontColor = 'font-color',
    FontColorTransparent = 'font-color-transparent',
    TitleBackgroundColor = 'title-background-color',
    AccentsColor = 'accents-color',
    ToolbarBackgroundColor = 'toolbar-background-color',
    FieldBackgroundColor = 'field-background-color',
    ModalShadow = 'modal-shadow',
    ModalBackgroundColor = 'modal-background-color',
    BallFirstColor = 'ball-first-color',
    BallSecondColor = 'ball-second-color',
    BallThirdColor = 'ball-third-color',
    BallFourthColor = 'ball-fourth-color',
    BallFifthColor = 'ball-fifth-color',
    BallSixthColor = 'ball-sixth-color',
    BallSeventhColor = 'ball-seventh-color',
    BallOnSelectBorderColor = 'ball-on-select-border-color',
    JarsBackgroundColor = 'jars-background-color',
    JarsBorderColor = 'jars-border-color',
    ButtonDarkBackgroundColor = 'button-dark-background-color',
    ButtonLightBackgroundColor = 'button-light-background-color',
}

export enum GlobalTokens {

}

export type IFunctionalVariables = {
    [key in FunctionalVariables]: string
    // [key in FunctionalVariables]: FunctionalVariables | GlobalTokens
}