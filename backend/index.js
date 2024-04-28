import express from 'express';
import dotenv, { config } from 'dotenv';
import process from 'process'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js';
dotenv.config();
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
const port = process.env.PORT;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send("<h1>BACKEND IS ready</h1>")
})
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Sever is Running on port ${port}...`);
})