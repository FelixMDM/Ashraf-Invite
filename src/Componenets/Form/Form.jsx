import styles from './Form.module.css'
import React, {useState} from 'react';

function Form() {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const[submitted, setSubmitted] = useState(false);
    const[error, setError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }

    const handleSubmission = (e) => {
        e.preventDefault();
        if(name === "" || email === "" || password === "") {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    }

    const successMessage = () => {
        return (
            <div 
                className={styles.success}
                style={{display: submitted ? "" : "none",
                }}>

                <h1>
                    {name} successfully registered!
                </h1>
            </div>  
        );
    }

    const errorMessage = () => {
        return (
            <div
                className={styles.error}
                style={{display: error ? "" : "none",
                }}>

                <h1> 
                    Please fill out all required fields
                </h1>
            </div>
        );
    }

    return(
        <div className={styles.registration}>
            <div>
                <h1>Athlete Registration</h1>
            </div>

            <div className={styles.messages}>
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                <label className={styles.label}>Name</label>
                <input
                    onChange={handleName}
                    className={styles.input}
                    value={name}
                    type='text'
                />

                <label className={styles.label}>Email</label>
                <input
                    onChange={handleEmail}
                    className={styles.input}
                    value={email}
                    type='email'
                />

                <label className={styles.label}>Password</label>
                <input  
                    onChange={handlePassword}
                    className={styles.input}
                    value={password}
                    type='password'
                />
            </form>

            <button onClick={handleSubmission} className={styles.submit} type='submit'>
                Submit
            </button>
        </div>
    );
}

export default Form;
