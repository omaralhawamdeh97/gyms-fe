import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes />
    </div>
  );
}

export default App;
