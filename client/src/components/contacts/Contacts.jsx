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
            console.log('3 . id = ', (response.data[2]._id));
        } catch (err) {
            console.log("An error happened ", err);
            return err;
        }
    };

    return (
        <>
            <h1>Contacts</h1>
            <div>
            {/* For Test Purposes
                {JSON.stringify(contacts.data)}
                <hr />mongodb
                {contacts.map((item) => { return <p> {item._id}, {item.name}, {item.nr}</p> })}
             */}  
            </div> 
            
            {contacts.map((item) => {
              return <Contact  _id={item._id} name={item.name} nr={item.nr} /> })
                
            }
        </>

    );
}

export default Contacts;