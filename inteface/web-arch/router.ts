import { Request, Response, Router } from "express";
import { shippingReleaseController } from "./shipping-release-controller";

export const router = () => {
  const mainRouter = Router();
  const apiRouter = Router();

  apiRouter.use('/processing/shipping-release', shippingReleaseController());

  mainRouter.use('/api', apiRouter);

  return mainRouter;
};
