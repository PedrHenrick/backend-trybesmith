import { Response, Request } from 'express';
import productsService from '../services/products.service';

const getAll = async (req: Request, res: Response): Promise<Response> => {
  const product = await productsService.getProducts();
  return res.status(200).json(product);
};

const addProduct = async (req: Request, res: Response): Promise<Response> => {
  const product = await productsService.addProduct(req.body);
  return res.status(201).json(product);
};

export default {
  getAll,
  addProduct,
};
