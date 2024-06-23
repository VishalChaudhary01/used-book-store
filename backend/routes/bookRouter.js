import express from 'express'
import { deleteBook, getAllBooks, getBookById, updateBook, uploadBook } from '../controllers/bookControllers.js'
import isAuth from '../middlewares/auth.js'

const router = express.Router();

router.get('/all-books', getAllBooks);
router.get('/:id', getBookById);
router.post('/upload-book', isAuth, uploadBook);
router.put('/:id', isAuth, updateBook);
router.delete('/:id', isAuth, deleteBook);


export default router;