import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Catch from "./pages/Catch";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      {/* <Navbar /> */}
      <Switch>
        <Route path="/catch">
          <Catch />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
