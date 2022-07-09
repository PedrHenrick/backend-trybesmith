import jwt, { SignOptions } from 'jsonwebtoken'; 
import IUser from '../interfaces/user.inteface';

const SECRET = process.env.JWT_SECRET || 'bananinhaDePijaminha';

const jwtConfig: SignOptions = {
  expiresIn: '24H',
  algorithm: 'HS256',
};

const generateJWTToken = (payload: Omit<IUser, 'password'>) => jwt.sign(payload, SECRET, jwtConfig);

export default generateJWTToken;
