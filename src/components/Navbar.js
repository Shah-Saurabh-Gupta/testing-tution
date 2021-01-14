import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';

function Navbar() {
    return (
        <div className="header">
            <div className="nav">
                <div className="link">
                    <NavLink to="/">HOME</NavLink>
                </div>
                <div className="link">
                    <NavLink to="/courses">COURSES</NavLink>
                </div>
                <div className="link">
                    <NavLink to="/notice/:noticeId">NOTICES</NavLink>
                </div>
                <div className="link">
                    <NavLink to="/notes">NOTES</NavLink>
                </div>

                <AuthOptions />

            </div>
        </div>
    )
}

export default Navbar
