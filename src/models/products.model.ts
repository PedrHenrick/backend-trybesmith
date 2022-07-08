import IProducts from '../interfaces/product.interface';
import connection from './connection';

export const getAll = async (): Promise<IProducts[]> => {
  const query = 'SELECT * FROM Trybesmith.Products;';
  const rows = await connection.execute(query);
  return rows as unknown as IProducts[];
};

export default getAll;
