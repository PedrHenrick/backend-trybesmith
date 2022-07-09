import express from 'express';
import ordersController from '../controllers/orders.controller';
import authenticate from '../middleware/authenticationMiddleware';
import validateSchemaOrders from '../middleware/validateOrders';

const ordersRouter = express.Router();

ordersRouter.get('/', ordersController.getAll);
ordersRouter.post('/', authenticate, validateSchemaOrders, ordersController.addOrders);

export default ordersRouter;