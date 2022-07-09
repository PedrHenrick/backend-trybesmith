import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/user.inteface';
import connection from './connection';

const getAll = async (): Promise<IUser[]> => {
  const query = 'SELECT * FROM Trybesmith.Users;';
  const [rows] = await connection.execute(query);
  return rows as unknown as IUser[];
};

const add = async (user: IUser): Promise<ResultSetHeader> => {
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
  VALUES(?, ?, ?, ?)`;
  const [result] = await connection.execute<ResultSetHeader>(
    query,
    [user.username, user.classe, user.level, user.password],
  );
  return result;
};

export default {
  getAll,
  add,
};
