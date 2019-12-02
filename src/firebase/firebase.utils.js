import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBI3l9RQy6cCI12SBNn8L2P9gXQScvDlDg',
  authDomain: 'crwn-db-f1e61.firebaseapp.com',
  databaseURL: 'https://crwn-db-f1e61.firebaseio.com',
  projectId: 'crwn-db-f1e61',
  storageBucket: 'crwn-db-f1e61.appspot.com',
  messagingSenderId: '808247362530',
  appId: '1:808247362530:web:205c44210cf34676682fbb',
  measurementId: 'G-LY8X6GCMWW',
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //ferestore.doc('users/bsjkwyoy6omycspwbh2p');
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
