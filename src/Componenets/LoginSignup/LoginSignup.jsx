import React, { useState } from 'react'
import styles from './LoginSignup.module.css'
import email from '../../assets/email.png'
import lock from '../../assets/lock.png'
import profile from '../../assets/profile-user.png'

function LoginSignup(props) {

    const [action, setAction] = useState('Sign Up')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [error, setError] = useState(false)
    const [submited, setSubmitted] = useState(false)

    //getter login methods
    const handleName = (e) => {
        setUserName(e.target.value)
    }

    const handleEmail = (e) => {
        setUserEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setUserPassword(e.target.value)
    }

    //functional login methods
    const loginFunc = (e) => {
        setAction('Sign Up')
        handleLogIn(e)
    }

    const signUpFunc = (e) => {
        setAction('Login')
        handleSignUp(e)
    }

    const postProfile = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/athletes', {
            method: 'POST',
            headers: {
                'Content-Type': 'applications/json'
            }, 
                body: JSON.stringify({
                    name: {userName},
                    email: {userEmail},
                    password: {userPassword}
                })  
        }).then(res => {
            return res.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log('ERROR'))
    }

    const handleLogIn = (e) => {
        e.preventDefault()

        if(userEmail == '' || userPassword == '') {
            setError(true)

            //debugging
            console.log('Did not log in')
        } else {
            setSubmitted(true) //may want to reorder this to only submit if success
            setError(true)

            //debugging
            console.log('Logged in')
        }
    }

    const handleSignUp = (e) => {
        e.preventDefault()

        if(userName == '' || userEmail == '' || userPassword == '') {
            setError(true)

            //debugging
            console.log("Did not sign in")
        } else {
            postProfile(userName, userEmail, userPassword)
            setSubmitted(true)
            setError(true)

            //debugging
            console.log('Signed In')
        }
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
                        <input 
                            onChange={handleName}
                            type='text'
                            value={userName}
                            placeholder='Name'/>
                    </div> }
                <div className={styles.input}>
                    <img src={email} alt='img here' />
                    <input 
                        onChange={handleEmail}
                        type='email'
                        value={userEmail}
                        placeholder='Email'/>
                </div>
                <div className={styles.input}>
                    <img src={lock} alt='img here' />
                    <input 
                        onChange={handlePassword}
                        type='password' 
                        value={userPassword}
                        placeholder='Password'/>
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