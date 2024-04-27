import React, { useState } from 'react'
import styles from './LoginSignup.module.css'
import email from '../../assets/email.png'
import lock from '../../assets/lock.png'
import profile from '../../assets/profile-user.png'

function LoginSignup(props) {

    const [action, setAction] = useState('Sign Up');

    const loginFunc = (e) => {
        setAction("Sign Up")
    }

    const signUpFunc = (e) => {
        setAction("Login")
    }

    

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>{action}</div>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.inputs}>
                {action == 'Login' ? <div/> :
                    <div className={styles.input}>
                        <img src={profile} alt='img here'/>
                        <input type='text' placeholder='Name'/>
                    </div> }
                <div className={styles.input}>
                    <img src={email} alt='img here' />
                    <input type='email'placeholder='Email'/>
                </div>
                <div className={styles.input}>
                    <img src={lock} alt='img here' />
                    <input type='password' placeholder='Password'/>
                </div>
            </div>
            {action == 'Sign Up' ? <div/> : 
                <div className={styles.forgotPassword}>Lost Password?
                    <span> Click Here</span>
                </div> }
            <div className={styles.submitContainer}>
                <div className={action == 'Login' ? styles.submitGray : styles.submit} onClick={loginFunc}>Sign Up</div>
                <div className={action == 'Sign Up' ? styles.submitGray : styles.submit} onClick={signUpFunc}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup