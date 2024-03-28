import { Request, Response } from 'express';
import { container } from '../../../container';

export const processShippingReleaseExpressHandler = async (req: Request, res: Response) => {
  // validation & error handling omitted

  const requestData = req.body;

  await container.processShippingReleaseUseCase.execute(requestData);

  return res.status(202);
};
