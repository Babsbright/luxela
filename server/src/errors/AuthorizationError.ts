import CustomAPIError from "./CustomAPIError";
import { StatusCodes } from "http-status-codes";

class AuthorizationAPIError extends CustomAPIError {
    constructor(message: string) {
        super(message, StatusCodes.UNAUTHORIZED)
    }
}

export default AuthorizationAPIError;
