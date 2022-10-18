import { MongoClient } from "mongodb"

const URL = process.env.MONGODB_URL
const DB_NAME = process.env.DB_NAME

const client = new MongoClient(URL)

let db

export const getDb = () => {
    return new Promise((resolved, reject) => {
        if (db) resolved(db)
        client.connect()
            .then(client => {
                console.log('Mongo DB Connected successfully to server');
                return client.db(DB_NAME)
            })
            .then(DbClient => {
                db = DbClient
                resolved(DbClient)
            })
            .catch(err => reject(err))
    })
}

