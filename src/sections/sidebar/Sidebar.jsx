import { Contact } from "../contacts"
import { Skills } from "../skills"
import "./Sidebar.css"

export const Sidebar = () => {
    return (
        <aside className="sidebar">
            <img src="/src/assets/ava_004.jpg" alt="Photo" width="370px"></img>
            <Contact/>
            <Skills/>
        </aside>
    )
}
