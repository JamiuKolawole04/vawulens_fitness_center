import { Fragment } from "react";

import { Header } from "../components";
import headerImg from "../asset/images/header_bg_1.jpg";
import storyImg from "../asset/images/about1.jpg";
import visionImg from "../asset/images/about2.jpg";
import missionImg from "../asset/images/about3.jpg";

export const About = () => {
    return (
        <Fragment>
            <Header title="About Us" image={headerImg}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ratione necessitatibus ipsam itaque possimus nostrum quia ad nulla vel iste?
            </Header>

            <section className="about__story">
                <div className="container about__story-container d-grid">
                    <div className="about__section-image">
                        <img src={storyImg} alt="" />
                    </div>

                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis aut beatae earum odio nemo similique id possimus delectus. Officiis. ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, fugiat!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis aut beatae earum odio nemo similique id possimus delectus. Officiis.ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, quis.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur. magnam corrupti maxime corporis. Consectetur, dolorum modi. Placeat, doloribus delectus?</p>

                    </div>
                </div>
            </section>

            <section className="about__vision">
                <div className="container about__vision-container d-grid">

                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis aut beatae earum odio nemo similique id possimus delectus. Officiis. ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, fugiat!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis aut beatae earum odio nemo similique id possimus delectus. Officiis.ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, quis.</p>
                    </div>

                    <div className="about__section-image">
                        <img src={visionImg} alt="" />
                    </div>
                </div>
            </section>

            <section className="about__mission">
                <div className="container about__mission-container d-grid">
                    <div className="about__section-image">
                        <img src={missionImg} alt="" />
                    </div>

                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis aut beatae earum odio nemo similique id possimus delectus. Officiis. ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, fugiat!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis aut beatae earum odio nemo similique id possimus delectus. Officiis.ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, quis.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur. magnam corrupti maxime corporis. Consectetur, dolorum modi. Placeat, doloribus delectus?</p>

                    </div>
                </div>
            </section>
        </Fragment>


    );
}