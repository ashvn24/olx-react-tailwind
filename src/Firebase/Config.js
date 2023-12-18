// Import individual Firebase services
import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: 'AIzaSyAOCV-fHHPVQL80L176xzlOEVjAPOM9NoY',
  authDomain: 'fir-cd473.firebaseapp.com',
  projectId: 'fir-cd473',
  storageBucket: 'fir-cd473.appspot.com',
  messagingSenderId: '77239028349',
  appId: '1:77239028349:web:bb189ea1c5751717a1ff14',
  measurementId: 'G-Q2SKV8ZCTP'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);




