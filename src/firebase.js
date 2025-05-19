// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBPlhP4j3z2AD8aKapt7ksy3qFOCD0KLjk",
    authDomain: "vue-project-gupta-jewelery.firebaseapp.com",
    databaseURL: "https://vue-project-gupta-jewelery-default-rtdb.firebaseio.com",
    projectId: "vue-project-gupta-jewelery",
    storageBucket: "vue-project-gupta-jewelery.firebasestorage.app",
    messagingSenderId: "678700251165",
    appId: "1:678700251165:web:19ea78724b70c389f96ef4",
    measurementId: "G-S1MM2WZ0VW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
