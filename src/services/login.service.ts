import ErrorHandle from '../errors/classError';
import ILogin from '../interfaces/login.interface';
import usersModel from '../models/users.model';
import generateJWTToken from '../utils/JWTToken';

const verifyLogin = async (login: ILogin) => {
  const users = await usersModel.getAll(); 

  const hasUser = users.filter((user) => 
    user.username === login.username && user.password === login.password);

  if (hasUser.length === 0) {
    throw new ErrorHandle(401, 'Username or password invalid');
  }
  return generateJWTToken({ ...hasUser[0] });
};

export default {
  verifyLogin,
};
