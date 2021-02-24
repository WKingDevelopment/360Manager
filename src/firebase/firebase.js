import firebase from 'firebase'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZVVtJfyilYTzucDwthKZnfaLqVgVVxf0",
    authDomain: "project-360manager.firebaseapp.com",
    projectId: "project-360manager",
    storageBucket: "project-360manager.appspot.com",
    messagingSenderId: "317619920532",
    appId: "1:317619920532:web:559e5524cfe5c603d4de81",
    measurementId: "G-FN8LK82X3W"
  };

  firebase.initializeApp(firebaseConfig);

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  let db = firebase.firestore();

  export { db, googleProvider, firebase}
