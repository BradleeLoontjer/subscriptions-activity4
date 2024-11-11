import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA11dctOx5fqkVn1cRYzth-5didAerMk7E",
    authDomain: "subscriptions-a0971.firebaseapp.com",
    projectId: "subscriptions-a0971",
    storageBucket: "subscriptions-a0971.firebasestorage.app",
    messagingSenderId: "515072573823",
    appId: "1:515072573823:web:3ebfbdae3d1fef80629a4a"
  };

  const db = firebase.initializeApp(firebaseConfig);
  export default db.firestore()