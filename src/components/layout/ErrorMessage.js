import React from 'react'
import classes from '../../assets/styles/Main.module.css'
function ErrorMessage({error}) {
    return (
        <div className={classes.error}>{error}</div>
    )
}

export default ErrorMessage