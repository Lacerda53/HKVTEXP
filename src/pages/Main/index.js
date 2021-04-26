import { Route, Switch } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Home } from "../Home";
import { Plans } from "../Plans";
import { Profile } from "../Profile";

export function Main() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/plans" component={Plans} />
      </Switch>
    </>
  );
}
