import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAo2qLTpqwagHExKStKREIUdoK_7R9DcP0',
  authDomain: 'codeid-bootcamp.firebaseapp.com',
  projectId: 'codeid-bootcamp',
  storageBucket: 'codeid-bootcamp.appspot.com',
  messagingSenderId: '435427253975',
  appId: '1:435427253975:web:8aff5ad8e78aa0e5aa5a92',
  measurementId: 'G-W7PGD5D9V1',
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage();
