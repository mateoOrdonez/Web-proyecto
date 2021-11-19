import * as firebase from 'firebase/app';
import {initializeApp} from '@firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyAQpp_hhe8X1gFDEpQK41SDqYZP1SqCNhY",
    authDomain: "proyectofinalweb-2c536.firebaseapp.com",
    projectId: "proyectofinalweb-2c536",
    storageBucket: "proyectofinalweb-2c536.appspot.com",
    messagingSenderId: "874423698598",
    appId: "1:874423698598:web:1340d25e89077d025a6067"
  };

  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export default fb;