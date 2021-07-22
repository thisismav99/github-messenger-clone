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
                        <li className="nav-item">
                            {
                                isLogged && <p className="user-container">
                                                <p className="nav-link active">{ user && <span>Hi, { user }</span> }</p>
                                            </p>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                isLogged && <Link onClick={() => logOut()} className="logout-btn">
                                                <p className="nav-link">Logout</p> 
                                            </Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;