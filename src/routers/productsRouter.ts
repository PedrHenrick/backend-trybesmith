import express from 'express';
import productsController from '../controllers/products.controller';
import validateProducts from '../middleware/validateProducts';

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAll);
productsRouter.post('/', validateProducts, productsController.addProduct);

export default productsRouter;