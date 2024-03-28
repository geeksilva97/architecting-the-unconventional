import { Request, Response } from 'express';
import { container } from '../../../container';

export const processShippingReleaseExpressHandler = async (req: Request, res: Response) => {
  // validation & error handling omitted

  await container.processShippingReleaseUseCase.execute(req.body);

  return res.status(202);
};
