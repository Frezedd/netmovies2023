import React, { useEffect, useState } from 'react'
import "./Nav.css";

const Nav = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else setShow(false);
        });
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />
            <img
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Avatar logo"
                className="nav__avatar"
            />

            <div className="netflix-nav-links">
                <a href="#" className="netflix-nav-link">
                Home
                </a>
                <a href="#" className="netflix-nav-link">
                TV Shows
                </a>
                <a href="#" className="netflix-nav-link">
                Movies
                </a>
                <a href="#" className="netflix-nav-link">
                New & Popular
                </a>
                <a href="#" className="netflix-nav-link">
                My List
                </a>
            </div>
        </div>
    )
}

export default Nav