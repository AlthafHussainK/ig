import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'ig-clone-6ec8d.firebaseapp.com',
  projectId: 'ig-clone-6ec8d',
  storageBucket: 'ig-clone-6ec8d.appspot.com',
  messagingSenderId: process.env.REAT_APP_MSG_SENDER_ID,
  appId: process.env.REAT_APP_FIREBASE_APP_ID
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
