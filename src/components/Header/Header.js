import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h3>Travel With Roy</h3>
            </div>
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>

                </nav>
            </div>
        </div>
    );
};

export default Header;