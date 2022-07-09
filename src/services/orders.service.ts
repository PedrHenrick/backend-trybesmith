import IOrders from '../interfaces/order.interface';
import ordersModel from '../models/orders.model';
import productsService from './products.service';

const getOrders = async (): Promise<IOrders[]> => {
  const orders = await ordersModel.getAll();

  return orders
    .map((order) => ({ ...order, productsIds: [order.productIds] }));
};

const addOrders = async (orders: number[], userLogged: unknown) => {
  const { insertId } = await ordersModel.add(Number(Object(userLogged).id));
  const productUpdated = await Promise.all(
    orders.map((productId: number) => productsService.updateItem(productId, insertId)),
  );
  return {
    userId: Number(Object(userLogged).id),
    productsIds: productUpdated,
  };
};

export default {
  getOrders,
  addOrders,
};
