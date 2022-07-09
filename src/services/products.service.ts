import productsModel from '../models/products.model';
import IProducts from '../interfaces/product.interface';

const getProducts = async (): Promise<IProducts[]> => {
  const [row] = await productsModel.getAll();
  return row as unknown as IProducts[];
};

const addProduct = async (product: IProducts): Promise<IProducts> => {
  const { insertId } = await productsModel.add(product);
  return { id: insertId, ...product };
};

const updateItem = async (productId: number, orderId: number) => {
  await productsModel.updateItem(productId, orderId);
  return productId;
};

export default {
  getProducts,
  addProduct,
  updateItem,
};
