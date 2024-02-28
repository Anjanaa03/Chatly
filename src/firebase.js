// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmTgoKAuXmZO2zNKEZbJIypeswat3Sf7Y",
  authDomain: "chatly-e4a92.firebaseapp.com",
  projectId: "chatly-e4a92",
  storageBucket: "chatly-e4a92.appspot.com",
  messagingSenderId: "878376321613",
  appId: "1:878376321613:web:819df4abf625a79f24d204"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore() ;

