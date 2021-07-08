import { Route, Switch } from "react-router";
import Home from "./screens/Home/Home";
import SignIn from "./components/forms/SignIn";
import SignUp from "./components/forms/SignUp";
import GymDetail from "./screens/Home/Gyms/GymDetail";
import ClassForm from "./components/forms/ClassForm";
import ClassDetail from "./screens/Home/Classes/ClassDetail";
import GymForm from "./components/forms/GymForm";
import SessionForm from "./components/forms/SessionForm";
import Coaches from "./components/forms/Coaches";
import SessionDetail from "./screens/Home/sessions/SessionDetail";
const Routes = () => {
  return (
    <Switch>
      <Route path="/gyms/classes/:classSlug/sessions/:sessionSlug">
        <SessionDetail />
      </Route>
      <Route path="/gyms/classes/:classSlug">
        <ClassDetail />
      </Route>
      <Route path="/classes/:classId/session">
        <SessionForm />
      </Route>
      <Route path="/gyms/:gymId/classes">
        <ClassForm />
      </Route>
      <Route path="/gyms/:gymId/coaches">
        <Coaches />
      </Route>
      <Route path="/gyms/new">
        <GymForm />
      </Route>
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
