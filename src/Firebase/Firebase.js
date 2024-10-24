import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore import
import { getStorage } from "firebase/storage"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjZypUvSHb1_O6z9m_79q9b_NIIuaFmBc",
  authDomain: "assignment2-web-page-design.firebaseapp.com",
  databaseURL: "https://assignment2-web-page-design-default-rtdb.firebaseio.com",
  projectId: "assignment2-web-page-design",
  storageBucket: "assignment2-web-page-design.appspot.com",
  messagingSenderId: "1034368345058",
  appId: "1:1034368345058:web:cc7a86c4f6577881464fbb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Firestore database setup
const db = getFirestore(app);

// Firebase storage setup
const storage = getStorage(app);
export { auth };