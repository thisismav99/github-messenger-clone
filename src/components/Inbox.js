import { Link } from "react-router-dom";

const Inbox = ({ inboxes, users }) => {

    return (
        <div className="container-fluid">
            <p className="fs-4">
                <span className="position-relative">
                    INBOX <i className="bi bi-inbox-fill"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary fs-6">
                        {inboxes === null ? 0 : inboxes.length}
                        <span className="visually-hidden">New alerts</span>
                    </span>
                </span>
            </p>

            <div className="inbox-container">
                { inboxes === null && <p className="fst-italic">NO MESSAGES AVAILABLE, START MESSAGING NOW!</p> }
                { 
                    inboxes &&
                    inboxes.map((data) => (
                        <div className="card my-3" key={data.id}>
                            <div className="card-body">
                                <p className="fs-5 fw-bolder">{data.name}</p>
                                <p className="fs-6 fst-italic">{data.message}</p>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            {
                                                users.map((user) => (
                                                    <div key={user.id}>
                                                        {
                                                            user.email === data.from &&
                                                            <div>
                                                                <Link className="btn btn-light" to={`/chat/${user.id}`}>
                                                                    <i className="bi bi-eye-fill"></i>
                                                                </Link>

                                                                <Link className="btn btn-light ms-2" to={`/delete/${user.id}`}>
                                                                    <i className="bi bi-trash-fill"></i>
                                                                </Link>
                                                            </div>
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="col-xl-6">
                                            <p className="text-end fw-bold">{data.dateSend.toDate().toDateString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Inbox;