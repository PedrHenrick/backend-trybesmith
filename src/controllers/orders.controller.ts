import { Response, Request } from 'express';
import ordersService from '../services/orders.service';
import { authenticateToken } from '../utils/JWTToken';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const orders = await ordersService.getOrders();
  return res.status(200).json(orders);
};

const addOrders = async (req: Request, res: Response): Promise<Response> => {
  const token = req.headers.authorization;
  const userLogged = await authenticateToken(String(token));
  const { productsIds } = req.body;
  const orders = await ordersService.addOrders(productsIds, Object(userLogged));
  return res.status(201).json(orders);
};

export default {
  getAll,
  addOrders,
};
