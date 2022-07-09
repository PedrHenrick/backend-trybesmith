import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import ErrorHandle from '../errors/classError';

const schemaUser = joi.object({
  username: joi.string().min(3).required(),
  classe: joi.string().min(3).required(),
  level: joi.number().min(1).required(),
  password: joi.string().min(8).required(),
});

const validateSchemaUsers = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schemaUser.validate(req.body, { abortEarly: false });
  if (error) {
    const { message } = error.details[0];
    const status = message.includes('required') ? 400 : 422;
    throw new ErrorHandle(status, message);
  }
  next();
};

export default validateSchemaUsers;