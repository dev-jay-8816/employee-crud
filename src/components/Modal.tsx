import React from 'react'

interface IModal {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => Promise<void> | void;
}

const Modal: React.FC<IModal> = ({
    title,
    isOpen,
    onClose,
    onConfirm
}) => {

    if (!isOpen) {
        return <></>
    }

    return (
        <div>

        </div>
    )
}

export default Modal
