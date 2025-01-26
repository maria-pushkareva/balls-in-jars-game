import styled from "styled-components";
import { CssVarUtils } from "../styles/CssVariablesUtils";
import { FunctionalVariables } from "../styles/ICssVariables";
import { IBallProps } from "./interfaces";

type ICircleDiv = Omit<IBallProps, 'onClick'>

const Ball = ({ color, isSelected, isTop: isTop, ballSize, gapSize, onClick }: IBallProps) => {
    return <CircleDiv color={color} isSelected={isSelected} isTop={isTop} ballSize={ballSize} gapSize={gapSize} onClick={onClick} />
}

// TODO: remove border if it won't be returned
const CircleDiv = styled.div<ICircleDiv>`
    height: ${({ ballSize }) => `${ballSize}px`};
    width: ${({ ballSize }) => `${ballSize}px`};
    box-sizing: border-box;

    margin: ${({ gapSize }) => gapSize}px;
    margin-top: 0px;

    background-color: ${({ color }) => color};

    border-color: ${CssVarUtils.getVar(FunctionalVariables.BallOnSelectBorderColor)};
    border-width: 0px;
    border-style: solid;

    border-radius: 50%;

    cursor: ${({ isTop: isTop }) => isTop ? 'pointer' : 'default'};

    &:hover {
        box-shadow: ${({ isTop }) => isTop && 'inset 0px 0px 20px rgb(255, 255, 255)'};
    }

    animation: ${({ isSelected }) => isSelected && 'bounce 1.5s ease-in-out infinite'};

    @keyframes bounce {
        0%, 100% {
            transform: translateY(2px);
            height: ${({ ballSize }) => `${ballSize - 2}px`}
        }
        50% {
            transform: translateY(-2px);
            height: ${({ ballSize }) => `${ballSize}px`}
        }
    }
`;

export default Ball;
