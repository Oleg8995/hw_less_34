import "./Contacts.css"

export const Contact = () => {
    return (
        <div className="contacts_section">
            <h3 className="sidebar_section_title">Contacts</h3>
            <div>
                <span className="contacts_section_type">C:</span>
                <a className="contacts_section_link" href="tel:+380502682387">+38 050 268 23 87</a>
            </div>

            <div>
                <span className="contacts_section_type">E:</span>
                <a className="contacts_section_link" href="mailto:oleg8995@gmail.com">oleg8995@gmail.com</a>
            </div>
        </div>
    )
}