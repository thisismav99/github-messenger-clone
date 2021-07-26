import useFetch from "../hooks/useFetch";

const Users = ({ userLogged }) => {
    const { users } = useFetch("users", userLogged);

    return (
        <div className="container-fluid">
            <p className="fs-4">USERS <i className="bi bi-people-fill"></i></p>

            { users === null && <p className="text-danger text-center">NO USERS AVAILABLE</p> }
            { users && users.map((data) => (
                            <div className="d-grid gap-2" key={data.id}>
                                <button className="btn btn-info mt-2">
                                    {data.firstname + " " + data.lastname}
                                </button>
                            </div>
                        ))
            }
        </div>
    )
}

export default Users;