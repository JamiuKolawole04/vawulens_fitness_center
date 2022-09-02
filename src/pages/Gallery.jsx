import { Fragment } from "react";

import { Header } from "../components";
import headerImg from "../asset/images/header_bg_3.jpg";

export const Gallery = () => {
    const galleryLenth = 15;
    const images = [];

    for (let i = 1; i <= galleryLenth; i++) {
        images.push(require(`../asset/images/gallery${i}.jpg`));
    }

    // console.log(images);


    return (
        <Fragment>
            <Header title="Our Gallery" image={headerImg}></Header>

            <section className="gallery">
                <div className="container gallery__container d-grid">
                    {
                        images.map((image, index) => (
                            <article key={index}>
                                <img src={image} alt={`Gallery ${index + 1}`} />
                            </article>
                        ))
                    }
                </div>
            </section>
        </Fragment>
    );
}