import { Route, Switch } from "react-router";
import Home from "./screens/Home/Home";
import SignIn from "./components/forms/SignIn";
import SignUp from "./components/forms/SignUp";
import GymDetail from "./screens/Home/Gyms/GymDetail";
const Routes = () => {
  return (
    <Switch>
      <Route path="/gyms/:gymSlug">
        <GymDetail />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
