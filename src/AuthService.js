// src/AuthService.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

// Register
export const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Login
export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const logout = () => {
    return signOut(auth);
};
