import React from 'react';

const ModalComplete = ({ modalComplete, setModalComplete }) => {

    const handleCloseModal = (e) => {
        if (e.target.classList.contains('overlay') || e.target.closest('.btn')) {
            setModalComplete(false);
        }
    };

    return (
        <div className={ `overlay ${modalComplete ? 'show' : ''}` } onClick={ handleCloseModal }>
            <article className={ `modal modal-complete ${modalComplete ? 'show' : ''}` }>
                <svg className='modal-check__svg'>
                    <use xlinkHref='sprite.svg#icon-check' className='modal-check__icon'></use>
                </svg>
                <h2 className='modal-complete__title fw-700'>Thanks for your support!</h2>
                <p className='modal-complete__description'>
                    Your pledge brings us one step closer to Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
                </p>
                <button className='btn btn-rounded btn-complete'>
                    Got it!
                </button>
            </article>
        </div>
    );
};

export default ModalComplete;
