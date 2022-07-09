import { ResultSetHeader } from 'mysql2';
import IProducts from '../interfaces/product.interface';
import connection from './connection';

const getAll = async (): Promise<IProducts[]> => {
  const query = 'SELECT * FROM Trybesmith.Products;';
  const rows = await connection.execute(query);
  return rows as unknown as IProducts[];
};

const add = async ({ name, amount }: IProducts): Promise<ResultSetHeader> => {
  const query = `INSERT INTO Trybesmith.Products (name, amount)
  VALUES(?, ?)`;
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return result;
};

export default {
  getAll,
  add,
};
