import { useState, useEffect, useRef } from "react";
import firebase from "../firebase";

const useFetch = (collection, userLogged) => {
    const [users, setUsers] = useState(null);
    const subscribe = useRef(false);

    useEffect(() => {
        subscribe.current = true;

        firebase.firestore().collection(collection)
        .get()
        .then((querySnapshot) => {
            let users = [];

            querySnapshot.forEach((doc) => {
                if(doc.data().email !== userLogged){
                    users.push({...doc.data(), id: doc.id});
                }
            });
            
            if(subscribe.current){
                setUsers(users);
            }
        })
        .catch((error) =>{
            console.log(error);
        });
        
        return () => subscribe.current = false;
    }, [collection, userLogged]);

    return { users }
}

export default useFetch;