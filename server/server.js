import './config.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import {getAllContacts, getContact, createContact, deleteContact, updateContact} from './controller/contactController.js';

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).send('Let s go! ');
});

app.get('/contacts', getAllContacts);
app.get('/contact/:id', getContact);
app.post('/create', createContact);
app.delete('/delete/:id', deleteContact);
app.put('/update/:id', updateContact);


app.listen(port, ()=>{console.log('Server startet on Port = ', port)})