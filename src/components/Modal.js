import React, { useEffect, useRef, useState } from 'react';
import ModalPledgeBox from './ModalPledgeBox';
import PledgeBox from './PledgeBox';

const Modal = ({ pledgesArray, setTotalPledge, setTotalBackers, totalBackers, totalPledge, openModalPledge, modalPledge, product, productClicked, setModalComplete }) => {

    const [selected, setSelected] = useState(false);
    const radioInput = useRef(null);
    const [pledgeAmount, setPledgeAmount] = useState(0);

    const handleCloseModal = (e) => {
        if (e.target.classList.contains('overlay') || e.target.closest('.modal-close__svg')) {
            openModalPledge(false);
            setSelected(false);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const pledge = pledgesArray.find(val => val.title.split(' ')[0].toLowerCase() === product);
        pledge && --pledge.quantity;
        setTotalBackers(++totalBackers);
        setTotalPledge(totalPledge + pledgeAmount);
        openModalPledge(false);
        document.body.scrollTop = 0;        // For Safari
        document.documentElement.scrollTop = 150;     // For IE, Firefox, Chrome
        document.documentElement.scrollTop = 150;     // For IE, Firefox, Chromedocument.body.scrollTop = 0;        // For Safari
        setModalComplete(true);


    };

    useEffect(() => {
        if (!modalPledge) {
            radioInput.current.checked = false;
        }
        const selVal = radioInput.current.checked ? true : false;
        console.log(radioInput.current.checked);
        console.log(product);
        console.log(selVal);
        setSelected(selVal);
    });

    const pledgesArr = pledgesArray.map((pledge, ind, arr) => {
        return (
            <ModalPledgeBox
                key={ pledge.key }
                minPledge={ pledge.minPledge }
                maxPledge={ (ind < (arr.length - 1)) ? (arr[ind + 1].minPledge - 1) : 1000 }
                quantity={ pledge.quantity }
                summaryText={ pledge.summary }
                title={ pledge.title }
                modalPledge={ modalPledge }
                product={ product }
                submitHandler={ handleSubmit }
                productClicked={ productClicked }
                setPledgeAmount={ setPledgeAmount }
            />
        );
    });
    return (
        <div className={ `overlay ${modalPledge ? 'show' : ''}` } onClick={ handleCloseModal }>
            <article className={ `modal modal-pledges ${modalPledge ? 'show' : ''}` }>
                <svg xmlns="http://www.w3.org/2000/svg" className='modal-close__svg' viewBox="0 0 15 15">
                    <path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" fill="#000" fillRule="evenodd" opacity=".4" />
                </svg>
                <div className='modal-content'>
                    <h2 className='modal__title fw-700'>Back this project</h2>
                    <p className='modal__project-description'>
                        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                    </p>
                    <input
                        type='radio'
                        id='none-radio'
                        name='product-pledge'
                        className='modal__radio-input'
                        ref={ radioInput }
                        onChange={ () => { setSelected(true); } }
                    />
                    <PledgeBox pledgeType='modal' selected={ selected }>
                        <div className='none-modal modal-pledge-box__content'>
                            <label className='none-label modal-pledge-box__label' htmlFor='none-radio'>
                                <div className="pledge__wrapper">
                                    <header className='modal-pledge-box__header pledge-box__header'>
                                        <h3 className='modal-pledge-box__title pledge-box__title fw-700'>Pledge with no reward</h3>
                                    </header>
                                    <main className={ 'modal-pledge-box__main pledge-box__main' }>
                                        <p className='modal-pledge-box__summary pledge-box__summary'>
                                            Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
                                        </p>
                                    </main>
                                </div>
                            </label>
                            <label htmlFor='none-radio' className='radio-label'>
                                <span className='modal__custom-radio'></span>
                            </label>

                        </div>
                        <footer className='modal-pledge-box__footer pledge-box__footer'>
                            <form className='pledge-form' onSubmit={ handleSubmit }>
                                <label className='pledge-form__label' htmlFor='pledge-form__input'>Support Us</label>

                                <button className='btn btn-rounded btn-continue'>
                                    Continue
                                </button>
                            </form>
                        </footer>
                    </PledgeBox>
                    { pledgesArr }
                </div>
            </article>
        </div>
    );
};

export default Modal;
