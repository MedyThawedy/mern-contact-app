import { ObjectId } from "mongodb"
import { getDb } from "../util/db.js"

export const getAll = () => {
    return new Promise((resolve, reject) => {
        getDb()
            .then(db =>
                db.collection('contact').find().toArray()
            )
            .then(result => resolve(result))
            .catch(err => reject(err))
    })
}