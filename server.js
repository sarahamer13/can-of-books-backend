'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');

const getBooks = require ('./Modules/getBooks');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose is connected'));

app.get('/books', getBooks);


app.get('/', (request, response) => response.status(200).send ('Default route working'));


app.listen(PORT, () => console.log(`listening on ${PORT}`));
