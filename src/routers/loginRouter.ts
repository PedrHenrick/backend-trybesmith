import express from 'express';
import loginController from '../controllers/login.controller';
import validateSchemaLogin from '../middleware/validateLogin';

const loginRouter = express.Router();

loginRouter.post('/', validateSchemaLogin, loginController.verifyLogin);

export default loginRouter;