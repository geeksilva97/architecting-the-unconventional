import express from 'express';
import { container } from './container';
import { router } from './interface/web-arch/router';

const app = express();

app.use(express.json());

app.use(router());

app.listen(process.env.PORT || 3000, () => {
  console.log('server is up')
});
