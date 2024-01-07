import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());

app.use('/src', express.static('../src'));

app.use('/', routes);

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).send();
  },
);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    res.status(err.status || 500).send();
  },
);

export default app;
