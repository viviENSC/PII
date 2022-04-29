import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDZI7VbuRn8CV7CFfqgMKDc4PBqm0jlp4k",
  authDomain: "pii-qui-es-ce.firebaseapp.com",
  projectId: "pii-qui-es-ce",
  storageBucket: "pii-qui-es-ce.appspot.com",
  messagingSenderId: "1024173554036",
  appId: "1:1024173554036:web:10800b4dc5f59f2bd41421",
};

const app= initializeApp(firebaseConfig);
const auth = getAuth();

export {auth};
