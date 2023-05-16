import React, { useState } from 'react'
import classes from '../../assets/styles/Main.module.css'
import {ImUser} from 'react-icons/im';
import Modal from '../layout/Modal';
import Auth from '../authentication/Auth';
function Navigation() {
    const [modalOpen, setModalOpen] = useState(true);
    return (
        <nav className={classes.navigation}>
            <div className={classes.registration}><ImUser onClick={() => setModalOpen(true)}/></div>
            <Modal modalOpen={modalOpen} close={() => setModalOpen(false)}>
                <Auth/>
            </Modal>
        </nav>
    )
}

export default Navigation