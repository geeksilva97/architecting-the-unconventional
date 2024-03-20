import { Request, Response } from 'express';

export const processShippingReleaseExpressHandler = (req: Request, res: Response) => {
  console.log(req.body)

  return res.send('hello world')
};
