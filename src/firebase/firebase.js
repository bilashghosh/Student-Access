
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3VTahW0hlZ-EaR2P9aC6wpk8f2Ybjse8",
  authDomain: "academy-of-exam.firebaseapp.com",
  projectId: "academy-of-exam",
  storageBucket: "academy-of-exam.appspot.com",
  messagingSenderId: "714674313240",
  appId: "1:714674313240:web:0dee48e8e5ed6e23830b6d",
  measurementId: "G-VBT6C0NJTG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db=getFirestore(app);
export default app;
;