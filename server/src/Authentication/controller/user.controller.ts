// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";
import { responseHandler } from "../../utils/helper.utils";
import { UserService } from "../service/user.service";
import { UploadedFile } from "express-fileupload";
import BadRequestAPIError from "../../errors/BadrequestError";

// import { SolanaSignInInput, SolanaSignInOutput } from '@solana/wallet-standard-features'
// import { base58 } from './../../../node_modules/@scure/base/lib/esm/index';
import { verifySignIn, gravatarIconUrl } from "../../utils/solana.util";

const service = new UserService();
class User {
  constructor() {}

    /**
     * @description this controller takes in the body object for both seller and buyer
     * @argument req.body.seller {email,username,picture}
     * @argument req.body.buyer IBuyer data structure
    */
    async signup(req: Request, res: Response, next: NextFunction): Promise<void | any> {
        try {
            if(!req.body.email.includes('@')) throw new BadRequestAPIError('Submit a valid email address!')
                else if(!req.body.role) throw new BadRequestAPIError('User role is required!')
            
            const data = await service.signup(req.body)
            return responseHandler({
                res, 
                StatusCodes: StatusCodes.OK,
                message: 'User signup successfully',
                data
            })
        } catch (error: Error | any) {
            console.error('Error in signup:', error);
            next(error)
        }
    }

  async verifyOTP(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | any> {
    try {
      const data = await service.verifyUser(req.body.email, req.body.code);
      return responseHandler({
        res,
        StatusCodes: StatusCodes.OK,
        message: "User verified successfully",
        data,
      });
    } catch (error: Error | any) {
      console.error("Error in signup:", error);
      next(error);
    }
  }

  /**
   * @description this is the controller and it takes in the image file of the type jpeg|jpg|png.
   * @requires UploadedFile data format in the request header  with the name tag: "image"
   * @returns the secure url for the images in string and the status code of 201
   */
  async uploadPicture(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | any> {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      if (!req.files || !req.files.image) {
        return res.status(400).send("No file uploaded");
      }
      const acceptedType = /jpeg|jpg|png/;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      const buffer = (req.files.image as UploadedFile).data;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      const name = (req.files.image as UploadedFile).name;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      const filetype = (req.files.image as UploadedFile).mimetype;
      if (!acceptedType.test(filetype))
        return new BadRequestAPIError("Only image file is allowed!");
      const { secure_url } = await service.upload(buffer, name, "profile");
      return responseHandler({
        res,
        StatusCodes: StatusCodes.OK,
        message: "Picture uploaded succe",
        data: secure_url,
      });
    } catch (error: Error | any) {
      next(error);
    }
  }

  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | any> {
    try {
      const userId = req.body.userId;
      const result = await service.fetch(userId as string);
      return responseHandler({
        res,
        StatusCodes: StatusCodes.CREATED,
        message: "Image uploaded successfully!",
        data: result,
      });
    } catch (e: Error | any) {
      next(e);
    }
  }

  async updatePassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | any> {
    try {
      const userId = req.body.userId;
      const payload = req.body.payload;
      console.log("payload::", payload);
      const result = await service.update(userId as string, { ...payload });
      return responseHandler({
        res,
        StatusCodes: StatusCodes.OK,
        message: "Working fine",
        data: result,
      });
    } catch (e: Error | any) {
      next(e);
    }
  }

  async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | any> {
    try {
      const userId = req.body.userId;
      const result = await service.delete(userId as string);
      return responseHandler({
        res,
        StatusCodes: StatusCodes.OK,
        message: "Working fine",
        data: result,
      });
    } catch (e: Error | any) {
      next(e);
    }
  }
}

export const userController = new User();
