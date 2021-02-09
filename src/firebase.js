import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}
const app = firebase.initializeApp(firebaseConfig)

export const Auth = app.auth()

export const db = app.firestore().collection("list")

const { serverTimestamp } = firebase.firestore.FieldValue

export const fetchQuery = (uid) => uid && db.where('uid', '==', uid)

export const createDoc = (uid, item) => db
    .add({
        uid,
        todo: item,
        complete: false,
        createdAt: serverTimestamp(),
    })
    .then(res => console.log('success: ', res))
    .catch(error => console.error(error))

export const updateDoc = (docID, complete) => db.doc(docID)
    .update({ complete })

export const removeDoc = (docID) => db.doc(docID).delete()
    .then(() => console.log('Item has been deleted'))
    .catch(error => console.log(error))