// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA0xH2PPmTXNUKabtGjoHVRbsmpa4SXtug",
  authDomain: "react-vite-ts-tailwind.firebaseapp.com",
  projectId: "react-vite-ts-tailwind",
  storageBucket: "react-vite-ts-tailwind.appspot.com",
  messagingSenderId: "609002926520",
  appId: "1:609002926520:web:d9fd6d71a7fd8031149f4d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);