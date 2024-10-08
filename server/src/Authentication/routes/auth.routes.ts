import { userController } from './../controller/user.controller';
import { Router } from "express";
const route = Router()



route.post('/signup', userController.signup)
route.patch('/otp/verify', userController.verifyOTP)
route.post('/upload', userController.uploadPicture)

export default route