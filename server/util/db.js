import { MongoClient } from "mongodb"
import '../config.js';

const URI = process.env.MONGODB_URI
const DB_NAME = process.env.DB_NAME

const client = new MongoClient(URI)

let db

export const getDb = async () => {
    try {
        await client.connect();
        console.log('1. Mongo DB Connected successfully to server');
        db = client.db(DB_NAME)
        console.log('2. db = ', db)
        return db;

    } catch (err) {
        console.log('DB Error - DB Connection not possible! ');
        console.log(err);
        return err;
    }
}


