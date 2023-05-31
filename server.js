'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');

const bookHandler = require ('./Modules/bookHandler');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose is connected'));

app.get('/', (request, response) => response.status(200).send ('Default route working'));

app.get('/books', bookHandler.getBooks);

app.post('/books', bookHandler.postBooks);

app.delete('/books/:id', bookHandler.deleteBooks);

app.put('/books/:id', bookHandler.updateBooks);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
