import { useState } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import firebase from "../firebase";

const Delete = ({userLogged}) => {
    const { id } = useParams();
    const history = useHistory();
    const [redirect, setRedirect] = useState(false);

    const {inboxes} = useFetch("delete", userLogged, id);

    const deleteConvo = () => {
        inboxes.forEach((doc) => {
            firebase.firestore().collection("inboxes")
            .doc(doc.id)
            .delete()
            .then(() =>{
                setRedirect(true);
            })
            .catch((error) => {
                console.log(error);
            });
        });
    }

    return (
        <div className="container-fluid">
            { redirect && <Redirect to="/chats" /> }
            <div className="row">
                <div className="col-xl-1">
                    <button onClick={() => history.push("/chats")} className="btn btn-light">
                        <i className="bi bi-arrow-left-circle-fill fs-5"></i>
                    </button>
                </div>
                <div className="col-xl-11">
                    <p className="fs-4 fw-bold">ARE YOU SURE YOU WANT TO DELETE THIS CONVERSATION?</p>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-2">

                </div>
                <div className="col-xl-8">
                    <div className="mt-5">
                        <div className="d-grid gap-2">
                            <button className="btn btn-danger btn-lg" onClick={() => deleteConvo()}>YES, ABSOLUTELY!</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2">

                </div>
            </div>
        </div>
    )
}

export default Delete;
