const Author = require('../models/author.model');

module.exports = {
    getAllAuthors: (req, res) => {
        Author.find().sort('name')
            .then(authors => res.json(authors))
            .catch(err => res.json(err));
    },
    createAuthor: (req, res) => {
        const author = new Author(req.body);
        author.save()
            .then(() => res.json({ message: "Author created successfully!" }))
            .catch(err => res.status(400).json(err));
    },
    getAuthor: (req, res) => {
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(err => res.json(err));
    },
    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.status(400).json(err));
    },
    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(() => res.json({ message: "Author deleted successfully!" }))
            .catch(err => res.json(err));
    }
};
