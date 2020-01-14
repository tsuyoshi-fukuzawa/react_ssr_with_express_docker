// SSR用HTMLファイル
import React from 'react';
import { renderRoutes } from 'react-router-config';

const SsrHtml = props => {
  return (
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <div id="index">{renderRoutes(props.route.routes)}</div>
        <script src="/main.js" />
      </body>
    </html>
  );
};

export default SsrHtml;