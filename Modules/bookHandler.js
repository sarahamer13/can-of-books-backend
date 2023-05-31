'use strict';

const Books = require('../Model/Books');

const bookHandler = {};

bookHandler.getBooks = function (request, response){
  let queryObject = {};

  if(request.query.title){
    queryObject = {title: request.query.title};
  }

  Books.find(queryObject)
    .then(data => response.status(200).send(data))
    .catch(err => console.error(err));
};

bookHandler.postBooks = function (request, response, next){
  const data = request.body;
  Books.create(data)
    .then(addedBook => response.status(200).send(addedBook))
    .catch(err => next(err));
};

bookHandler.deleteBooks = function (request, response, next){
  const {id} = request.params;
  console.log(id);
  Books.findByIdAndDelete(id)
    .then(deletedBooks => response.status(200).send(deletedBooks))
    .catch(err => next(err));
};

bookHandler.updateBooks = function (request, response, next){
  const {id} = request.params;
  const data = request.body; 
  Books.findByIdAndUpdate(id, data, {new: true, overwrite: true})
    .then(updatedBook => response.status(200).send(updatedBook))
    .catch(err => next(err));
};

module.exports = bookHandler;

