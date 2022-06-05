import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Switch } from "react-router";
import { Link } from "react-router-dom";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import Homepage from "./components/Home.page";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/super-heroes">
            <SuperHeroesPage />
          </Route>
          <Route path="/rq-super-heroes">
            <RQSuperHeroesPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
