// This a service worker file for receiving push notifitications.
// See `Access registration token section` @ https://firebase.google.com/docs/cloud-messaging/js/client#retrieve-the-current-registration-token

// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyD67uX-aCrEkGRjrEfh0AOCOyQIMVaiKSs",
  authDomain: "login-1b1c2.firebaseapp.com",
  projectId: "login-1b1c2",
  storageBucket: "login-1b1c2.appspot.com",
  messagingSenderId: "913260442067",
  appId: "1:913260442067:web:e931fcc536a99f0273ff26"
};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
