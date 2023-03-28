
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




router.route('/').post(upload.single('file'), async (req, res) => {

    // const fileName = "id" + Math.random().toString(16).slice(2) + req.file.originalname
    // console.log(fileName);
    try {

        var id = "id" + Math.random().toString(16).slice(2)
        console.log(req.file);
        const getImage = async () => {
            let outputFile = `${id}.png`
            let fileName = ''
            await sharp(req.file.buffer)
                .resize({ height: 512, width: 512 })
                .toFile(outputFile)
                // .toBuffer({ resolveWithObject: true })
            // .then(generateImage())
            // .catch(function () {
            //     console.log("error");
            // })
        }
        getImage()
        
        console.log(req.file);
        const generateImage = async () => {
            const aiResponse = await openai.createImageVariation(
                fs.createReadStream(`${id}.png`),
                1,
                "512x512",
                // 'b64_json'

            );
            
            const image = aiResponse.data.data[0].url;
            console.log(image); 
            res.status(200).json({ photo: image });         

        }

        setTimeout(() => {
            console.log("generating");
            generateImage()
        }, 2000);
        // console.log(aiResponse.data.data[0].b64_json);
        // const image = aiResponse.data.data[0].b64_json;
        // const image = aiResponse.data.data[0].url;
        


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