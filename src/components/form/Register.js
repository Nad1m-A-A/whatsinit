import React from 'react'
import classes from '../../assets/styles/Main.module.css'
function Register() {
    const handSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.querySelector('#register_name'));9
    }
    return (
        <form action="" className={classes.register_form} method='' onSubmit={(e) => handSubmit(e)}>
            <input name='name' id='register_name' className={classes.register_name} type='text' placeholder='Name'/>
            <input name='password' id='register_password' className={classes.register_password} type='text' placeholder='Password'/>
            <button className={classes.register_button} type='submit'>Register</button>
        </form>
    )
}

export default Register