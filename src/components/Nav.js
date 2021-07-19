import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar navbar-light navbar-expand-xl bg-light fixed-top">
            <div className="container">
                <div className="navbar-brand">
                    Messenger Clone
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mt-3">
                        <li className="nav-item"> 
                            <Link to="/signup" className="signup-btn">
                                <p className="nav-link">Signup</p>
                            </Link>
                        </li>
                        <li className="nav-item"> 
                            <Link to="/login" className="login-btn">
                                <p className="nav-link">Login</p> 
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;