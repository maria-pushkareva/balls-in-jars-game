import { ITheme } from "./ITheme";
const light = '#F0FAF9';
const medium = '#C1DFE1';
const accents = '#5EA1B6';

const LightTheme: ITheme = {
    background: 'rgba(192, 192, 192, 1)',
    font: '#17708C',
    accents: accents,
    title: {
        background: medium,
    },
    toolbar: {
        background: light,
    },
    field: {
        background: light,
    },
    jars: {
        background: '#D9E6EC',
        border: '#7D9EC8'
    },
    balls: {
        firstColor: '#FF5794',
        secondColor: '#C751FF',
        thirdColor: '#FBFF42',
        fourthColor: '#00A0C3',
        fifthColor: '#90C948',
        sixthColor: '#F55F2F',
        seventhColor: '#636FE3',
        onSelectBorder: 'white',
    },
    modal: {
        shadow: 'rgba(192, 192, 192, 0.7)',
        background: medium,
    },
    button: {
        light: medium,
        dark: medium
    }
}

export default LightTheme;