import React, { useEffect, useState, useRef } from 'react'
import classes from '../../assets/styles/Main.module.css'
import useFetch from '../../hooks/useFetch';

function Signup() {
    const unRef = useRef(null);
    const pwRef = useRef(null);
    const emRef = useRef(null);
    
    const [nameError, setNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [emailError, setEmailError] = useState(null);

    const [userInputs, setUserInputs] = useState({});
    const [url, setUrl] = useState(null);
    //! SERVER
    const [data, loading, error] = useFetch(url,  {
        method: 'POST',
        body: JSON.stringify(userInputs),
    });
console.log(data);

    //! CHECK INPUT VALUES
    const validateName = () => {
        if(unRef.current.value.length === 0) {
            setNameError("name is required")
        }
        else if(unRef.current.value.length < 3) {
            setNameError("name is too short")
        } else {
            setNameError("");
        }
    }
    const validateEmail = () => {
        if(emRef.current.value.length === 0) {
            setEmailError("email is required")
        }
        else {
            if(emRef.current.value.split('@').length === 2 && emRef.current.value.split('.com').length === 2) {
                setEmailError("")
            } else {
                setEmailError("invalid email format")
            }
        }
    }
    const validatePassword = () => {
        if(pwRef.current.value.length === 0) {
            setPasswordError("password is required")
        }
        else if(pwRef.current.value.length < 6) {
            setPasswordError("password is too short")
        }
        else {
            setPasswordError("");
        }
    }

    const submitHandler = () => {
        if(nameError === null && emailError === null && passwordError === null) return;
        if(nameError === "" && emailError === "" && passwordError === "") {
            console.log('tn tn tn');
            setUserInputs({
                userName: unRef.current.value,
                password: pwRef.current.value,
                email: emRef.current.value,
            })
            setUrl("http://localhost/whatsinit/setters/user.php")
        }
    }
    return (
        <div className={classes.signup}>
            <h2>Become a member. Unlock full potentials</h2>
            
            <input onChange={validateName} ref={unRef} name='username' className={classes.signup_username} type='text' placeholder='username'/>
            {nameError && <span className={classes.input_error}>{nameError}</span>}
            
            <input onChange={validateEmail} ref={emRef}  name='email'className={classes.signup_email} type='email' placeholder='email'/>
            {emailError && <span className={classes.input_error}>{emailError}</span>}
            
            <input onChange={validatePassword} ref={pwRef}  name='password' className={classes.singup_password} type='password' placeholder='password'/>
            {passwordError && <span className={classes.input_error}>{passwordError}</span>}
            <button onClick={submitHandler} className={'asdf'}>Signup</button>
        </div>
    )
}

export default Signup