// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV6Zphje715nlDMZnc0qxs2g7YOOrVx6M",
  authDomain: "addrecipes-43083.firebaseapp.com",
  databaseURL: "https://addrecipes-43083-default-rtdb.firebaseio.com/",
  projectId: "addrecipes-43083",
  storageBucket: "addrecipes-43083.firebasestorage.app",
  messagingSenderId: "779707449362",
  appId: "1:779707449362:web:3a9709b019f1efffa998cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;