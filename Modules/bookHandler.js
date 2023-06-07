'use strict';

const Books = require('../Model/Books');

const bookHandler = {};

bookHandler.getBooks = function (request, response, next){
  let queryObject = {email: request.user.email};

  Books.find(queryObject)
    .then(data => response.status(200).send(data))
    .catch(err => console.error(err));
};

bookHandler.postBooks = function (request, response, next){
  Books.create({...req.body, email: req.user.email})
    .then(addedBook => response.status(200).send(addedBook))
    .catch(err => next(err));
};

bookHandler.deleteBooks = function (request, response, next){
  let id = req.params.id;
  Books.findByIdAndDelete(id)
    .then(deletedBooks => response.status(200).send(deletedBooks))
    .catch(err => next(err));
};

bookHandler.updateBooks = function (request, response, next){
  let id = req.params.id;
  const data = request.body; 
  Books.findByIdAndUpdate(id, {...req.body, email: req.user.email}, {new:true, overwrite: true})
    .then(updatedBook => response.status(200).send(updatedBook))
    .catch(err => next(err));
};

module.exports = bookHandler;

