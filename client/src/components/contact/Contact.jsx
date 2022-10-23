import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Contact( props) {

    //const {contactid} = useParams()

    return (
        <article>
            <Link to={`/details/${props._id}`} >
            <p>{props._id}</p>
                <p>{props.name}</p>
                <p>{props.nr}</p>
            </Link>
        </article>
    );
}

export default Contact;