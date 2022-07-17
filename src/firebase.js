// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import firebase from "./firebase";
import { getMessaging, getToken, onMessage} from "firebase/messaging";
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

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: `BGLbG6fHacz0vKj4TZByAczdBIgALfoCMyCGcblobl2vz8og9aLkJ3CAnKOnh-id0Q6i_R88O6o3K2iFoflnEl0` })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
