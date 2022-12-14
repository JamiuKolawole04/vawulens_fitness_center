import { GiCutDiamond } from "react-icons/gi";

import valuesImg from "../asset/images/values.jpg";
import { SectionHead } from "./SectionHead";
import { values } from "../asset/data";
import { Card } from "./Card";

export const Values = () => {
    return (
        <section className="values">
            <div className="container values__container d-grid">
                <div className="values__left">
                    <div className="values__img">
                        <img src={valuesImg} alt="values img" />
                    </div>
                </div>

                <div className="values__right">
                    <SectionHead icon={<GiCutDiamond />} title="Values" />

                    <p> We provide quality workouts and result oriented programs. You have fun  and great feeling of being inclusive .</p>

                    <div className="values__wrapper d-grid">
                        {
                            values.map(({ id, icon, desc, title }) => (
                                <Card className="values__value" key={id}>
                                    <span className="d-grid place-items-center">{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
