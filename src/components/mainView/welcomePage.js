//import './Header.css';
import React from 'react';
import "./welcomePage.css";
import knitting from "../../media/knit.mp4";

export const WelcomePage = () => {

    return (
        <section id="welcome-video">
            <video autoPlay muted loop id="knittingVideo">
                <source src={knitting} type="video/mp4" />
            </video>
        </section>
    )
}