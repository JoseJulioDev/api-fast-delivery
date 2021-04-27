import { Router } from 'express';

const homeRouter = Router();

homeRouter.get('/', async (request, response) => {
    return response.json("welcome to api-fast-delivery in node.js");
});

export default homeRouter;
