import * as serverlessExpress from 'aws-serverless-express';
import app from './app';

const server = serverlessExpress.createServer(app);

export const handler = (event, context) => {
  serverlessExpress.proxy(server, event, context);
};
