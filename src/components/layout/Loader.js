import React from 'react'
import classes from '../../assets/styles/Main.module.css'
function Loader(props) {
    console.log('props',props);
    return (
        <div className={classes.loader}>LOADING...</div>
    )
}

export default Loader