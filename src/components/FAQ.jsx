import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export const FAQ = ({ question, answer }) => {
    const [isAnswerShowing, setIsAnswerShowing] = useState(false);
    return (
        <article className="faq" onClick={() => setIsAnswerShowing(prev => !prev)}>
            <div className="d-flex align-items-center justify-content-betwen">
                <h4>{question}</h4>
                <button className="faq__icon">
                    {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>

            {isAnswerShowing && <p> {answer}</p>}
        </article>
    )
}
