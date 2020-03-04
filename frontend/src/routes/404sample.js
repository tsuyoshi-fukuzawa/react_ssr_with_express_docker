// このファイルはSSRのパスが増えても触ることはない。
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, Route, Switch } from 'react-router-dom'
import routes from './routes';
import { Helmet } from "react-helmet";
import { Redirect } from 'react-router';

import express from 'express';
const app = express();
let serverRoutes = express.Router()

serverRoutes.get('*', (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )
  console.log(context)
  res.status(200).send(app);
});


function App() {
  return (
    <Switch>
      {/* some other routes */}
      <RedirectWithStatus status={301} from="/users" to="/profiles" />
      <RedirectWithStatus
        status={302}
        from="/courses"
        to="/dashboard"
      />
      <Route component={NotFound} />
    </Switch>
  );
}

function RedirectWithStatus({ from, to, status }) {
  return (
    <Route
      render={({ staticContext }) => {
        // there is no `staticContext` on the client, so
        // we need to guard against that here
        if (staticContext) staticContext.status = status;
        return <Redirect from={from} to={to} />;
      }}
    />
  );
}

function NotFound() {
  return (
    <Status code={404}>
      <div>
        <h1>Sorry, can’t find that.</h1>
      </div>
    </Status>
  );
}


function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
}
export { serverRoutes }