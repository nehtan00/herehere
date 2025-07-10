import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBNNMEwnF6m8KBXRJasQ_YydxncF0aPgcY",
  authDomain: "lets-talk-d8c40.firebaseapp.com",
  projectId: "lets-talk-d8c40",
  storageBucket: "lets-talk-d8c40.firebasestorage.app",
  messagingSenderId: "427465039282",
  appId: "1:427465039282:web:db5b8defd6a4d68413d8ab",
  measurementId: "G-K9METPEQ6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics }; 