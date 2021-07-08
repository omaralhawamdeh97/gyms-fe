import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
function App() {
  const loadingGyms = useSelector((state) => state.gymsReducer.loading);
  const loadingClasses = useSelector((state) => state.classesReducer.loading);
  const loadingTypes = useSelector((state) => state.typesReducer.loading);
  const loadingUsers = useSelector((state) => state.authReducer.loading);
  return (
    <div className="App">
      <NavBar />
      {loadingClasses || loadingGyms || loadingTypes || loadingUsers ? (
        <h3>Loading...</h3>
      ) : (
        <Routes />
      )}
    </div>
  );
}

export default App;
