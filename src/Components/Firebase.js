import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs91IPSv_Ar0oDDxPieoxHr4HauzwH9xw",
  authDomain: "linkedin-clone-44d6a.firebaseapp.com",
  projectId: "linkedin-clone-44d6a",
  storageBucket: "linkedin-clone-44d6a.appspot.com",
  messagingSenderId: "634051440458",
  appId: "1:634051440458:web:54dd8dfe62ea4c5d2c9bb3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
