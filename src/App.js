import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Catch from "./pages/Catch";

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route path="/catch">
          <Catch />
        </Route>
        <Route path="/details/:name">
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
