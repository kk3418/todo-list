import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}
const app = firebase.initializeApp(firebaseConfig)

export const Auth = app.auth()

export const db = app.firestore().collection("list")

export const addTodoItem = async (owner, item) => await
  db.doc(`${owner}_data`).update({
    todo: firebase.firestore.FieldValue.arrayUnion({
      item: item,
      time: firebase.firestore.Timestamp.fromDate(new Date())
    })
  }).catch(error => console.log(error.message))

export const deleteTodoItem = async (owner, item) => await
  db.doc(`${owner}_data`).update({
    todo: firebase.firestore.FieldValue.arrayRemove({item})
  })

export const signIn = async (email, password) => 
    await app.auth().signInWithEmailAndPassword(email, password)
