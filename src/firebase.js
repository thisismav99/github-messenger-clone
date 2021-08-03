import firebase from "firebase";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBBPoQQC5gbWNtLmlqdNxWuKRIur7DVy_M",
    authDomain: "messenger-clone-29c83.firebaseapp.com",
    projectId: "messenger-clone-29c83",
    storageBucket: "messenger-clone-29c83.appspot.com",
    messagingSenderId: "961193288069",
    appId: "1:961193288069:web:9a71777e6cbf957e1524ec"
});

export const serverTime = firebase.firestore.FieldValue.serverTimestamp;
export default app;