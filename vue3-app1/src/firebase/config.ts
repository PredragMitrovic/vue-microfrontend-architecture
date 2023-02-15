import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRge_pG_irhS2cwdFE03Bskpb_PWruc3g",
  authDomain: "user-blog-vue3-ts.firebaseapp.com",
  projectId: "user-blog-vue3-ts",
  storageBucket: "user-blog-vue3-ts.appspot.com",
  messagingSenderId: "955285740104",
  appId: "1:955285740104:web:30bbcbbfc672b219c5967d"
};

// init firebase

initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()

export { db }
