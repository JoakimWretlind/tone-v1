import { useState, useEffect, useRef } from "react";
import { Nav, NavUL, NavLink } from "./navbar.style";
import { navbarData } from './navbarData';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const sticky = navRef.current.offsetTop; // this actually increase performance

        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                setIsFixed(true)
            }
            else {
                setIsFixed(false)
            }
        })
        return () => {
            window.removeEventListener("scroll", scrollCallBack)
        }
    }, []);

    return (
        <Nav ref={navRef} isFixed={isFixed} navbar={navbar}>
            <NavUL>
                {navbarData.map((item, index) => {
                    return (
                        <NavLink key={index}>
                            <Link activeClass="active" offset={item.offset} to={item.path} isDynamic={true} spy duration={700}>{item.title}</Link>
                        </NavLink>
                    )
                })}
            </NavUL>
        </Nav>
    )
}

export default Navbar
