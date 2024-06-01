import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyB-d-9UzaFrHSAKPVy3R-Mm_Uh-4Qxc4Bs",
  authDomain: "proyectoweb-d16ff.firebaseapp.com",
  projectId: "proyectoweb-d16ff",
  storageBucket: "proyectoweb-d16ff.appspot.com",
  messagingSenderId: "983215413694",
  appId: "1:983215413694:web:2c1904b144276ec1c281ef",
  measurementId: "G-F700V2JH0F"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
console.log(firebaseConfig);
export const auth = getAuth(app);
