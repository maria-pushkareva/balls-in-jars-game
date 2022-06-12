import React from "react"
import styled from "styled-components";
import Button from "./Button";
import { IBasicProps, IModalProps } from "./interfaces";

const Modal = (props: IModalProps) => {
    const { theme, text, buttons, onDismiss } = props;
    return <ModalShadow theme={theme}>
        <ModalContainer theme={theme}>
            <DismissButton onClick={onDismiss}>{'x'}</DismissButton>
            <ModalBody className="modal-body">
                <TextContainer>{text}</TextContainer>
                { }
            </ModalBody>
            <ButtonsContainer>
                {buttons.map((button) => {
                    return <Button
                        theme={theme}
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

    
    background-color: ${(props: IBasicProps) => props.theme.modal.shadow};
    color: ${(props: IBasicProps) => props.theme.font};
`

const ModalContainer = styled.div`
    position: relative;    
    height: 200px;
    width: 280px;

    background-color: ${(props: IBasicProps) => props.theme.modal.background};

    border: 3px solid ${(props: IBasicProps) => props.theme.accents};
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