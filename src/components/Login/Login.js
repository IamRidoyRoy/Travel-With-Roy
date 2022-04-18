import React from 'react';
import { getAuth } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';
import './Login.css'

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    return (
        <div className='loginPage'>
            <h1>Please Log in</h1>
            <div>
                <button onClick={handleGoogleSignIn}>Sign in with google</button>
            </div><br />
            <form>
                <input type="email" placeholder='Your email' /><br />
                <input type='password' placeholder='Password'></input><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;