
const Inbox = ({ inboxes }) => {
    return (
        <div className="container-fluid">
            <p className="fs-4">INBOX <i className="bi bi-inbox-fill"></i></p>
            { inboxes === null && <p className="fst-italic">NO MESSAGES AVAILABLE, START MESSAGING NOW!</p> }
        </div>
    )
}

export default Inbox;