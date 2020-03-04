import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from "./components/pages/errors/not_found";

import routes from "./routes/routes";

const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route path={route.path} component={route.component} exact={route.exact} key={index}/>
        ))}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Index />, document.getElementById("index")); 