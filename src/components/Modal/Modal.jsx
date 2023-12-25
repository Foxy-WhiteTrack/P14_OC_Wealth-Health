import React, { useEffect, useState } from "react"
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const ModalComp = ({ modalRef, title, body, footer }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            {showModal && (
                <div className="modal-wrapper" ref={modalRef}>
                    <Modal
                        isOpen={showModal}
                        onRequestClose={close}
                        contentLabel="Example Modal"
                    ></Modal>
                    <div className="modal-content">
                        <h1>{title}</h1>
                        <div>{body}</div>
                        <div>
                            {footer}
                            <button
                                onClick={() => setShowModal(false)}
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

export default ModalComp