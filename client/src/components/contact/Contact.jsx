import { Link } from "react-router-dom";

function Contact({ contact }) {
    return (
        <article>
            <Link key={contact.id} to={`/details/${contact.id}`} >
                <p>{contact.name}</p>
                <p>{contact.nr}</p>
            </Link>
        </article>
    );
}

export default Contact;