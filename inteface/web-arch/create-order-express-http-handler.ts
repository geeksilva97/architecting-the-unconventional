import { Request, Response } from 'express';

export const createOrderExpressHandler = (req: Request, res: Response) => {
  const {} = req.body;
  return res.send('hello world')
};
