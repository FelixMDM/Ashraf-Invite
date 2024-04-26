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
                    Login in or Create Account
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.entry}>
                    <button>
                        Log In
                    </button>
                    <button>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;