import mongoose from "mongoose";
import Joi from 'joi'

const bookSchema = new mongoose.Schema(
     {
          user: {
               type: mongoose.Schema.Types.ObjectId,
               required: true,
               ref: 'User'
          },
          name: {
               type: String,
               required: true,
          },
          imageUrl: {
               type: String,
               returired: true,
          },
          author: {
               type: String,
               required: true,
          },
          description: {
               type: Stringn,
               required: true
          },
          price: {
               type: Number,
               required: true,
          },
          category: {
               type: String,
               required: true,
          },
          publishYear: {
               type: Number,
               required: true,
          }
     },
     { timestamps: true }
)

const Book = mongoose.model('Book', bookSchema);

const bookValidation = Joi.object({
     name: Joi.string().required(),
     author: Joi.string().required(),
     price: Joi.number().required(),
     user: Joi.object({ id: Joi.string().hex().length(24) }),
     category: Joi.string(),
     imageUrl: Joi.string().required(),
     publishYear: Joi.number().required(),
     description: Joi.string().required().min(5).max(200)
});

export { Book, bookValidation };