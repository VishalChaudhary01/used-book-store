import { Book, bookValidation } from '../models/Book.js'

const getAllBooks = async (req, res) => {
     const books = await Book.find({});
     res.status(200).json(books);
}

const getBookById = async (req, res) => {
     const book = await Book.findById(req.params.id);
     if (!book) return res.status(404).json({ message: "Something went wrong, Please try again"});
     res.status(200).json(book);
}

const uploadBook = async (req, res) => {
     const user = req.id;
     const { name, author, publishYear, category, imageUrl, description, price } = req.body;
     const result = bookValidation.validate(req.body);
     if (!result.error) return res.status(400).json({ message: result.error.details[0].message});
     const newBook = await Book.create({
          user,
          name,
          author,
          publishYear,
          imageUrl,
          price,
          description,
          category,
     });
     res.status(201).json({newBook});
}

const updateBook = async (req, res) => {
     const updateBookData = req.body;
     const book = await Book.findById(req.params.id);
     if (!book) return res.status(404).json({ message: "Something went wrong, please try again" });
     const updatedBook = await Book.findByIdAndUpdate(req.params.id, { ...updateBookData }, { new: true });
     res.status(200).json({ message: "Book Updated successfuly", updatedBook });
}

const deleteBook = async (req, res) => {
     const book = await Book.findById(req.params.id);
     if (!book) return  res.status(404).json({ message: "Something went wrong, please try again" });
     await book.deleteOne()
     res.status(200).json({ message: "Book deleted successfully" });
}


export { 
     getAllBooks,
     getBookById,
     uploadBook,
     updateBook,
     deleteBook
}