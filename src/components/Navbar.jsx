import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

import Logo from "../asset/images/logo.png";
import { links } from "../asset/data"

export const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);


    return (
        <nav className="d-grid place-items-center">
            <div className="container nav__container d-flex justify-content-betwen align-items-center">
                <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="nav logo" />
                </Link>

                <ul className={`nav__links d-flex align-items-center ${isNavShowing ? "show__nav" : "hide__nav"}`}>
                    {
                        links.map(({ name, path }, index) => (
                            <li
                                onClick={() => setIsNavShowing(prev => !prev)}
                                key={index}>
                                <NavLink to={path}
                                    className={({ isActive }) => isActive ? "active-nav" : ""}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>

                <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
                    }
                </button>
            </div>
        </nav>
    );
}