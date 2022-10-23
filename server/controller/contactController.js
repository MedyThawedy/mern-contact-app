import {getAll } from "../services/contactService.js"

export const getAllContacts = (req,res) => {
    getAll()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ error: err }))
}

export const getContact = () => {

}

export const createContact = () => {
    


}

export const deleteContact = () => {

}

export const updateContact = () => {

}