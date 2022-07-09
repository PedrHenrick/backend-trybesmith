import { Response, Request } from 'express';
import ordersService from '../services/orders.service';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  const orders = await ordersService.getOrders();
  return res.status(200).json(orders);
};

export default {
  getAll,
};
