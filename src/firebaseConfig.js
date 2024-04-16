import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9HxkfSCqczXdpLcXGNh_OholVulVdS6I",
    authDomain: "disneyplus-clone-784a6.firebaseapp.com",
    projectId: "disneyplus-clone-784a6",
    storageBucket: "disneyplus-clone-784a6.appspot.com",
    messagingSenderId: "415362541241",
    appId: "1:415362541241:web:e5cfecd5d4460d781fdd68",
    measurementId: "G-PPKQYZVCDK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;

  