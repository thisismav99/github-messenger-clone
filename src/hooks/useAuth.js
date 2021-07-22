import { useState, useEffect, useRef } from "react";
import firebase from "../firebase";

const useAuth = (component) => {
    const [isLogged, setIsLogged] = useState(false);
    const [userLogged, setUserLogged] = useState(null);
    const subscribe = useRef(false);

    useEffect(() => {
        subscribe.current = true;

        firebase.auth().onAuthStateChanged(
            (user) => {
                if(user){
                    if(subscribe.current){
                        setIsLogged(true);
                        setUserLogged(user.email);
                    }
                }
                else{
                    if(subscribe.current){
                        setIsLogged(false);
                    }
                }
            }
        );

        return () => subscribe.current = false;
    }, [component]);

    return { isLogged, userLogged }
}

export default useAuth;