import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

import Logo from "../asset/images/logo.png";

export const Footer = () => {
    return (
        <footer>
            <div className="container footer__container d-grid">
                <article>
                    <Link to="/">
                        <img src={Logo} alt="footer logo" className="logo" />
                    </Link>

                    <p>Great workout sessions, facilities and coaches.</p>
                    <div className="footer__socials d-flex align-items-center">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </article>

                <article>
                    <h4>Insights</h4>
                    <Link to="#">Blog</Link>
                    <Link to="#">Case Studies</Link>
                    <Link to="#">Events</Link>
                    <Link to="#">Communities</Link>
                    <Link to="#">FAQS</Link>
                </article>

                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="#">Support</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small>&copy; Copyright {new Date().getFullYear()}, Developed by Jay. All rights reserved.</small>
            </div>
        </footer>
    )
}
