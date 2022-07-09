import express from 'express';
import usersController from '../controllers/users.controller';
import validateUser from '../middleware/validateUsers';

const usersRouter = express.Router();

usersRouter.post('/', validateUser, usersController.addUser);

export default usersRouter;