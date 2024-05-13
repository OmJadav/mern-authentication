import express from 'express';
import dotenv, { config } from 'dotenv';
import process from 'process'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js';
dotenv.config();
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import path from 'path';
const port = process.env.PORT;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, 'frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    });
    // app.use(express.static(path.join(__dirname, "dist")))
    // app.get("*", (req, res) => {
    //     res.sendFile(path.join(__dirname, "dist", "index.html"))
    // })
} else {
    app.get('/', (req, res) => res.send('Server is Ready'))
}

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Sever is Running on port ${port}...`);
})