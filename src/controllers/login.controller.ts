import { Response, Request } from 'express';
import loginService from '../services/login.service';

const verifyLogin = async (req: Request, res: Response): Promise<Response> => {
  const token = await loginService.verifyLogin(req.body);
  return res.status(200).json({ token });
};

export default {
  verifyLogin,
};
