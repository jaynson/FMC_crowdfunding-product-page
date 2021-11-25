import React from 'react';
import PledgeBox from './PledgeBox';

const MainPledgeBox = ({ product, title, minPledge, summaryText, quantity, openModalPledge, productClicked }) => {

    const handleClicked = () => {
        openModalPledge(true);
        document.body.scrollTop = 150;        // For Safari
        document.documentElement.scrollTop = 150;     // For IE, Firefox, Chrome

        //Set Value of pledgebox clicked
        productClicked(product);
    };
    return (
        <PledgeBox quantity={ quantity } pledgeType='main'>
            <div className={ `${product}-main main-pledge-box__content` }>
                <header className='main-pledge-box__header pledge-box__header'>
                    <h3 className='main-pledge-box__title pledge-box__title fw-700'>{ title }</h3>
                    <p className='main-pledge-box__min-pledge pledge-box__min-pledge fw-500'>{ `Pledge $${minPledge} or more` }</p>
                </header>
                <main className='main-pledge-box__main'>
                    <p className='main-pledge-box__summary pledge-box__summary'>{ summaryText }</p>
                </main>
                <footer className='main-pledge-box__footer pledge-box__footer'>
                    <p className='main-pledge-box__quantity pledge-box__quantity'>
                        <span className='figure fw-700'>{ quantity }</span>
                        <span className="left-text">left</span>
                    </p>
                    <button
                        className={ `btn btn-rounded btn-reward` }
                        onClick={ handleClicked }
                    >
                        { (quantity > 0) ? 'Select Reward' : 'Out of stock' }
                    </button>
                </footer>
            </div>
        </PledgeBox>
    );
};

export default MainPledgeBox;
