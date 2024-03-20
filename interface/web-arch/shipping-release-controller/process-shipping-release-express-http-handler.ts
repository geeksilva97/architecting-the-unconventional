import { Request, Response } from 'express';
import { container } from '../../../container';

export const processShippingReleaseExpressHandler = async (req: Request, res: Response) => {
  console.log(req.body)

  await container.processShippingReleaseUseCase.execute({});

  return res.send('hello world')
};
