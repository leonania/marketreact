import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn_j__YcFoMkwOc2pbI6hxvkneof_DZD0",
  authDomain: "marketreacte.firebaseapp.com",
  projectId: "marketreacte",
  storageBucket: "marketreacte.appspot.com",
  messagingSenderId: "233077344717",
  appId: "1:233077344717:web:ce5f5190eb87cd66ff1c84"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;