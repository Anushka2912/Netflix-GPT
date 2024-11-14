// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT0SsB4AlVc5ryZkqXLrFZB6ziei8QZDI",
  authDomain: "netflix-gpt-9011f.firebaseapp.com",
  projectId: "netflix-gpt-9011f",
  storageBucket: "netflix-gpt-9011f.firebasestorage.app",
  messagingSenderId: "129448136560",
  appId: "1:129448136560:web:77bf74ce505c49fce249b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();