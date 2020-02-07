import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDogMb4cFVZeq8TO5926Kig1ZHVo_vm11s",
    authDomain: "wolf-clothing-f9904.firebaseapp.com",
    databaseURL: "https://wolf-clothing-f9904.firebaseio.com",
    projectId: "wolf-clothing-f9904",
    storageBucket: "wolf-clothing-f9904.appspot.com",
    messagingSenderId: "537519118692",
    appId: "1:537519118692:web:5524bbbdbd10d8c0108271",
    measurementId: "G-PZ8T7P0GN6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;