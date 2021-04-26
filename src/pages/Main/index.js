import { Route, Switch } from "react-router";
import { Navbar } from "../../components/Navbar";
import { Home } from "../Home";
import { Profile } from "../Profile";
import { Chat } from "../Chat";

export function Main() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </>
  );
}
