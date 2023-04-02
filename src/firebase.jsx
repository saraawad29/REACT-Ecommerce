// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getFirestore} from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries

// todo : export values in an envirnement file
// todo : remove env file from git tracking

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSHqHXIRsRdOD-fUYR3smoIZzhSIiU7qI",
  authDomain: "fir-projet-e57b6.firebaseapp.com",
  projectId: "fir-projet-e57b6",
  storageBucket: "fir-projet-e57b6.appspot.com",
  messagingSenderId: "548061189351",
  appId: "1:548061189351:web:fa70dda33a28819c963e42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export some services 
const database = getFirestore(app)

export {database};