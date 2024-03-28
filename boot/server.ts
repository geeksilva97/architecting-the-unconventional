import express from 'express';
import { router } from '../interface/web-arch/router';

const PORT = process.env.PORT || 3000;

export const startServer = () => {
  const app = express();

  app.use(express.json());

  app.use(router());

  app.listen(PORT, () => {
    console.log(`server is up at ${PORT}`)
  });

};
