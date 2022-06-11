import { IJar } from "../Components/interfaces";

const jarOne: IJar = {
    id: 10,
    ballsId: [2, 1]
}

const jarTwo: IJar = {
    id: 15,
    ballsId: [3, 5, 4]
}

const jarThree: IJar = {
    id: 20,
    ballsId: []
}

const jarsSet = [jarOne, jarTwo, jarThree];

export default jarsSet;