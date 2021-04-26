import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCUttjFgpEHgE4tmAbKkqqxemCd0Hpa1mc",
    authDomain: "clone-d6b14.firebaseapp.com",
    projectId: "clone-d6b14",
    storageBucket: "clone-d6b14.appspot.com",
    messagingSenderId: "1014881781854",
    appId: "1:1014881781854:web:8cbef7977a3cba896a8ccf",
    measurementId: "G-T919ZHX4Y1"
});

const auth = firebase.auth();

export {auth};