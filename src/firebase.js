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

const { serverTimestamp } = firebase.firestore.FieldValue

export const updateDoc = async (uid, item) => await db
    .add({
        uid,
        todo: item,
        createdAt: serverTimestamp(),
    })
    .then(res => console.log('success: ', res))
    .catch(error => console.error(error))

export const  observeChange = (uid) => db
    .where('uid', '==', uid)
    .onSnapshot(querySanpshot => {
        querySanpshot.docChanges().forEach(change => {
            if (change.type === 'added') console.log('added')
            else if (change.type === 'modified') console.log('midified')
            else console.log('else')
        })
    }, (error) => console.log('Error of firestore: ', error))

export const signIn = async (email, password) => 
    await app.auth().signInWithEmailAndPassword(email, password)