import React, { useState } from "react";
import Modal from 'react-modal';

/**
 * Composant de modal personnalisé.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {React.Ref} props.modalRef - La référence à l'élément modal.
 * @param {string} props.title - Le titre de la modal.
 * @param {React.ReactNode} props.body - Le contenu du corps de la modal.
 * @param {React.ReactNode} props.footer - Le contenu du pied de la modal.
 * @returns {JSX.Element} Le composant de la modal personnalisée.
 */
const ModalComp = ({ modalRef, title, body, footer }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    /**
     * Fonction pour ouvrir la modal.
     */
    const openModal = () => {
        setModalIsOpen(true);
    };

    /**
     * Fonction pour fermer la modal.
     */
    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            {modalIsOpen && (
                <div className="modal-wrapper" ref={modalRef}>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                    ></Modal>
                    <div className="modal-content">
                        <h1>{title}</h1>
                        <div>{body}</div>
                        <div>
                            {footer}
                            <button
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalComp;
