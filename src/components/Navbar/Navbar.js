import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <h4>Know React</h4>
                <div className='navlink'>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </div>
            </nav>
            <div className='banner'>
                <h5>This project has some basic implementation of React Router along with Rechart, React Tostify, React Fontawesome and Vanila css where based on routes you will see different information.</h5>
            </div>
        </div>
    );
};

export default Navbar;