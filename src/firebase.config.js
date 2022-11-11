import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAnf_r1c5uuaxCaA-hC6Ch273Ns98UItus",
  authDomain: "multi-mart-ecommerce.firebaseapp.com",
  projectId: "multi-mart-ecommerce",
  storageBucket: "multi-mart-ecommerce.appspot.com",
  messagingSenderId: "406717820065",
  appId: "1:406717820065:web:99bcb45f1410ea49aed4e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
