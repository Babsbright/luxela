// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {configDotenv} from 'dotenv';

if(process.env.NODE_ENV !== 'production') configDotenv()

export const AppConfig = {
    server: {
        port: parseInt(process.env.PORT),
        baseURL: String(process.env.BASEURL)
    },
    firebase: {
        serviceaccount: JSON.parse(String(process.env.FIREBASE_SERVICE_ACCOUNT)),
        apiKey: String(process.env.FIREBASE_API_KEY),
        authDomain: String(process.env.FIREBASE_AUTH_DOMAIN),
        projectId: String(process.env.FIREBASE_PROJECT_ID),
        storageBucket: String(process.env.FIREBASE_STORAGE_BUCKET),
        messagingSenderId: String(process.env.FIREBASE_MESSAGING_SENDER_ID),
        appId: String(process.env.FIREBASE_APP_id),
        measurementId: String(process.env.FIREBASE_MEASURING_ID)
    },
    jwt: {
        secret: String(process.env.JWT_SECRET),
        expiration: String(process.env.EXPIRE_IN)
    },
    email: {
        user: String(process.env.EMAIL_USERNAME),
        pass: String(process.env.EMAIL_PASSKEY)
    }

}