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
                We  are VAWULENS <br />
                Helping people live longer, happier and healthier lives for over 20 years.
            </Header>

            <section className="about__story">
                <div className="container about__story-container d-grid">
                    <div className="about__section-image">
                        <img src={storyImg} alt="" />
                    </div>

                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis aut beatae earum odio nemo similique id possimus delectus. Officiis. ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, fugiat!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis aut beatae earum odio nemo similique id possimus delectus. Officiis.ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, quis.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur. magnam corrupti maxime corporis. Consectetur, dolorum modi. Placeat, doloribus delectus?</p> */}
                        <p>

                            Vawulens was founded in 1921 as a family owned and operated business specialising in supplying high-quality gym equipment at great prices.

                            Instead of being just another gym equipment retailer, our founders wanted to be the best in the industry and set their minds to doing so! Over the last two decades Gym and Fitness has grown into one of Australia’s largest online fitness equipment retailers, helping thousands of customers live longer, happier and healthier lives.
                        </p>

                    </div>
                </div>
            </section>

            <section className="about__vision">
                <div className="container about__vision-container d-grid">

                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis aut beatae earum odio nemo similique id possimus delectus. Officiis. ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, fugiat!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis aut beatae earum odio nemo similique id possimus delectus. Officiis.ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, quis.</p> */}
                        <p>For 20 years helping customers reach their fitness goals has been at the heart of what we do and why we do it! We live and breathe our six core values and four brand promises  — which speak of our commitment to our customers, staff, the industry and our business as a whole. </p>
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
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis aut beatae earum odio nemo similique id possimus delectus. Officiis. ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, fugiat!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis aut beatae earum odio nemo similique id possimus delectus. Officiis.ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, quis.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur. magnam corrupti maxime corporis. Consectetur, dolorum modi. Placeat, doloribus delectus?</p> */}
                        <p>

                            Our mission is to provide an Entertaining, Educational, Friendly and Inviting, Functional and Innovative experience of uncompromising quality that meets the health and fitness needs of our clients.</p>

                    </div>
                </div>
            </section>
        </Fragment>


    );
}