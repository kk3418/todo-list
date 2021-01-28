import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDqmhdtInSvzOcCbE7tuTmWShT581ccEDE",
  authDomain: "todo-list-f8673.firebaseapp.com",
  projectId: "todo-list-f8673",
  storageBucket: "todo-list-f8673.appspot.com",
  messagingSenderId: "241758813853",
  appId: "1:241758813853:web:be55f67296fe2a3381de74"
};
const app = firebase.initializeApp(firebaseConfig)

export const signIn = (email, password) => app.auth().signInWithEmailAndPassword(email, password)