import { Router } from "express";
import { processShippingReleaseExpressHandler } from './process-shipping-release-express-http-handler';

export const shippingReleaseController = () => {
  const router = Router();

  router.post('/', processShippingReleaseExpressHandler);

  return router;
};
