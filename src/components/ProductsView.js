import React, { useState } from 'react';

const ProductsView = ({ openModalPledge, productClicked }) => {
    const [bookmarked, setBookmarked] = useState(false);

    const handleClicked = () => {
        setBookmarked(!bookmarked);

    };
    return (
        <section className='product card-container'>
            <h1 className='product__title fw-700'>Mastercraft Bamboo Monitor Riser</h1>
            <p className='product__summary'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className='cta'>
                <button
                    className='btn btn-rounded btn-btp fw-500'
                    onClick={
                        () => {
                            openModalPledge(true);
                            productClicked('');
                        }
                    }
                >
                    Back this Project
                </button>
                <div className='bookmark' onClick={ handleClicked }>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className={ `bookmark__svg svg--round ${bookmarked ? 'marked' : ''}` }
                        viewBox="0 0 56 56"
                    >
                        <g fill="none" fillRule="evenodd">
                            <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                            <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                        </g>
                    </svg>
                    <button className={ `btn btn-rounded btn-bookmark fw-500 ${bookmarked ? 'marked' : ''}` }>
                        Bookmark
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductsView;
