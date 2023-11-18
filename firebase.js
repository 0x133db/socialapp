// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKicJgU-3B7UMl6cwbUX86Oas4QLYK8xY",
    authDomain: "facebookv2-497f9.firebaseapp.com",
    projectId: "facebookv2-497f9",
    storageBucket: "facebookv2-497f9.appspot.com",
    messagingSenderId: "884826278166",
    appId: "1:884826278166:web:6a4946f7f5befafce22837"
};

// Initialize Firebase
//const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage }