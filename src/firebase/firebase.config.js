// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEmf_a9LhYcIupZ1aKaVi9tJIqcS-Q4P0",
  authDomain: "assignment-ten-client-69195.firebaseapp.com",
  projectId: "assignment-ten-client-69195",
  storageBucket: "assignment-ten-client-69195.appspot.com",
  messagingSenderId: "1094054180798",
  appId: "1:1094054180798:web:7c1e3f82bf3d5a87396bef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 