import axios from "axios";
import { useState, useEffect } from "react";
import Contact from "../contact/Contact";

const Contacts = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getContactsData();
    }, []);

    const getContactsData = async () => {
        try {
            const response = await axios.get("http://localhost:9898/contacts");
            setContacts(response.data);
            console.log('1 .', response.data);
            console.log('2 .', typeof (response.data));
        } catch (err) {
            console.log("An error happened ", err);
            return err;
        }
    };

    return (
        <div>
            {JSON.stringify(contacts.data)}
            <hr />
            {contacts.map((item) => { return <p> {item._id}, {item.name}, {item.nr}</p> })}
            {/*<Contact key={contact.id} name={contact.name} nr={contact.nr} />*/}
        </div>
    );
}

export default Contacts;