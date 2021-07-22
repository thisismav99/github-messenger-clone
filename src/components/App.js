import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Chats from "./Chats";
import useAuth from "../hooks/useAuth";

function App() {
  const { isLogged, userLogged } = useAuth("root");

  return (
    <>
      <Router>
        <Nav isLogged={isLogged} userLogged={userLogged} />

        <Switch>
          <Route exact path="/login">
            { isLogged && <Redirect to="/chats" /> }
            <Login />
          </Route>

          <Route exact path="/signup">
            { isLogged && <Redirect to="/chats" /> }
            <Signup />
          </Route>

          <Route exact path="/">
            { isLogged && <Redirect to="/chats" /> }
            <About/>
          </Route>

          <Route exact path="/chats">
            { isLogged ? <Redirect to="/chats" /> : <Redirect to="/" /> }
            <Chats />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;