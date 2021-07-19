import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <>
      <Router>
        <Nav/>

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/">
            <About/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;