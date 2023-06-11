import React, { useEffect, useState, useRef } from 'react'
import classes from '../../assets/styles/Main.module.css'
import useFetch from '../../hooks/useFetch';
import Loader from '../layout/Loader';

function Signup({setMember}) {
    const unRef = useRef(null);
    const pwRef = useRef(null);
    const emRef = useRef(null);
    const [nameError, setNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [userInputs, setUserInputs] = useState({});
    const [success, setsuccess] = useState(null);
    const [url, setUrl] = useState(null);
    const [data, loading] = useFetch(url,  {
        method: "POST",
        body: JSON.stringify(userInputs),
    });
    const invalidInput = nameError !== "" || emailError !== "" || passwordError !== "";

    // !HANDLE RESPONSE DATA
    useEffect(() => {
        if(!data) return;
        setUrl(null);
        setUserInputs({});
        if(data.includes("error")) {
            if(data.includes('username')) {
                setNameError("name is taken");
                unRef.current.focus();
            }
            if(data.includes('email')) {
                setEmailError("email is already in use");
                emRef.current.focus();
            }
        }
        if(data.includes("success")) {
            unRef.current.value = '';
            emRef.current.value = '';
            pwRef.current.value = '';
            setsuccess(true);
        }
    },[data])
    //! CHECK INPUT VALUES
    const validateName = () => {
        setNameError("");
        if(unRef.current.value.length === 0)
            setNameError("name is required");
        if(unRef.current.value.length < 3)
            setNameError("name is too short");
        if(userInputs.username)
        if(unRef.current.value.toLowerCase() === userInputs.username.toLowerCase())
            setNameError("name is taken");
    }
    const validateEmail = () => {
        setEmailError("")
        if(emRef.current.value.length === 0)
            setEmailError("email is required");
        if(emRef.current.value.split('@').length !== 2 || emRef.current.value.split('.com').length !== 2 || !emRef.current.value.endsWith('com'))
            setEmailError("invalid email format");
        // if(emRef.current.value === userInputs.email)
        //     setEmailError("email is already in use");
    }
    const validatePassword = () => {
        setPasswordError("");
        if(pwRef.current.value.length === 0)
            setPasswordError("password is required");
        if(pwRef.current.value.length < 6)
            setPasswordError("password is too short");
    }

    //! SIGNIN USER
    const submitHandler = () => {
        if(invalidInput) return;
        setsuccess(null);
        setUserInputs({
            "username": unRef.current.value,
            "email": emRef.current.value,
            "password": pwRef.current.value,
            "date_joined": new Date().getTime() + '',
        })
        setUrl("http://localhost/whatsinit/setters/newUser.php")
    }

    return (
        <div className={classes.signup}>
            {/* //! ALWAYS SHOW */}
            <h2>Become a member. Unlock full potentials</h2>
            
            <input onBlur={validateName} ref={unRef} className={classes.signup_username} type='text' placeholder='Username'/>
            {nameError && <span className={classes.input_error}>{nameError}</span>}
            
            <input onBlur={validateEmail} ref={emRef} className={classes.signup_email} type='email' placeholder='Email'/>
            {emailError && <span className={classes.input_error}>{emailError}</span>}
            
            <input onBlur={validatePassword} ref={pwRef} className={classes.singup_password} type='password' placeholder='Password'/>
            {passwordError && <span className={classes.input_error}>{passwordError}</span>}
            {<button onClick={submitHandler} type='submit'>Signup</button>}
            
            {/* //! SHOW AFTER SUBMIT */}
            {loading && <Loader/>}

            {/* //! SHOW AFTER SUCCESS */}
            {success &&
            <div>
                Success, you can<span onClick={() => setMember(true)} className={classes.member_button}> login </span>now
            </div>}
        </div>
    )
}

export default Signup