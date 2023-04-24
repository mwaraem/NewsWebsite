import React from 'react'
import logo from '../assets/logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="N/A" />
                </div>
                <div className="navlist">
                    <a href='/#'>Home</a>
                    <a href='/#'>New</a>
                    <a href='/#'>Popular</a>
                    <a href='/#'>Trending</a>
                    <a href='/#'>Categories</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar