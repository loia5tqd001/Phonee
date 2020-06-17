// https://firebase.google.com/docs/web/setup?authuser=0#using-module-bundlers
import * as firebase from 'firebase/app';
import 'firebase/database';

// Is it safe to expose firebase apikey:
// https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
const config = {
  apiKey: 'AIzaSyCU9LwaE48aTtS8R2kJSxOi8v46B0tbGZ0',
  authDomain: 'phonee-32bab.firebaseapp.com',
  databaseURL: 'https://phonee-32bab.firebaseio.com',
  projectId: 'phonee-32bab',
  storageBucket: 'phonee-32bab.appspot.com',
  messagingSenderId: '157081497497',
  appId: '1:157081497497:web:8bd7d28414ccdcf42aed08',
  measurementId: 'G-6BX5RMP4XG',
};

firebase.initializeApp(config);

export const database = firebase.database();
