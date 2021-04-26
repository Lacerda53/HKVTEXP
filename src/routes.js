import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { Main } from "./pages/Main";
import { Interests } from "./pages/Interests";
import { Register } from "./pages/Register";
import { Segment } from "./pages/Segment";
import { Welcome } from "./pages/Welcome";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/segment" component={Segment} />
        <Route exact path="/about" component={About} />
        <Route exact path="/interests" component={Interests} />
        <Route exact path="/home" component={Main} />
        <Route exact path="/profile" component={Main} />
<<<<<<< HEAD
        <Route exact path="/plans" component={Main} />
=======
        <Route exact path="/chat" component={Main} />
>>>>>>> 480e55a1eadbbb948076d1f7e1a665c49c28eb8d
      </Switch>
    </BrowserRouter>
  );
}
