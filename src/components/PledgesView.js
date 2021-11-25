import React from 'react';
import MainPledgeBox from './MainPledgeBox';

const PledgesView = ({ pledgesArray, openModalPledge, productClicked }) => {

    const pledgesArr = pledgesArray.map(pledge => {
        return (
            <MainPledgeBox
                key={ pledge.key }
                product={ pledge.title.split(' ')[0].toLowerCase() }
                minPledge={ pledge.minPledge }
                quantity={ pledge.quantity }
                summaryText={ pledge.summary }
                title={ pledge.title }
                openModalPledge={ openModalPledge }
                productClicked={ productClicked }
            />
        );
    });

    return (
        <section className='pledges card-container'>
            <h2 className='pledges__title fw-700'>About this project</h2>
            <p className='pledges__project-description--1'>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at work, helping you stay focused on the task at
                hand.
            </p>
            <p className='pledges__project-description--2'>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>
            { pledgesArr }
        </section>
    );
};

export default PledgesView;
