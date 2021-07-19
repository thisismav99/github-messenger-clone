import useTitle from "../hooks/useTitle";

const Signup = () => {
    useTitle("MESSENGER CLONE - SIGNUP");

    return (
        <div className="container signup-container">
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
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingFirstname" placeholder="Firstname" />
                                            <label for="floatingFirstname">Firstname</label>
                                        </div> 
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingLastname" placeholder="Lastname" />
                                            <label for="floatingLastname">Lastname</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mt-3">
                                    <input type="email" className="form-control" id="floatingEmail" placeholder="Email" />
                                    <label for="floatingEmail">Email</label>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-xl-6">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label for="floatingPassword">Password</label>
                                        </div> 
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" />
                                            <label for="floatingConfirmPassword">Confirm Password</label>
                                        </div> 
                                    </div>
                                </div>

                                <div className="mt-3 d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">SIGNUP</button>
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

export default Signup;