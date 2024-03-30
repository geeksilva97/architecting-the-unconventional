import { Request, Response } from 'express';
import { container } from '../../../container';

// file: interface/web/shippping-release-controller/process-shipping-release-handler.ts
export const processShippingReleaseExpressHandler = async (req: Request, res: Response) => {
  // validation & error handling omitted

  await container.processShippingReleaseUseCase.execute(req.body);

  return res.status(202);
};
