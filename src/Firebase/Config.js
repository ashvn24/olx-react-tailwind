// Import individual Firebase services
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

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
export default firebase.initializeApp(firebaseConfig)


