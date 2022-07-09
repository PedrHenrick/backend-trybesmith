import usersModel from '../models/users.model';
import IUser from '../interfaces/user.inteface';
import generateJWTToken from '../utils/JWTToken';

const addUser = async (user: IUser) => {
  const { insertId } = await usersModel.add(user);

  const userInformation = {
    id: Number(insertId),
    username: user.username,
    classe: user.classe,
    level: user.level,
  };

  return generateJWTToken(userInformation);
};

export default {
  addUser,
};
