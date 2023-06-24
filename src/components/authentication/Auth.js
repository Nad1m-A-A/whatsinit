import React, { useState } from 'react'
import classes from '../../assets/styles/Main.module.css'
import Signup from './Signup'
import Login from './Login';

function Auth() {
    const [member, setMember] = useState(false);
    return (
        <div className={classes.auth}>
            {!member && <Signup setMember={setMember}/>}
            {member && <Login/>}
            <div>
                {member ?
                    "Not" :
                    "Already"}
                    a member? 
                <span onClick={() => setMember(!member)} className={classes.member_button}>
                    {member ?
                    ' signup' :
                    ' login'}
                </span>
            </div>

        </div>
    )
}

export default Auth