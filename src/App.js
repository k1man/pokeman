import { Switch, Route } from "react-router-dom";
import { css } from "@emotion/css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Catch from "./pages/PokeDex";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className={css`
        height: 100%;
      `}
    >
      <Switch>
        <Route path="/pokedex">
          <Catch />
        </Route>
        <Route path="/details/:name">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
