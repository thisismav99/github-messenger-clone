import useTitle from "../hooks/useTitle";

const Login = () => {
    useTitle("MESSENGER CLONE - LOGIN");

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-xl-4">

                </div>
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="text-center mb-3 fs-1">
                                    <i class="bi bi-chat-dots"></i>
                                </div>
                                <div className="form-floating">
                                    <input type="email" id="floatingEmail" className="form-control" placeholder="Email" />
                                    <label for="floatingEmail">Email</label>
                                </div>
                                <div className="form-floating mt-3">
                                    <input type="password" id="floatingPassword" className="form-control" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div className="mt-3 d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">LOGIN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">

                </div>
            </div>
        </div>
    )
}

export default Login;