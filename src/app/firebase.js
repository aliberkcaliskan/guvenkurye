import {getAnalytics} from "firebase/analytics";
import {initializeApp} from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCCkd7tVIxjbgiCNhgvummWnVJyywoHJEg",
  authDomain: "guven-kurye.firebaseapp.com",
  projectId: "guven-kurye",
  storageBucket: "guven-kurye.appspot.com",
  messagingSenderId: "472423439478",
  appId: "1:472423439478:web:f09213c4356e8ac8a7d357",
  measurementId: "G-H89WXZQ976",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (typeof window !== "undefined" && !app) {
}

export default app;
