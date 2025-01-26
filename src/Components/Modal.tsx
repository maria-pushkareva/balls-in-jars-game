import styled from "styled-components";
import Button from "./Button";
import { IModalProps } from "./interfaces";
import { FunctionalVariables } from "../styles/ICssVariables";
import { CssVarUtils } from "../styles/CssVariablesUtils";

const Modal = (props: IModalProps) => {
    const { text, buttons, onDismiss } = props;
    return <ModalShadow>
        <ModalContainer>
            <DismissButton onClick={onDismiss}>{'x'}</DismissButton>
            <ModalBody className="modal-body">
                <TextContainer>{text}</TextContainer>
                { }
            </ModalBody>
            <ButtonsContainer>
                {buttons.map((button) => {
                    return <Button
                        key={button.text}
                        light={false}
                        onClick={button.onClick}
                        text={button.text}
                    />
                })}
            </ButtonsContainer>
        </ModalContainer>
    </ModalShadow>
}

const ModalShadow = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    
    background-color: ${CssVarUtils.getVar(FunctionalVariables.ModalShadow)};
    color: ${CssVarUtils.getVar(FunctionalVariables.FontColor)};
`

const ModalContainer = styled.div`
    position: relative;    
    height: 200px;
    width: 280px;

    background-color: ${CssVarUtils.getVar(FunctionalVariables.ModalBackgroundColor)};

    border: 3px solid ${CssVarUtils.getVar(FunctionalVariables.AccentsColor)};
    border-radius: 10px;
`

const ModalBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 150px;
    width: inherit;
`

const DismissButton = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`

const ButtonsContainer = styled.div`
    position: absolute;
    bottom: 0px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

const TextContainer = styled.div`
    text-align: center;

`

export default Modal;