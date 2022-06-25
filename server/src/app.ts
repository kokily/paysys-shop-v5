import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import bodyParser from 'koa-body';
import sslify from 'koa-sslify';
import serve from 'koa-static';
import send from 'koa-send';
import path from 'path';
import cors from './middlewares/cors';
import api from './api';
import jwtMiddleware from './middlewares/jwtMiddleware';
import { isProd } from './utils/constants';

const app = new Koa();
const router = new Router();
const rootDir = path.resolve(process.cwd(), './../client/out');

app.use(cors);
isProd && app.use(sslify({ port: 443 }));
app.use(logger());
app.use(jwtMiddleware);
app.use(bodyParser({ multipart: true }));
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(rootDir));
app.use(async (ctx) => {
  if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    await send(ctx, 'index.html', {
      root: rootDir,
    });
  }
});

router.use('/api', api.routes());

export default app;
