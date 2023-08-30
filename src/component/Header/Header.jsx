import React from 'react';
import './Header.css'
import {
    Link, NavLink
} from "react-router-dom";

const Header = () => {
    return (
        <div className='linkS'>
            <NavLink className={({isActive})=>isActive?'active':''} to="/">Home</NavLink>
            <NavLink className={({isActive})=>isActive?'active':''} to="/about">About</NavLink>
            <NavLink className={({isActive})=>isActive?'active':''} to="/contact">Contact</NavLink>
            <NavLink className={({isActive})=>isActive?'active':''} to="/friend">Friend</NavLink>
        </div>
    );
};

export default Header;