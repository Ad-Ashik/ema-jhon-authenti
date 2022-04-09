import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SingUp = () => {
    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = e => {
        setEamil(e.target.value);
        console.log(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value);
        console.log(e.target.value)
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
        console.log(e.target.value)
    }

    if (user) {
        navigate('/')
    }

    const handileSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Opps! your passwrod did not match.");
            return;
        }
        if (password.length < 6) {
            setError("Please atlast 6 chareters.")
            return;
        }

        createUserWithEmailAndPassword(email, password);

    }

    return (
        <div className='form-container'>
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={handileSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="conform-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="conform-password" id="" required />
                    </div>
                    <p className='error'>{error}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>

                <div className='create-user'>
                    <p>Already have an account? <Link className='create-link' to="/login">Login</Link></p>
                </div>
                <div className="or-user">
                    <span className='line'></span>
                    <p>or</p>
                    <span className='line'></span>
                </div>
                <div className='singin-auth'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="" />
                    <input className='form-submit' type="submit" value="Continue with Google" />
                </div>
            </div>
        </div>
    );
};

export default SingUp;