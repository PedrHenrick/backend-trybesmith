import { getAll } from '../models/products.model';
import IProducts from '../interfaces/product.interface';

const getProducts = async (): Promise<IProducts[]> => {
  const [row] = await getAll();
  return row as unknown as IProducts[];
};

export default {
  getProducts,
};
