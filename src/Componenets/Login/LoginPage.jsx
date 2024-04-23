import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'

function LoginPage(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const onButtonClick = (e) => {

    }

    return(
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <div>Login</div>
            </div>
            <br />
            <div className={styles.inputContainer}>
                <input 
                    value={email}
                    placeholder='Enter your email here'
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={styles.inputBox}
                />
                <label className='errorLabel'>{emailError}</label>
            </div>
            <br />
            <div className={styles.inputContainer}>
                <input 
                    value={password}
                    placeholder='Enter your password here'
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={styles.inputBox}
                />
                <label className='errorLabel'>{passwordError}</label>
            </div>
            <br />
            <div className={styles.inputContainer}>
                <input className={styles.inputButton} type='button' onClick={onButtonClick} value={'Log in'} />
            </div>
        </div>
    );
}

export default LoginPage;