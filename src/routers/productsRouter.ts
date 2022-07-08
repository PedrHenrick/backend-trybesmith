import express from 'express';
import productsController from '../controllers/products.controller';

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAll);

export default productsRouter;