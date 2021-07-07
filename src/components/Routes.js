import { Route, Switch } from "react-router";

import SignIn from "./forms/SignIn";
import SignUp from "./forms/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      {/* <Route exact path="/">
        <Home />
      </Route> */}
    </Switch>
  );
};
export default Routes;
