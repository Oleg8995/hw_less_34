import "./Main_conteiner.css";
import { ContentSection } from "../content_section";
import { Sidebar } from "../sidebar/Sidebar";

export const Main_container = () => {
    return (
        <div className="main_container">
            <ContentSection/>
            <Sidebar/>
        </div>
    )
}

