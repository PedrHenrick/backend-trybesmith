import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import ErrorHandle from '../errors/classError';

const schemaLogin = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});

const validateSchemaLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schemaLogin.validate(req.body, { abortEarly: false });
  if (error) {
    const { message } = error.details[0];
    throw new ErrorHandle(400, message);
  }
  next();
};

export default validateSchemaLogin;