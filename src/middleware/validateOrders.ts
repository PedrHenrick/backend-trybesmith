import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import ErrorHandle from '../errors/classError';

const schemaOrder = joi.object({
  productsIds: joi.array().min(1).required(),
}).messages({
  'array.min': '"productsIds" must include only numbers',
});

const validateSchemaOrders = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schemaOrder.validate(req.body, { abortEarly: false });
  if (error) {
    const { message } = error.details[0];
    const status = message.includes('required') ? 400 : 422;
    throw new ErrorHandle(status, message);
  }
  next();
};

export default validateSchemaOrders;