const Inbox = ({ inboxes }) => {

    return (
        <div className="container-fluid">
            <p className="fs-4">INBOX <i className="bi bi-inbox-fill"></i></p>
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
                                            <button className="btn btn-light">
                                                <i className="bi bi-eye-fill"></i>
                                            </button>
                                            <button className="btn btn-light ms-2">
                                                <i className="bi bi-trash-fill"></i>
                                            </button>
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