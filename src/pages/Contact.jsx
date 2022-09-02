import { Fragment } from "react";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import { Header } from "../components";
import headerImg from "../asset/images/header_bg_2.jpg";

export const Contact = () => {
    return (
        <Fragment>
            <Header title="Get In Touch" image={headerImg}>
                Contact us and let's discuss more about your fitness goals.
            </Header>

            <section className="contact">
                <div className="container contact__container d-grid place-items-center">
                    <div className="contact__wrapper d-flex">
                        <a href="mailto:" target="_blank" rel="noreferrer"><MdEmail /></a>
                        <a href="http://m.me/ernest_achiever" target="_blank" rel="noreferrer"><BsMessenger /></a>
                        <a href="https://wa.me" target="_blank" rel="noreferrer"><IoLogoWhatsapp /></a>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}