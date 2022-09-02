import { Link } from "react-router-dom";

import headerImg from "../asset/images/main_header.png";

export const MainHeader = () => {
    return (
        <header className="main__header d-grid place-items-center">
            <div className="container main__header-container d-grid align-items-center justify-content-betwen">
                <div className="main__header-left">
                    <h4>#100DaysofWorkout</h4>
                    <h1>Join The Legends of the Fitness World</h1>
                    <p>Join the fitness world to accomplish any goal, from improved health to weight loss to better performance.From general fitness to sport-specific training, there is no better program out there.</p>

                    <Link to="/plans" className="btn lg">Get started</Link>
                </div>

                <div className="main__header-right d-grid place-items-center">
                    <div className="main__header-circle"></div>
                    <div className="main__header-image">
                        <img src={headerImg} alt="main header img" />
                    </div>
                </div>
            </div>
        </header>
    );
}