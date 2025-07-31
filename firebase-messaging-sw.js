importScripts('https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.3.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBLZolkFzioGRPyl_ysp5XcYpMbWMKXEn0",
  authDomain: "rubmax.firebaseapp.com",
  projectId: "rubmax",
  storageBucket: "rubmax.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:792152166197:web:d68ec39315762642f6c67c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // optionnel
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
