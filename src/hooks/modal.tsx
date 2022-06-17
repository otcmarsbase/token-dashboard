import {
    Dispatch,
    FC, PropsWithChildren,
    SetStateAction,
    useState
} from "react";
import Modal from "react-modal";
import React from "react";

Modal.setAppElement('#modals');

export const useModal = (): [FC<PropsWithChildren<{}>>, boolean, Dispatch<SetStateAction<boolean>>] => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        overlay: {
            backgroundColor: 'unset'
        },
        content: {
            inset: 0,
            border: 'unset',
            borderRadius: 'unset',
            backgroundColor: 'unset'
        },
    };

    const ReturnModal: FC<PropsWithChildren<{}>> = ({children}) => {
        return modalIsOpen
            ? <Modal isOpen={modalIsOpen} style={customStyles}>
                {children}
            </Modal>
            : null
    }

    return [ReturnModal, modalIsOpen, setIsOpen]
}