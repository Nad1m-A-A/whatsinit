import React, { useState, useContext, useEffect } from 'react'
import classes from '../../assets/styles/Main.module.css'
import {ImUser} from 'react-icons/im';
import Modal from '../layout/Modal';
import Auth from '../authentication/Auth';
import MainContext from '../../store/MainContext';
import { Link } from 'react-router-dom';

function Navigation() {
    const {storeUser, user} = useContext(MainContext);
    const [modalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        const localStorageUser = JSON.parse(localStorage.getItem('whatsinit_user'));
        if(localStorageUser && !user) {
            storeUser(localStorageUser)
        };
    }, [])
    
    return (
        <nav className={classes.navigation}>
            {user ? 
            <Link to="/profile" className={classes.slot}>{user.username}</Link> :
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