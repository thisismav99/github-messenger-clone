import { useState } from "react";
import { useForm } from "react-hook-form";
import useTitle from "../hooks/useTitle";
import firebase from "../firebase";
import { Redirect } from "react-router";

const Login = () => {
    useTitle("MESSENGER CLONE - LOGIN");

    const { register, handleSubmit, formState:{ errors } } = useForm();
    const [firebaseError, setFirebaseError] = useState(null);
    const [redirect, setRedirect] = useState(false);

    const login = (data, event) => {
        event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(() => {
            setRedirect(true);
        })
        .catch((error) => {
            setFirebaseError(error.message);
        });
    }

    return (
        <div className="container login-container">
            { redirect && <Redirect to="/chats" /> }
            <div className="row">
                <div className="col-xl-4">

                </div>
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit((data, event) => login(data, event))}>
                                <div className="text-center mb-3 fs-1">
                                    <i class="bi bi-chat-dots"></i>
                                </div>
                                <div className="form-floating">
                                    <input type="email" id="floatingEmail" className="form-control" placeholder="Email" 
                                    {...register("email", { required: { value: true, message: "This is a required field" }})}/>
                                    <label htmlFor="floatingEmail">Email</label>
                                    { errors.email && <p className="text-danger">{ errors.email.message }</p> }
                                </div>
                                <div className="form-floating mt-3">
                                    <input type="password" id="floatingPassword" className="form-control" placeholder="Password" 
                                    {...register("password", { required: { value: true, message: "This is a required field"},
                                                               maxLength: { value: 12, message: "Max character is 12"},
                                                               minLength: { value: 8, message: "Please enter at least 8 characters"} })}/>
                                    <label htmlFor="floatingPassword">Password</label>
                                    { errors.password && <p className="text-danger">{ errors.password.message }</p> }
                                </div>
                                
                                { firebaseError && <p className="text-danger">{ firebaseError }</p> }

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