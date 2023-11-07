import { AboutME } from "../aboutMe";
import { Experience } from "../experience";
import { Project } from "../project";
import "./content_section.css";

export const ContentSection = () => {
    return (
        <div className="main_content_section" >
            <AboutME/>
            <Project/>
            <Experience/>
        </div>
    )
};