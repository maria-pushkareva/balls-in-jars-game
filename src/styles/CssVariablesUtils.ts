import { css } from "styled-components";
import { FunctionalVariables, IFunctionalVariables } from "./ICssVariables";

export class CssVarUtils {
    static createStyledComponent = (variables: IFunctionalVariables) => {
        const stylesComponent = css`
            :root {
                ${Object.keys(variables).map((variable) => `--${variable}: ${variables[variable as FunctionalVariables]};`)}
            }
        `;
        return stylesComponent;
    }

    static getVar = (variableName: FunctionalVariables): string => `var(--${variableName})`;
}