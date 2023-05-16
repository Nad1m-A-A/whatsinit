import React, { useEffect, useState } from 'react'
import classes from '../../assets/styles/Main.module.css'
import useFetch from '../../hooks/useFetch';
function Login() {
    // const [url, setUrl] = useState(null);
    // const [data, loading, error] = useFetch(url,  {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         name: 'nadim',
    //         password: "123456",
    //     }),
    // });
    const submitHandler = () => {
        // setUrl("http://localhost/whatsinit/setters/user.php")
    }
    return (
        <div className={classes.login}>
            <h2>Login to your account</h2>
            <input name='loginkey' className={classes.login_username} type='text' placeholder='username or email'/>
            <input name='password' className={classes.singup_password} type='password' placeholder='password'/>
            <button onClick={submitHandler}  className={classes.register_button}>login</button>

        </div>
    )
}

export default Login
