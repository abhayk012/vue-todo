import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDOqJGNyMvyllpwLR16UNVqUlk6HOeHvoM",
    authDomain: "to-dolist123.firebaseapp.com",
    projectId: "to-dolist123",
    storageBucket: "to-dolist123.appspot.com",
    messagingSenderId: "581360409571",
    appId: "1:581360409571:web:0a69259312e6aad53c9ed6"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

export { db };