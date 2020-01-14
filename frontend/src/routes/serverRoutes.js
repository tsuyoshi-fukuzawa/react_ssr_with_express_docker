// このファイルはSSRのパスが増えても触ることはない。
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import routes from './routes';

import express from 'express';
const app = express();
let serverRoutes = express.Router()

serverRoutes.get('*', (req, res) => {
  const context = {};
  ReactDOMServer.renderToNodeStream(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  ).pipe(res);
});

export { serverRoutes }