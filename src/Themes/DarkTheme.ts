import { ITheme } from "./ITheme";

const DarkTheme: ITheme = {
    background: "#252525",
    font: 'white',
    accents: 'lightSteelBlue',
    title: {
        background: 'darkSlateGrey',
    },
    toolbar: {
        background: 'darkCyan',
    },
    field: {
        background: 'darkSlateGrey',
    },
    jars: {
        background: 'lightSlateGrey',
        border: 'lightSteelBlue'
    },
    balls: {
        firstColor: 'coral',
        secondColor: 'indigo',
        thirdColor: 'moccasin',
        fourthColor: 'indianRed',
        fifthColor: 'dodgerblue',
        sixthColor: 'mediumVioletRed',
        seventhColor: 'seaGreen',
        onSelectBorder: 'white',
    },
    modal: {
        shadow: 'rgba(37, 37, 37, 0.3)',
        background: 'darkCyan'
    }
}

export default DarkTheme;