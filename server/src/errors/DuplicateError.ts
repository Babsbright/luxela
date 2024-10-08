import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./CustomAPIError";

class DuplicateError extends CustomAPIError {  
  constructor ( message: string) {
    super( message, StatusCodes.TOO_MANY_REQUESTS)
  }
}


export default DuplicateError;