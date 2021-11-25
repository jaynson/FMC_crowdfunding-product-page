import React, { useEffect, useRef, useState } from 'react';
import PledgeBox from './PledgeBox';

const ModalPledgeBox = ({ title, minPledge, maxPledge, summaryText, quantity, product, modalPledge, submitHandler, productClicked, setPledgeAmount }) => {

    const radioInput = useRef(null);
    const [numberStr, setNumberStr] = useState('');
    const [selected, setSelected] = useState(false);

    const handleSubmit = (e) => {
        submitHandler(e);
        console.log(+numberStr);

    };

    const handleMouseWheel = (e) => {
        const el = e.target;
        el.blur();
        setTimeout(function () {
            el.focus();
        }, 10);
    };

    const handleChange = (e) => {
        setNumberStr(() => {
            return e.target.value;
        });


    };

    useEffect(() => {
        setPledgeAmount(() => {
            return +numberStr;
        });
    }, [numberStr, setPledgeAmount]);

    useEffect(() => {
        const refVal = radioInput.current;
        if (!modalPledge) {
            refVal.checked = false;
            setNumberStr('');
        }

        if (product === title.split(' ')[0].toLowerCase()) {
            refVal.checked = true;
        }

        return () => {
            refVal.checked = false;
        };


    }, [modalPledge, product, title]);

    return (
        <React.Fragment>
            <input
                type='radio'
                id={ `${title.split(' ')[0].toLowerCase()}-radio` }
                className='modal__radio-input'
                name='product-pledge'
                ref={ radioInput }
                onChange={ () => { productClicked(title.split(' ')[0].toLowerCase()); } }

            />
            <PledgeBox pledgeType='modal' quantity={ quantity } selected={ selected }>
                <div className={ `${title.split(' ')[0].toLowerCase()}-modal modal-pledge-box__content` }>


                    <label className={ `${title.split(' ')[0].toLowerCase()}-label modal-pledge-box__label` } htmlFor={ `${title.split(' ')[0].toLowerCase()}-radio` }>
                        <div className="pledge__wrapper">
                            <header className='modal-pledge-box__header pledge-box__header'>
                                <h3 className='modal-pledge-box__title pledge-box__title fw-700'>{ title }</h3>
                                <p className='modal-pledge-box__min-pledge pledge-box__min-pledge fw-500'>{ `Pledge $${minPledge} or more` }</p>
                            </header>
                            <p className='modal-pledge-box__quantity pledge-box__quantity'>
                                <span className='figure fw-700'>{ quantity }</span>
                                <span className="left-text">left</span>
                            </p>
                            <main className='modal-pledge-box__main pledge-box__main'>
                                <p className='modal-pledge-box__summary pledge-box__summary'>{ summaryText }</p>
                            </main>
                        </div>

                    </label>


                    <label htmlFor={ `${title.split(' ')[0].toLowerCase()}-radio` } className='radio-label'>
                        <span className='modal__custom-radio'></span>
                    </label>

                </div>
                <footer className='modal-pledge-box__footer pledge-box__footer'>
                    <form className='pledge-form' onSubmit={ handleSubmit }>
                        <label className='pledge-form__label' htmlFor={ `${title.split(' ')[0].toLowerCase()}-pledge-form__input` }>Enter your pledge</label>
                        <div className="modal-cta">
                            <span className='dollar-sign'>&#36;</span>
                            <input
                                type='number'
                                className='pledge-form__input btn-rounded'
                                id={ `${title.split(' ')[0].toLowerCase()}-pledge-form__input` }
                                min={ minPledge + '' }
                                max={ maxPledge + '' }
                                onChange={ handleChange }
                                onWheel={ handleMouseWheel }
                                value={ numberStr }
                            />
                            <button className='btn btn-rounded btn-continue'>
                                Continue
                            </button>
                        </div>
                    </form>
                </footer>
            </PledgeBox>
        </React.Fragment>
    );
};

export default ModalPledgeBox;
