import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBs91IPSv_Ar0oDDxPieoxHr4HauzwH9xw",
  authDomain: "linkedin-clone-44d6a.firebaseapp.com",
  projectId: "linkedin-clone-44d6a",
  storageBucket: "linkedin-clone-44d6a.appspot.com",
  messagingSenderId: "634051440458",
  appId: "1:634051440458:web:54dd8dfe62ea4c5d2c9bb3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

// Storage
export async function upload(file, currentUser) {
  const fileRef = ref(storage, currentUser.uid + ".png");

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, { photoURL });
}

const db = getFirestore();

export default db;
