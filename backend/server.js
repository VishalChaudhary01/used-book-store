import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'

import userRouter from './routes/userRouter.js'
import bookRouter from './routes/bookRouter.js'

const app = express();
dotenv.config();

connectDB();

app.use(express.json())

app.use(cors({
     credentials: true,
     origin: "http://localhost:5173"
}))


app.use('/api/user', userRouter)
app.use('/api/book', bookRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))