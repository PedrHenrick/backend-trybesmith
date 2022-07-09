import { NextFunction, Request, Response } from 'express';
import ErrorHandle from '../errors/classError';
import { authenticateToken } from '../utils/JWTToken';

const authenticate = async (req: Request, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) throw new ErrorHandle(401, 'Token not found');
  await authenticateToken(token);
  next();
};

export default authenticate;
