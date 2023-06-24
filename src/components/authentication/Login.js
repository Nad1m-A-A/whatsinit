import React, { useState, useRef, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import classes from '../../assets/styles/Main.module.css'
import useFetch from '../../hooks/useFetch';
import MainContext from '../../store/MainContext';
function Login() {
    const {storeUser} = useContext(MainContext);
    const emRef = useRef(null);
    const pwRef = useRef(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [userInputs, setUserInputs] = useState({})
    const [url, setUrl] = useState(null);
    const [data, loading, error] = useFetch(url,  {
        method: "POST",
        body: JSON.stringify(userInputs),
    });
    const navigate = useNavigate();

    // !HANDLE RESPONSE DATA
    useEffect(() => {
        if(!data) return;
        setUrl(null);
        setUserInputs({});
        if(data.includes('Not registered!')) {
            setEmailError(data);
            emRef.current.focus();
        }
        if(data.includes('Incorrect password')) {
            setPasswordError(data);
            pwRef.current.focus();
        }
        if(data === Object(data)) {
            emRef.current.value = '';
            pwRef.current.value = '';
            storeUser({username: data[0].username});
            const forLocalStorage = {username: data[0].username}
            localStorage.setItem('whatsinit_user', JSON.stringify(forLocalStorage));
            navigate('profile');
        }
    },[data])

    const validateEmail = () => {
        setEmailError("")
        if(emRef.current.value.length === 0)
            setEmailError("email is required");
        if(emRef.current.value.split('@').length !== 2 || emRef.current.value.split('.com').length !== 2 || !emRef.current.value.endsWith('com'))
            setEmailError("invalid email format");
    }
    const validatePassword = () => {
        setPasswordError("");
        if(pwRef.current.value.length === 0)
            setPasswordError("password is required");
    }

    const submitHandler = () => {
        setUserInputs({
            "email": emRef.current.value,
            "password": pwRef.current.value,
        })
        setUrl("http://localhost/whatsinit/getters/user.php");
    }
    return (
        <div className={classes.login}>
            <h2>Login to your account</h2>
            <input onBlur={validateEmail} ref={emRef} className={classes.login_email} type='text' placeholder='Email'/>
            {emailError && <span className={classes.input_error}>{emailError}</span>}
            <input onBlur={validatePassword} ref={pwRef} className={classes.singup_password} type='password' placeholder='Password'/>
            {passwordError && <span className={classes.input_error}>{passwordError}</span>}
            <button onClick={submitHandler} type='submit' className={classes.register_button}>login</button>
        </div>
    )
}

export default Login
