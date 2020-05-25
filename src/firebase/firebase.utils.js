import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config ={
    apiKey: "AIzaSyATOV-Ioh2746Dw0KSM_PVMeaqqvX854bs",
    authDomain: "crwn-db-ace3c.firebaseapp.com",
    databaseURL: "https://crwn-db-ace3c.firebaseio.com",
    projectId: "crwn-db-ace3c",
    storageBucket: "crwn-db-ace3c.appspot.com",
    messagingSenderId: "920631324765",
    appId: "1:920631324765:web:cdf22171a974c8fa7e1db4",
    measurementId: "G-7K0E0SCTX3"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


