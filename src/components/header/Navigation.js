import React, { useState, useContext, useEffect } from 'react'
import classes from '../../assets/styles/Main.module.css'
import {ImUser} from 'react-icons/im';
import Modal from '../layout/Modal';
import Auth from '../authentication/Auth';
import { MainContext } from '../../store/MainContext';

function Navigation() {
    const {storeUser, user} = useContext(MainContext);
    const [modalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        storeUser(JSON.parse(localStorage.getItem('whatsinit_user')))
    }, [])

    return (
        <nav className={classes.navigation}>
            {user ? <div>{user[0].username}</div> :
            <div className={classes.registration}>
                <ImUser className={classes.user_icon} onClick={() => setModalOpen(true)}/>
            </div>}
            <Modal modalOpen={modalOpen} close={() => setModalOpen(false)}>
                <Auth/>
            </Modal>
        </nav>
    )
}

export default Navigation