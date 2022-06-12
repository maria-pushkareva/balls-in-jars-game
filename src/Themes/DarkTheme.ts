import { ITheme } from "./ITheme";

const dark = '#1A3D3B';
const medium = '#008A8A';
const light = '#B0C4DE';

const DarkTheme: ITheme = {
    background: 'rgba(37, 37, 37, 1)',
    font: 'white',
    accents: light,
    title: {
        background: medium,
    },
    toolbar: {
        background: dark,
    },
    field: {
        background: dark,
    },
    jars: {
        background: '#274A4A',
        border: light
    },
    balls: {
        firstColor: '#FF9CAB',
        secondColor: '#A090FF',
        thirdColor: '#FDFF97',
        fourthColor: '#80FFF0',
        fifthColor: '#BCFFA5',
        sixthColor: '#FFB199',
        seventhColor: '#88C6FF',
        onSelectBorder: 'white',
    },
    modal: {
        shadow: 'rgba(37, 37, 37, 0.7)',
        background: medium
    },
    button: {
        light: medium,
        dark: dark
    }
}

export default DarkTheme;