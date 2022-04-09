import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2>Login</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="password" />
                    </div>
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
                    {/* <FontAwesomeIcon icon={}></FontAwesomeIcon> */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="" />
                    <input className='form-submit' type="submit" value="Continue with Google" />
                </div>
            </div>
        </div>
    );
};

export default Login;