import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div className='register'>
            <h1>Please Register!</h1>
            <form >
                <input type="text" placeholder='Your name' /> <br />
                <input type="email" placeholder='Your email' /><br />
                <input type='password' placeholder='Password'></input><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;