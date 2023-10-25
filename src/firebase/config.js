// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3eSWWA9F7BRoy8sdAzLXd7K7srlU_uFA",
  authDomain: "test-3883a.firebaseapp.com",
  projectId: "test-3883a",
  storageBucket: "test-3883a.appspot.com",
  messagingSenderId: "17636475664",
  appId: "1:17636475664:web:9d7d4bed6ce17d23f6db95"
};

// Initialize Firebaseh
const app = initializeApp(firebaseConfig);


//* auth referansını alma
export const auth = getAuth(app)

//* sağlayıcının kurulumunu yapma
export const provider = new GoogleAuthProvider();

//* Veritabanın referansını alam
export const db = getFirestore(app);