import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'

function Home(props) {
    const { loggedIn, email } = props
    const navigate = useNavigate()

    const onButtonClick = (e) => {
        if (loggedIn) {
            props.setLoggedIn(false)
        } else {
            navigate('/login')
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <div>
                    Welcome!
                </div>
            </div>
            <div>
                This is the home page
            </div>
            <div className={styles.buttonContainer}>
                <input 
                    className={styles.inputButton}
                    type='button'
                    onClick={onButtonClick}
                    value={loggedIn ? 'Log out' : 'Log in'}
                />
                {loggedIn ? <div>Your email address is {email}</div> : <div/> }
            </div>
        </div>
    )
}

export default Home;