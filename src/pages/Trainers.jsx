import { Fragment } from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Header, Trainer } from "../components";
import headerImg from "../asset/images/header_bg_5.jpg";
import { trainers } from "../asset/data";

export const Trainers = () => {
    return (
        <Fragment>
            <Header title="Our Trainers" image={headerImg}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur, in asperiores animi possimus corrupti.
            </Header>

            <section className="trainers">
                <div className="container trainers__container d-grid">
                    {
                        trainers.map(({ id, image, name, job, socials }) => (
                            <Trainer
                                key={id}
                                image={image}
                                name={name}
                                job={job}
                                socials={
                                    [
                                        { icon: <BsInstagram />, link: socials[0] },
                                        { icon: <AiOutlineTwitter />, link: socials[1] },
                                        { icon: <FaFacebook />, link: socials[2] },
                                        { icon: <FaLinkedin />, link: socials[3] },
                                    ]
                                }

                            />
                        ))
                    }
                </div>
            </section>

        </Fragment>


    );
}