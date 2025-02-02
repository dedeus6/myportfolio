"use client";

import { useEffect } from "react";
import AboutMePage from "./aboutMePage";
import PresentationPage from "./presentationPage";
import "aos/dist/aos.css";
import AOS from "aos";
import SkillsPage from "./skillsPage";

const HomePage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <PresentationPage />
            <AboutMePage />
            <SkillsPage />
        </div>
    );
};

export default HomePage;