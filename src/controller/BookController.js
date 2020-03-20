const Book = require('../model/book');

module.exports = {

    async insert(request, response) {
        const { name, title, isbn, year, autor } = request.body;
        book = await Book.create({
            name,
            title,
            isbn,
            year,
            autor,
        })
        return response.json(book);
    },

    async delete(request, response) {
        const isbn = request.query.isbn;
        book = await Book.findOneAndDelete({ isbn: isbn })

        return response.json(book);
    },

    async find(request, response) {
        const isbn = request.query.isbn;
        book = await Book.findOne({ isbn: isbn })

        return response.json(book);
    },

    async findAll(request, response) {
        const isbn = request.query.isbn;
        book = await Book.find({})

        return response.json(book);
    },

    async update(request, response) {
        const { name, title, isbn, year, autor } = request.body;
        book = await Book.findOneAndUpdate({ isbn: isbn },
            {
                $set:
                {
                    name: name,
                    title: title,
                    year: year,
                    autor: autor
                }
            }, { multi: true, new: true })

        return response.json(book);

    }
}