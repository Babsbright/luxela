// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { v2 as cloudinary } from 'cloudinary';

export const cloudinaryConfig = (cloundinary): void => {
    cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});
}