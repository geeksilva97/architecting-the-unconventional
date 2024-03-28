import express, { Application } from 'express';
import { router } from '../interface/web-arch/router';

type StartServerProps = {
  beforeStart?: (app: Application) => Promise<void>
};

const app = express();

const PORT = process.env.PORT || 3000;

export const startServer = async (props: StartServerProps = {}) => {
  app.use(express.json());

  app.use(router());

  await Promise.all([props.beforeStart?.(app)]);

  app.listen(PORT, () => {
    console.log(`server is up at ${PORT}`)
  });
};
