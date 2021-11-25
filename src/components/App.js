import React, { useState } from 'react';
import HeaderView from './HeaderView';
import MainView from './MainView';
import Modal from './Modal';
import mainPledgesData from '../mainPledgesData.json';
import ModalComplete from './ModalComplete';

const App = () => {

    const [pledgeArr, setPledgeArr] = useState(mainPledgesData);
    const [modalPledge, setModalPledge] = useState(false);
    const [product, setProduct] = useState('');
    const [totalPledge, setTotalPledge] = useState(78940);
    const [totalbackers, setTotalbackers] = useState(5007);
    const [modalComplete, setModalComplete] = useState(false);

    return (
        <div className='container'>
            <div className='app-component'>
                <Modal
                    pledgesArray={ pledgeArr }
                    updateArray={ setPledgeArr }
                    openModalPledge={ setModalPledge }
                    modalPledge={ modalPledge }
                    product={ product }
                    productClicked={ setProduct }
                    setTotalPledge={ setTotalPledge }
                    setTotalBackers={ setTotalbackers }
                    totalPledge={ totalPledge }
                    totalBackers={ totalbackers }
                    setModalComplete={ setModalComplete }
                />

                <ModalComplete
                    modalComplete={ modalComplete }
                    setModalComplete={ setModalComplete }
                />

                <HeaderView />

                <MainView
                    pledgesArray={ pledgeArr }
                    openModalPledge={ setModalPledge }
                    productClicked={ setProduct }
                    totalPledge={ totalPledge }
                    totalBackers={ totalbackers }
                />

            </div>
        </div>
    );
};

export default App;
