import { Response, Request } from 'express';
import usersService from '../services/users.service';

const addUser = async (req: Request, res: Response): Promise<Response> => {
  const token = await usersService.addUser(req.body);
  return res.status(201).json({ token });
};

export default {
  addUser,
};
