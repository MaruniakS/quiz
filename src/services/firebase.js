import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'company-day-quiz.firebaseapp.com',
  projectId: 'company-day-quiz',
  storageBucket: 'company-day-quiz.appspot.com',
  messagingSenderId: '319850738031',
  appId: '1:319850738031:web:b9eca3ce564a09fb72389a',
  measurementId: 'G-TFJTHVDG4T',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
