import express from 'express';
import { processShippingReleaseExpressHandler } from './inteface/web-arch/process-shipping-release-express-http-handler';
import { container } from './container';
import { router } from './inteface/web-arch/router';

const app = express();

app.use(express.json());

// app.post('/api/processing/shipping-release', processShippingReleaseExpressHandler);

app.use(router());

app.listen(process.env.PORT || 3000, () => {
  console.log('server is up')
});
