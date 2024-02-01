// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCkd7tVIxjbgiCNhgvummWnVJyywoHJEg",
  authDomain: "guven-kurye.firebaseapp.com",
  projectId: "guven-kurye",
  storageBucket: "guven-kurye.appspot.com",
  messagingSenderId: "472423439478",
  appId: "1:472423439478:web:f09213c4356e8ac8a7d357",
  measurementId: "G-H89WXZQ976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);