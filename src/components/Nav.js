import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import firebase from "../firebase";

const Nav = ({isLogged, userLogged}) => {
    const [user, setUser] = useState(null);
    const [redirect, setRedirect] = useState(false);

    if(isLogged){
        firebase.firestore().collection("users")
        .where("email", "==", userLogged)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setUser(doc.data().firstname + " " + doc.data().lastname);
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const logOut = () => {
        firebase.auth().signOut()
        .then(() => {
            setRedirect(true);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="navbar navbar-light navbar-expand-xl bg-light fixed-top">
            { redirect && <Redirect to="/" /> }
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
                            { 
                                isLogged === false && <Link to="/signup" className="signup-btn">
                                                        <p className="nav-link">Signup</p>
                                                      </Link>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                isLogged === false && <Link to="/login" className="login-btn">
                                                        <p className="nav-link">Login</p> 
                                                      </Link>
                            }
                        </li>
                        <li className="nav-item dropdown">
                            {
                                isLogged && <p>
                                                <a href="/#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                { user && <span><i className="bi bi-person-circle"></i> { user }</span> }
                                                </a>
                                                <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink">
                                                    <li><a href="/#" className="dropdown-item" onClick={() => logOut()}>Logout <i className="bi bi-box-arrow-right"></i></a></li>
                                                </ul>
                                            </p>
                                            
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;