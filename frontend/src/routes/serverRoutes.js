// このファイルはSSRのパスが増えても触ることはない。
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import { Helmet } from "react-helmet";

import Contact from "../components/pages/contact";

import express from 'express';
const app = express();
let serverRoutes = express.Router()

serverRoutes.get('*', (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      {routes[0].routes.map((route, index) => (
        <Route path={route.path} component={route.component} exact={route.exact} key={index}/>
      ))}
    </StaticRouter>
  )
  const helmet = Helmet.renderStatic();
  const html = `
      <!doctype html>
      <html ${helmet.htmlAttributes.toString()}>
          <head>
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              ${helmet.link.toString()}
          </head>
          <body ${helmet.bodyAttributes.toString()}>
              <div id="index">
                  ${app}
              </div>
              <script type="text/javascript" src="main.js"></script>
          </body>
      </html>
  `;
  res.status(200).send(html);
});

export { serverRoutes }