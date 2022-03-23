import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import {useAuthState } from 'react-firebase-hooks/auth';
import Login from './Login';
import Todo from './Todo'



const auth = getAuth();



function App() {
  const [user] = useAuthState(auth);
  return (
    <>
    HI
    </>
  );
}

export default App;
