import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import ErrorHandle from '../errors/classError';

const schemaProduct = joi.object({
  name: joi.string().min(3).required(),
  amount: joi.string().min(3).required(),
});

const validateSchemaProducts = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schemaProduct.validate(req.body, { abortEarly: false });
  if (error) {
    const { message } = error.details[0];
    const status = message.includes('required') ? 400 : 422;
    throw new ErrorHandle(status, message);
  }
  next();
};

export default validateSchemaProducts;