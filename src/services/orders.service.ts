import ordersModel from '../models/orders.model';

const getOrders = async () => {
  const orders = await ordersModel.getAll();

  return orders
    .map((order) => ({ ...order, productsIds: [order.productIds] }));
};

export default {
  getOrders,
};
