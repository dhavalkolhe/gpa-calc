import React, { useState, useEffect } from 'react';
import { Typography, IconButton } from '@material-ui/core';
import './Header.css';
import logo from '../../assets/logoNav.svg';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export default function Header() {
    const [openHam, setOpenHam] = useState(false);
    const [mobileNav, setMobileNav] = useState(
        window.innerWidth < 500 ? true : false
    );
    const [show, setShow] = useState(false);

    const openMobileMenu = () => {
        if (openHam) {
            setOpenHam(false);
        } else {
            setOpenHam(true);
        }
    };

    const closeMobileMenu = () => {
        setOpenHam(false);
    };

    useEffect(() => {
        const configMobile = () => {
            if (window.innerWidth < 740) {
                if (!mobileNav) setMobileNav(true);
            } else {
                if (mobileNav) {
                    setMobileNav(false);
                }
            }
        };
        window.addEventListener('resize', configMobile);
        return () => {
            window.removeEventListener('resize', configMobile);
        };
        // eslint-disable-next-line
    }, [window.innerWidth]);

    const transitionNavbar = () => {
        if (window.scrollY >= 80) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.scrollY]);

    return (
        <div className={`navbar ${show && 'nav__black'}`}>
            <div className="navbar__left">
                <a
                    href="https://www.vitrendz.com"
                    target="_self"
                    rel="noreferrer"
                    className="navbar__link"
                >
                    <Typography noWrap>
                        <img
                            src={logo}
                            className="header__logo"
                            alt="Company Logo"
                        ></img>
                    </Typography>
                </a>
            </div>

            {!mobileNav ? (
                <div className="navbar__right">
                    <a
                        className="navbar__link nav__item"
                        href="https://community.vitrendz.com/"
                    >
                        Community
                    </a>
                    <NavHashLink
                        smooth
                        to="/#services"
                        className="navbar__link"
                    >
                        <p className="nav__item">Service</p>
                    </NavHashLink>

                    <NavHashLink smooth to="/#contact" className="navbar__link">
                        <p className="nav__item">About Us</p>
                    </NavHashLink>

                    <Link
                        to="/ClubsAndChapters/cncLogin"
                        className="navbar__link"
                    >
                        <p className="nav__item">Others</p>
                    </Link>
                </div>
            ) : (
                <IconButton
                    color="inherit"
                    onClick={openMobileMenu}
                    className="menuIcon"
                >
                    <MenuIcon />
                </IconButton>
            )}

            {openHam ? (
                <div className="navbar__mobile" onClick={closeMobileMenu}>
                    <div
                        className="navbar__coverMob"
                        onClick={() => setOpenHam(true)}
                    >
                        <div
                            className="navbar__close"
                            onClick={closeMobileMenu}
                        >
                            <IconButton color="inherit" className="menuIcon">
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div onClick={closeMobileMenu}>
                            <NavHashLink smooth to="/#" className="menuItem">
                                <p>Community</p>
                            </NavHashLink>
                        </div>

                        <div onClick={closeMobileMenu}>
                            <NavHashLink to="/#-features" className="menuItem">
                                <p>Service</p>
                            </NavHashLink>
                        </div>
                        <div onClick={closeMobileMenu}>
                            <NavHashLink to="/#" className="menuItem">
                                <p>About Us</p>
                            </NavHashLink>
                        </div>
                        <div onClick={closeMobileMenu}>
                            <NavHashLink to="/#" className="menuItem">
                                <p>Others</p>
                            </NavHashLink>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
