import React from 'react';
import PledgesView from './PledgesView';
import ProductsView from './ProductsView';
import ProjectSummary from './ProjectSummary';

const MainView = ({ pledgesArray, openModalPledge, productClicked, totalPledge, totalBackers }) => {
    return (
        <main className='main'>
            <div className="main-content">
                <svg className='mastercraft-logo svg--round'>
                    <use xlinkHref='sprite.svg#logo-mastercraft'></use>
                </svg>
                <ProductsView
                    openModalPledge={ openModalPledge }
                    productClicked={ productClicked }
                />
                <ProjectSummary
                    totalPledge={ totalPledge }
                    totalBackers={ totalBackers }
                />
                <PledgesView
                    pledgesArray={ pledgesArray }
                    openModalPledge={ openModalPledge }
                    productClicked={ productClicked }
                />
            </div>
        </main>
    );
};

export default MainView;
