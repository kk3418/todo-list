import firebase from "firebase/app"
import "firebase/auth"

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
}
const app = firebase.initializeApp(firebaseConfig)

export const signIn = (email, password) => app.auth().signInWithEmailAndPassword(email, password)