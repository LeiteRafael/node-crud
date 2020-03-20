const {Router} = require('express');
const BookController = require('./controller/BookController')

const routes = Router();

routes.post('/books', BookController.insert);
routes.delete('/books', BookController.delete);
routes.get('/books/search', BookController.find);
routes.get('/books', BookController.findAll);
routes.put('/books', BookController.update);

module.exports = routes;