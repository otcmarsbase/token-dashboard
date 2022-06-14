import {createPortal} from "react-dom";
import {
    Dispatch,
    FC, PropsWithChildren,
    ReactNode,
    SetStateAction,
    useState
} from "react";

export const useModal = (id: string): [FC<PropsWithChildren<{}>>, boolean, Dispatch<SetStateAction<boolean>>] => {
    const [open, setOpen] = useState(false);

    const handleOpen = (children: ReactNode) => {
        const element = document.createElement("div");
        element.setAttribute("id", id);

        const modalRoot = document.getElementById('modals');

        if (!modalRoot) {
            throw new Error('modalRoot not exist')
        }

        modalRoot.appendChild(element);

        return createPortal(children, element)
    }

    const handleClose = () => {
        const el = document.getElementById(id);

        if (el) {
            el.remove()
        }

        return null;
    }


    const Modal: FC<PropsWithChildren<{}>> = ({children}) => {
        return open
            ? handleOpen(children)
            : handleClose()
    }

    return [Modal, open, setOpen]
}