import express from 'express';
import dotenv, { config } from 'dotenv';
import process from 'process'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js';
import cors from 'cors'
dotenv.config();
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import path from 'path';
const port = process.env.PORT;
connectDB();
const app = express();

//     const __dirname = path.resolve();
//     app.use(express.static(path.join(__dirname, 'frontend/dist')));
//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);



app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Sever is Running on port ${port}...`);
})