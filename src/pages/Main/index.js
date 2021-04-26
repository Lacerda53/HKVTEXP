import { Route, Switch } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Home } from "../Home";
import { Plans } from "../Plans";
import { Profile } from "../Profile";
import { Chat } from "../Chat";

export function Main() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
<<<<<<< HEAD
        <Route path="/profile" component={Profile} />
        <Route path="/plans" component={Plans} />
=======
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/chat" component={Chat} />
>>>>>>> 480e55a1eadbbb948076d1f7e1a665c49c28eb8d
      </Switch>
    </>
  );
}
