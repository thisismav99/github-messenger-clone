import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useTitle from "../hooks/useTitle";
import Inbox from "./Inbox";
import Users from "./Users";
import Chat from "./Chat";

const Chats = ({userLogged}) => {
    useTitle("MESSENGER CLONE - CHAT NOW!");
    const { users, inboxes } = useFetch("chats", userLogged, null);

    return (
        <Router>
            <div className="container chats-container">
                <div className="row">
                    <div className="col-xl-2 border border-start-0 border-top-0 border-bottom-0">
                        <Users users={users} />
                    </div>
                    <div className="col-xl-10">
                        <Switch>
                            <Route path="/chats">
                                <Inbox inboxes={inboxes} />
                            </Route>
                            <Route path="/chat/:id">
                                <Chat userLogged={userLogged} />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Chats;