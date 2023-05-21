'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Books = require('./Model/Books');

async function seed (){
  await Books.create({
    title: 'Green Eggs and Ham',
    description: 'An argument about the quality of breakfast',
    status: 'Available'
  });
  await Books.create({
    title: 'Good Night Moon',
    description: 'Young bunny says good night to objects and creatures in green-walled bedroom ',
    status: 'Available'
  });
  mongoose.disconnect();
}

seed();

