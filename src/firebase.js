// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlkrl85isKt2FF7WIeA8TTBPp2mqJD6AM",
  authDomain: "realtor-clone-react-38e95.firebaseapp.com",
  projectId: "realtor-clone-react-38e95",
  storageBucket: "realtor-clone-react-38e95.appspot.com",
  messagingSenderId: "97075910868",
  appId: "1:97075910868:web:4da351c11ec2fa01008341"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db= getFirestore();