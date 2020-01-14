import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'

import routes from "./routes/routes";

const Index = () => {
  return (
    <BrowserRouter>
      {routes[0].routes.map((route, index) => (
          <Route path={route.path} component={route.component} exact={route.exact} key={index}/>
      ))}
    </BrowserRouter>
  );
};

ReactDOM.render(<Index />, document.getElementById("index")); 