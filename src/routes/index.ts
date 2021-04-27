import { Router } from 'express';

import productsRouter from './products.routes';
import homeRouter from './home.routes';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/products', productsRouter);

export default routes;
