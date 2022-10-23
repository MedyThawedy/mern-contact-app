import { ObjectId } from "mongodb"
import { getDb } from "../util/db.js"
import express from 'express';
import { MongoClient } from "mongodb";

export const getAll = async (req, res) => {
    let db = await getDb();
    console.log('3. db = ', db)
    let responseWithData = await db.collection('contact').find().toArray()
    console.log('4. res with data =', responseWithData)
    return responseWithData;

}

export const createContactDocument = async (req, res) => {

    const contact = {
        "_id": "634e9b37db99811e950826dc",
        "name": "Test",
        "nr": "4711"
    }
    let db = await getDb();
    console.log('5. db = ', db)
    let result = await db.collection('contact').insertOne(contact);
    return result;

}


export const updateContactDocument = async (req, res) => {
    const id = '634e9b37db99811e950826dc'; //req.params.id;
    const contact = {
        "name": "Update Test",
        "nr": "4711"
    }

    let db = await getDb();
    console.log('7. db = ', db)
    let result = await db.collection('contact').updateOne({ _id: new ObjectId(id) }, { $set: { ...contact } })
    return result;

}


export const deleteContactDocument = async (req, res) => {
    const id = "634e9b37db99811e950826dc"; //req.params.id;
    try {
        let db = await getDb();
        console.log('9. db = ', db)
        let result = await db.collection('contact').deleteOne({ _id: new ObjectId(id) })
        return result;
    } catch (err) {
        console.log('10. Error = ', err)
        console.log(err);
        return err;
    }
}

export const getContactDocument = async (req, res) => {
    const id = '634ebcfd7f214b2dd9c44439'; //req.params.id;
    try {
        let db = await getDb();
        console.log('12. db = ', db)
        let result = await db.collection('contact').findOne({ _id: new ObjectId(id) });
        return JSON.stringify(result);
    } catch (err) {
        console.log('12. Error = ', err)
        console.log(err);
        return err;
    }
}
