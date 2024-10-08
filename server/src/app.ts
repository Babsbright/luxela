import express, {Application} from 'express';
import cors, { CorsOptions } from 'cors';
import helmet, { HelmetOptions } from 'helmet';
import bodyParser,{ OptionsJson} from 'body-parser';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';
import {v2 as cloudinary} from 'cloudinary'
const app: Application = express()

import {notFound} from './errors/PageNotFound'
import { errorHandler } from './utils/errorHandler.utils';
import userRoute from './Authentication/routes/auth.routes';
// import { AppConfig } from './config/app.config';
import { cloudinaryConfig } from './config/cloudinary/config.firebase';

const corsConfig: CorsOptions = {
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 200
}

const helmetConfig: HelmetOptions = {
    contentSecurityPolicy: true,
	crossOriginEmbedderPolicy: true,
	crossOriginOpenerPolicy: true,
	crossOriginResourcePolicy: true,
	originAgentCluster: true,
	referrerPolicy: true,
}

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, 
  }))

cloudinaryConfig(cloudinary)

app.use(helmet(helmetConfig))
app.use(cors(corsConfig));
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))


app.use("/api/v1/luxela/auth", userRoute)

app.use(notFound)
app.use(errorHandler)
export default app

