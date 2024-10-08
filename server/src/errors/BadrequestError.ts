import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./CustomAPIError";

class BadRequestAPIError extends CustomAPIError {
    constructor(message: string) {
        super(message, StatusCodes.BAD_REQUEST);
    }
}

export default BadRequestAPIError;
