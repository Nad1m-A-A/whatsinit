import React from 'react';
import classes from '../../assets/styles/Main.module.css'
function Header(props) {
    return (
        <section className={classes.header_section}>
            {props.children}
        </section>
    )
}

export default Header