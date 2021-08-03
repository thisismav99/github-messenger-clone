import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Chat = ({ userLogged }) => {
    const { id } = useParams();
    const history = useHistory();

    const { toUser } = useFetch("chat", userLogged, id);

    const { register, handleSubmit } = useForm();
    
    const sendMessage = (data, event) => {
        event.preventDefault();
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-1">
                    <button onClick={() => history.push("/chats")} className="btn btn-light">
                        <i className="bi bi-arrow-left-circle-fill fs-5"></i>
                    </button>
                </div>
                <div className="col-xl-11">
                    <p className="fs-4">{toUser} <i className="bi bi-chat-text-fill"></i></p>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-2">

                </div>
                <div className="col-xl-8 fs-4">
                    <div className="conversation-container">
                        <div>
                            <span className="badge rounded-pill bg-secondary">SAMPLE</span>
                        </div>
                        <div className="text-end">
                            <span className="badge rounded-pill bg-primary">SAMPLE 2</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit((data, event) => sendMessage(data, event))}>
                        <div className="form-floating mt-3 fs-6">
                            <textarea className="form-control" id="message-form" placeholder="Send a message"
                            {...register("message", { required: { value: true } })}></textarea>
                            <label htmlFor="message-form">Send a message</label>
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-primary fs-5">SEND <i className="bi bi-telegram"></i></button>
                        </div>
                    </form>
                </div>
                <div className="col-xl-2">

                </div>
            </div>
        </div>
    )
}

export default Chat;