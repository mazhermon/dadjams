import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import NewJam from "./pages/NewJam";

export default function Router({ children }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/new" component={NewJam}></Route>
      </Switch>
      {children}
    </BrowserRouter>
  );
}
