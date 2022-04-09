import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    if (user) {
        navigate('/');
    }

    const handleSubmit = e => {
        e.preventDefault();

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />
                    </div>
                    <p className='error'>{error ? "wrong password" : loading && <span style={{ color: "green" }}>Loadin...</span>}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <div className='create-user'>
                    <p>New to Ema-john? <Link className='create-link' to="/singup">Create New Account</Link></p>
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

export default Login;