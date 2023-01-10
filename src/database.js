import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdutiJYPulRU9hsclHVDDTr4iTan_W2t8",
  authDomain: "mitxpro-3faf7.firebaseapp.com",
  databaseURL: "https://mitxpro-3faf7-default-rtdb.firebaseio.com",
  projectId: "mitxpro-3faf7",
  storageBucket: "mitxpro-3faf7.appspot.com",
  messagingSenderId: "924064856241",
  appId: "1:924064856241:web:e764c773c0b9ac1b484a90",
  measurementId: "G-HN2P7ZJ8FC"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;






