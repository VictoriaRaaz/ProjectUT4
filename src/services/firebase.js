// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXfZzRHKpmaf68MkEBXCg79k9aNzWjY28",
  authDomain: "comments-d3719.firebaseapp.com",
  databaseURL: "https://comments-d3719-default-rtdb.firebaseio.com",
  projectId: "comments-d3719",
  storageBucket: "comments-d3719.firebasestorage.app",
  messagingSenderId: "129893615147",
  appId: "1:129893615147:web:eea3c793d1e0e032f5cc6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;