import express from 'express';
import ordersRouter from './ordersRouter';
import productsRouter from './productsRouter';
import usersRouter from './usersRouter';

const routers = express.Router();

routers.use('/products', productsRouter);
routers.use('/users', usersRouter);
routers.use('/orders', ordersRouter);

export default routers;