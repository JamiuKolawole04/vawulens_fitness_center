import { FaCrown } from "react-icons/fa";
import { SectionHead } from "./SectionHead";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

import { programs } from "../asset/data";
import { Card } from "./Card";

export const Programs = () => {
    return (
        <section className="programs">
            <div className="container programs__container">
                <SectionHead icon={<FaCrown />} title="Programs" />

                <div className="programs__wrapper d-grid">
                    {
                        programs.map(({ id, icon, title, info, path }) => (
                            <Card className="programs__program" key={id}>
                                <span className="d-grid place-items-center">{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>

                                <Link to={path} className="btn sm d-flex align-items-center jsutify-content-center" >Learn more <AiFillCaretRight /> </Link>
                            </Card>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}
