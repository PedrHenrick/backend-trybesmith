import { NextFunction, Request, Response } from 'express';
import ErrorHandle from '../errors/classError';

const ErrorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as ErrorHandle;
  res.status(status || 500).json({ message } || 'Erro interno');
};

export default ErrorMiddleware;