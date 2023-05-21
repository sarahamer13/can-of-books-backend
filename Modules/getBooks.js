'use strict';

const Books = require('../Model/Books');

function getBooks(request, response){
  let queryObject = {};

  if(request.query.title){
    queryObject = {title: request.query.title};
  }

  Books.find(queryObject)
    .then(data => response.status(200).send(data))
    .catch(err => console.error(err));
}

module.exports = getBooks;

