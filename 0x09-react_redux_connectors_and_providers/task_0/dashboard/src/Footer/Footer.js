import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from "../App/AppContext";

function Footer() {
    const { user } = useContext(AppContext);

    return (
        <footer className='footer'>
            {user.isLoggedIn && (
                <p>
                    <a href="#">Contact us</a>
                </p>
            )}
            <p>
                Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
        </footer>
    );
}

export default Footer;