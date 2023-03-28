import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai"
import sharp from 'sharp';
import * as fs from 'fs';
import { promisify } from 'util';

dotenv.config();

import multer from 'multer';
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


// router.route('/').post((req, res) => {
//     console.log("hello");
//   });




router.route('/').post((req, res) => {

    // const fileName = "id" + Math.random().toString(16).slice(2) + req.file.originalname
    // console.log(fileName);
    try {

        console.log(req.body);
        // const generateImage = async () => {
        //     const aiResponse = await openai.createImageVariation(
        //         fs.createReadStream(`${id}.png`),
        //         1,
        //         "512x512",
        //         // 'b64_json'

        //     );
        //     console.log(aiResponse.data.data[0].url);
        //     const image = aiResponse.data.data[0].url;
        //     return image

        // }

        // setTimeout(() => {
        //     console.log("generating");
        //     generateImage()
        // }, 2000);
        // console.log(aiResponse.data.data[0].b64_json);
        // const image = aiResponse.data.data[0].b64_json;
        // const image = aiResponse.data.data[0].url;
        // console.log(image);


        // generateImage()

        // res.status(200).json({ success: true });
        // res.status(200).send("Status Working");
        // res.status(200).json({ image });
    } catch (error) {
        console.error(error);
        res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }
});

export default router;