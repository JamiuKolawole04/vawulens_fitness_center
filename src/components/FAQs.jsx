import { FaQuestion } from "react-icons/fa";

import { faqs } from "../asset/data";
import { FAQ } from "./FAQ";
import { SectionHead } from "./SectionHead";


export const FAQs = () => {
    return (
        <section className="faqs">
            <div className="container faqs__container">
                <SectionHead icon={<FaQuestion />} title="FAQS" />

                <div className="faqs__wrapper d-grid align-items-fx-start">
                    {
                        faqs.map(({ id, question, answer }) => (
                            <FAQ
                                key={id}
                                question={question}
                                answer={answer}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
