import { isValidObjectId } from "mongoose";
import HttpError from "./HttpError";

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId) {
    next(HttpError(400, `${id} is not valid id`));
  }
  next();
};

export default isValidId;
