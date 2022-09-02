import { Fragment } from "react";

import headerImg from "../asset/images/header_bg_4.jpg";
import { Card, Header } from "../components";
import { plans } from "../asset/data";


export const Plans = () => {
    return (
        <Fragment>
            <Header title="Membership Plans" image={headerImg}>
                Explore our affordable plans to choose the best for yourself
            </Header>

            <section className="plans">
                <div className="container plans__container d-grid">
                    {
                        plans.map(({ id, name, desc, price, features }) => (
                            <Card key={id} className="plan">
                                <h3>{name}</h3>
                                <small>{desc}</small>
                                <h1>{`${price}`}</h1><h2>/mo</h2>
                                <h4>Features</h4>

                                {
                                    features.map(({ feature, available }, index) => (
                                        <p key={index} className={!available ? "disabled" : ""}>{feature}</p>
                                    ))
                                }

                                <button className="btn lg">Choose Plan</button>
                            </Card>
                        ))
                    }
                </div>
            </section>
        </Fragment>
    );
}