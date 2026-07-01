import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Replace with YOUR firebaseConfig from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBXE0zKNZnI60f4xSCtod4wg6D0xXeYsuY",
  authDomain: "urbanmoves-18f98.firebaseapp.com",
  projectId: "urbanmoves-18f98",
  storageBucket: "urbanmoves-18f98.firebasestorage.app",
  messagingSenderId: "758483595796",
  appId: "1:758483595796:web:1f2cb5d5e9c407156aad01",
  measurementId: "G-6BGP6JT66L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };