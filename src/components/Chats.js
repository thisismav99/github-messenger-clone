import useTitle from "../hooks/useTitle"
import Users from "./Users";

const Chats = ({userLogged}) => {
    useTitle("MESSENGER CLONE - CHAT NOW!");

    return (
        <div className="container chats-container">
            <div className="row">
                <div className="col-xl-2 border border-start-0 border-top-0 border-bottom-0">
                    <Users userLogged={userLogged} />
                </div>
                <div className="col-xl-10">
                    {/* CHAT CONTAINER */}
                    <p className="fs-4">INBOX <i className="bi bi-inbox-fill"></i></p>
                </div>
            </div>
        </div>
    )
}

export default Chats;