import { Link } from "react-router-dom";

import headerImg from "../asset/images/main_header.png";

export const MainHeader = () => {
    return (
        <header className="main__header d-grid place-items-center">
            <div className="container main__header-container d-grid align-items-center justify-content-betwen">
                <div className="main__header-left">
                    <h4>#100DaysofWorkout</h4>
                    <h1>Join The Legends of the Fitness World</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi numquam inventore, sint magnam laboriosam aspernatur.</p>

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