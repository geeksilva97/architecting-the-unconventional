import express from 'express';
import { createOrderExpressHandler } from './inteface/web-arch/create-order-express-http-handler';

const app = express();

app.post('/orders', createOrderExpressHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log('server is up')
});
