
import { Card } from './Card'

export const Trainer = ({ image, name, job, socials }) => {
    return (
        <Card className="trainer">
            <div className="trainer__img">
                <img src={image} alt="" />
            </div>

            <h3>{name}</h3>
            <p>{job}</p>
            <div className="trainer__socials d-flex jsutify-content-center align-items-center">
                {
                    socials.map(({ icon, link }, index) => (
                        <a key={index} href={link} target="_blank" rel="noreferrer">{icon}</a>
                    ))
                }
            </div>
        </Card>
    )
}
