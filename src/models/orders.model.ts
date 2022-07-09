import IOrders from '../interfaces/order.interface';
import connection from './connection';

const getAll = async (): Promise<IOrders[]> => {
  const query = `
    SELECT Orders.id, Orders.userId, Products.id AS productIds
    FROM Trybesmith.Orders AS Orders
    JOIN Trybesmith.Products AS Products
    ON Orders.id = Products.orderId
  `;
  const [rows] = await connection.execute(query);
  return rows as unknown as IOrders[];
};

export default {
  getAll,
};
