import React from 'react';
import './_modal.scss';

const Modal = ({modal, setModal, children}) => {


    return (
        <div className={modal ? 'modal active' : 'modal'} onClick={() => setModal(false)}>
            <div className="modal__content" onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;