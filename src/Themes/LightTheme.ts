import { ITheme } from "./ITheme";

const LightTheme: ITheme = {
    background: "darkGray",
    font: 'teal',
    accents: 'lightSteelBlue',
    title: {
        background: 'azure',
    },
    toolbar: {
        background: 'lavender',
    },
    field: {
        background: 'azure',
    },
    jars: {
        background: 'lightSteelBlue',
        border: 'lightSlateGrey'
    },
    balls: {
        firstColor: 'salmon',
        secondColor: 'steelBlue',
        thirdColor: 'gold',
        fourthColor: 'paleVioletRed',
        fifthColor: 'deepSkyBlue',
        sixthColor: 'mediumOrchid',
        seventhColor: 'yellowGreen',
        onSelectBorder: 'white',
    },
    modal: {
        shadow: 'rgba(169,169,169, 0.3)',
        background: 'lavender',
    }
}

export default LightTheme;