import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css'
const auth = getAuth(app)
const Header = () => {
    const [user] = useAuthState(auth)

    return (
        <div className='header container'>
            <div>
                <h3>Travel With Roy</h3>
            </div>
            <div>
                <nav>
                    <Link to='/'>Home</Link>

                    {/* <Link to='/register'>Register/Login</Link> */}

                    {
                        user && <>
                            <Link to='/checkout'>Checkout</Link>
                        </>
                    }
                    {
                        user?.uid ?
                            <button onClick={() => signOut(auth)}>Signout</button>
                            :
                            <Link to='/register'>Register/Login</Link>
                    }
                </nav>
            </div>
        </div>
    );
};

export default Header;