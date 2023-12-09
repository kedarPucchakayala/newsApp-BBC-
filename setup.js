
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAZaEsQcR2yVaifMTlvL3EHUxXpcIIOv38",
  authDomain: "bbc-clone-d76a6.firebaseapp.com",
  projectId: "bbc-clone-d76a6",
  storageBucket: "bbc-clone-d76a6.appspot.com",
  messagingSenderId: "972460268722",
  appId: "1:972460268722:web:39a3c6cc685a8e0f587dab"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)