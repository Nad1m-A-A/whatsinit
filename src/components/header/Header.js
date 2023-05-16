import React from 'react'
import Intro from './Intro'
import Navigation from './Navigation'
import classes from '../../assets/styles/Main.module.css'
function Header() {
    return (
        <div className={classes.header}>
            <Navigation/>
            <Intro/>
        </div>
    )
}

export default Header