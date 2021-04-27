import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
    return response.json("products");
});

export default productsRouter;
