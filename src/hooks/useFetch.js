import { useState, useEffect, useRef } from "react";
import firebase from "../firebase";

const useFetch = (collection, userLogged, to) => {
    const [users, setUsers] = useState(null);
    const [inboxes, setInboxes] = useState(null);
    const [toUser, setToUser] = useState(null);
    const [email, setEmail] = useState(null);
    const subscribe = useRef(false);

    useEffect(() => {
        subscribe.current = true;

        if(collection === "chats"){
            firebase.firestore().collection("users")
            .onSnapshot((querySnapshot) => {
                let users = [];
                
                querySnapshot.forEach((doc) => {
                    if(doc.data().email !== userLogged){
                        users.push({...doc.data(), id: doc.id});
                    }
                });
                
                if(subscribe.current){
                    setUsers(users.length === 0 ? null : users);
                }
            }, (error) => {
                console.log(error);
            });

            firebase.firestore().collection("inboxes")
            .onSnapshot((querySnapshot) => {
                let inboxes = [];

                querySnapshot.forEach((doc) => {
                    if(doc.data().email === userLogged){
                        inboxes.push({...doc.data(), id: doc.id});
                    }
                });

                if(subscribe.current){
                    setInboxes(inboxes.length === 0 ? null : inboxes);
                }
            }, (error) => {
                console.log(error);
            });
        }
        else if(collection === "chat"){
            
            firebase.firestore().collection("users")
            .onSnapshot((querySnapshot) => {
                let user;
                let email;
                querySnapshot.forEach((doc) => {
                    if(doc.id === to){
                        user = doc.data().firstname + " " + doc.data().lastname;
                        email = doc.data().email;
                    }
                });
                
                if(subscribe.current){
                    setToUser(user);
                    setEmail(email);
                }
            }, (error) => {
                console.log(error);
            });

            firebase.firestore().collection("inboxes")
            .orderBy("dateSend", "asc")
            .onSnapshot((querySnapshot) => {
                let inboxes = [];

                querySnapshot.forEach((doc) => {
                    if(doc.data().from === userLogged && doc.data().to === email){
                        inboxes.push({...doc.data(), id: doc.id});
                    }
                    
                    if(doc.data().to === userLogged && doc.data().from === email){
                        inboxes.push({...doc.data(), id: doc.id});
                    }
                });

                if(subscribe.current){
                    setInboxes(inboxes.length === 0 ? null : inboxes);
                }
            });
        }

        return () => subscribe.current = false;
    }, [collection, userLogged, to, email]);

    return { users, inboxes, toUser, email }
}

export default useFetch;