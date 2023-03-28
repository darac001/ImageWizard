import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import dalleEditRoutes from './routes/dalleEditRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

import { Configuration, OpenAIApi } from "openai"
import sharp from 'sharp';


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


// // file upload route
// // ****************
// import multer from 'multer';
// const upload = multer({ dest: 'uploads/' })



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
app.use('/api/v1/upload', uploadRoutes);







app.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello from DALL.E!',
    });
});



// // file upload/edit route
// // ****************
// app.post('/upload', upload.single('file'), function (req, res) {
//     // console.log(req.body);
//     // console.log(req.file);
//   })



// mongo   

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
        console.log(error);
    }
};

startServer();