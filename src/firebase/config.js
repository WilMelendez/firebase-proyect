// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCysTzQsm6YWw32anzYcvDFGXicbL-E5Zc",
  authDomain: "mi-proyect-8c45f.firebaseapp.com",
  projectId: "mi-proyect-8c45f",
  storageBucket: "mi-proyect-8c45f.appspot.com",
  messagingSenderId: "127400468852",
  appId: "1:127400468852:web:e58b1d1ef42f2170b5cc21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider
export const google = async () => {
    const userCredential = await signInWithPopup (auth, googleProvider)
    return userCredential
}

