import { Fragment } from "react";

import {
    FAQs,
    Footer,
    MainHeader,
    Programs,
    Testimonials,
    Values
} from "../components";


export const Home = () => {
    return (
        <Fragment>
            <MainHeader />
            <Programs />
            <Values />
            <FAQs />
            <Testimonials />
            <Footer />
        </Fragment>

    );
}