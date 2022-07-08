// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD67uX-aCrEkGRjrEfh0AOCOyQIMVaiKSs",
  authDomain: "login-1b1c2.firebaseapp.com",
  projectId: "login-1b1c2",
  storageBucket: "login-1b1c2.appspot.com",
  messagingSenderId: "913260442067",
  appId: "1:913260442067:web:e931fcc536a99f0273ff26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;