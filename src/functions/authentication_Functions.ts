import firebase from "firebase"
import { googleProvider } from "../firebase/firebase"

const beginSignInProcess = () => {
    return firebase.auth().signInWithPopup(googleProvider);
}

const beginSignOutProcess = () => {
    return firebase.auth().signOut();
}

export { beginSignInProcess, beginSignOutProcess }