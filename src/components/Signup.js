import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useTitle from "../hooks/useTitle";
import firebase from "../firebase";
import { Redirect } from "react-router-dom";

const Signup = () => {
    useTitle("MESSENGER CLONE - SIGNUP");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [firebaseError, setFirebaseError] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const password = useRef(null);
    password.current = watch("password", "");

    const signUp = (data, event) =>{
        event.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
            firebase.firestore().collection("users")
            .add({
                firstname: data.firstname,
                lastname: data.lastname,
                email: userCredential.user.email
            }).then(() => {
                setRedirect(true);
            }).catch((error) => {
                setFirebaseError(error);
            });
        }).catch((error) => {
            setFirebaseError(error.message);
        });
    }

    return (
        <div className="container signup-container">
            { redirect && <Redirect to="/chats"/> }
            <div className="row">
                <div className="col-xl-4">

                </div>
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit((data, event) => signUp(data, event))}>
                                <div className="text-center mb-3 fs-1">
                                    <i className="bi bi-chat-dots"></i>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingFirstname" placeholder="Firstname" 
                                            {...register("firstname", {required: { value: true, message: "This is a required field" }, 
                                                                       maxLength: { value: 20, message: "Max character is 20"},
                                                                       minLength: { value: 3, message: "Please enter at least 3 characters"}})} />
                                            <label htmlFor="floatingFirstname">Firstname</label>
                                            { errors.firstname && <p className="text-danger">{errors.firstname.message}</p> }
                                        </div> 
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingLastname" placeholder="Lastname" 
                                            {...register("lastname", { required: { value: true, message: "This is a required field" },
                                                                       maxLength: { value: 20, message: "Max character is 20"},
                                                                       minLength: { value: 3, message: "Please enter at least 3 characters"}})}/>
                                            <label htmlFor="floatingLastname">Lastname</label>
                                            { errors.lastname && <p className="text-danger">{errors.lastname.message}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mt-3">
                                    <input type="email" className="form-control" id="floatingEmail" placeholder="Email" 
                                    {...register("email", {required: { value: true, message: "This is a required field" }})}/>
                                    <label htmlFor="floatingEmail">Email</label>
                                    { errors.email && <p className="text-danger">{errors.email.message}</p> }
                                </div>
                                <div className="row mt-3">
                                    <div className="col-xl-6">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                                            {...register("password", { required: { value: true, message: "This is a required field" },
                                                                       maxLength: { value: 12, message: "Max character is 12"},
                                                                       minLength: { value: 8, message: "Please enter at least 8 characters"}})}/>
                                            <label htmlFor="floatingPassword">Password</label>
                                            { errors.password && <p className="text-danger">{ errors.password.message }</p> }
                                        </div> 
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" 
                                            {...register("confirmpassword", { required: { value: true, message: "This is a required field" },
                                                                       validate: value => value === password.current || "Password doesn't match"})}/>
                                            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                                            { errors.confirmpassword && <p className="text-danger">{ errors.confirmpassword.message }</p> }
                                        </div> 
                                    </div>
                                </div>

                                { firebaseError && <p className="text-danger">{firebaseError}</p>}

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