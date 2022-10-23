import { getAll, createContactDocument, updateContactDocument, deleteContactDocument, getContactDocument } from "../services/contactService.js"

export const getAllContacts = async (req, res) => {
    try {
        let dataToSend = await getAll();
        res.send(dataToSend);
    } catch (err) {
        console.log('4. Fehler = ', err);
        return err;
    }

}

export const createContact = async (req, res) => {
    try {
        let createdDocResult = await createContactDocument();
        res.send(('6. Data inserted : ' + createdDocResult));
    } catch (err) {
        console.log('6. Error = ', err)
        res.send(err);
    }
}

export const updateContact = async (req, res) => {
    try {
        let updateDocResult = await updateContactDocument();
        res.send(('8. Data updatet : ' + updateDocResult));
    } catch (err) {
        console.log('8. Error = ', err)
        res.send(err);
    }
}

export const deleteContact = async (req, res) => {

    let deleteDocResult = await deleteContactDocument();
    res.send(('10. Data deleted : ' + deleteDocResult));

}

export const getContact = async (req, res) => {

    let getDocResult = await getContactDocument();
    res.send(('11. Data found : ' + getDocResult));

}
