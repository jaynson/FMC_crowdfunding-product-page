import React from 'react';

const PledgeBox = (props) => {
    return (
        <div
            className={ `${props.pledgeType}-pledge-box pledge-box ${props.quantity === 0 ? 'out-of-stock' : ''} ${props.selected ? 'selected' : ''}` }
        >
            { props.children }
        </div>
    );
};

export default PledgeBox;
