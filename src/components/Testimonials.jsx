import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import { Card } from "./Card";
import { testimonials } from "../asset/data";
import { SectionHead } from "./SectionHead"

export const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const { name, quote, job, avatar } = testimonials[index];

    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1);

        if (index <= 0) {
            setIndex(testimonials.length - 1);
        }
    }

    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);

        if (index >= testimonials.length - 1) {
            setIndex(0)
        }
    }


    return (
        <section className="testimonials">
            <div className="container testimonials__container">
                <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonials__head" />

                <Card className="testimonial">
                    <div className="testimonial__avater">
                        <img src={avatar} alt="" />
                    </div>
                    <p className="testimonial__quote">{`"${quote}"`}</p>
                    <h5>{name}</h5>

                    <small className="testimonial__title">{job}</small>
                </Card>

                <div className="testimonials__btn-contaiiner d-flex align-items-center jsutify-content-center">
                    <button onClick={prevTestimonialHandler} className="testimonials__btn">{<IoIosArrowDropleftCircle />}</button>
                    <button onClick={nextTestimonialHandler} className="testimonials__btn">{<IoIosArrowDroprightCircle />}</button>
                </div>


            </div>
        </section>
    )
}
