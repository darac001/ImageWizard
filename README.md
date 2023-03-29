<h1 align="center">
Imaginator, AI Image Generator 
https://i-maginator.netlify.app/
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>


## clone or download
```terminal
$ git clone https://github.com/darac001/ImageWizard.git
$ yarn # or npm i
```

## project structure
```terminal
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://www.mongodb.com/) 
- [Mongoose guide] (https://mongoosejs.com/docs/guide.html)
- [Node](https://nodejs.org/en/download/) ^18.14.2
- [npm](https://nodejs.org/en/download/package-manager/)
- [Cloudinary] (https://cloudinary.com/developers)
- [OpenAI] (https://platform.openai.com/overview)
- [OpenAICreateImage] (https://platform.openai.com/docs/api-reference/images/create)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 5173)
```terminal
$ cd client          // go to client folder
$ npm install    // npm install packages
$ npm run dev        // run it locally

```


## Server-side usage(PORT: 8080)

```terminal
$ cd server   // go to server folder
$ npm install       // npm install packages
$ npm start // run it locally
```
- you need to add your own env variables
(OPENAI_API_KEY="")
(MONGODB_URL="")
(CLOUDINARY_CLOUD_NAME="")
(CLOUDINARY_API_KEY="")
(CLOUDINARY_API_SECRET="")
(NODE_VERSION = “”)

## Deploy Server to [Render](https://render.com/)
- upload project folder to github
- login to render with your github account, create new web service and select your github repo
- select root directory to server
- add env variables, make sure to add "NODE_VERSION" variable

## Deploy Client to [Netlify](https://www.netlify.com/)
- in client/src/pages Home, CreatePost and EditImage, replace fetch urls with your created server urls from render
- login to netlify with github, add new site, improt existing project
- select base directory to client
- deploy site


