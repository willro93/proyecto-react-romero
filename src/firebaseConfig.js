
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO0f9zjcJbAZ3g58nJBpauOwC4caPhDm0",
  authDomain: "maguey-ecommerce.firebaseapp.com",
  projectId: "maguey-ecommerce",
  storageBucket: "maguey-ecommerce.appspot.com",
  messagingSenderId: "104355099677",
  appId: "1:104355099677:web:f86c0082e1616dc01e82f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 