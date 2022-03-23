import React from 'react'
import { signInWithPopup ,getAuth, GoogleAuthProvider  } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from "react-router-dom"; 

const firebaseConfig = {

  apiKey: "AIzaSyA_7cNTyeaQjiYn0pdIhmgoHlKiMRlUXsk",

  authDomain: "todo-app-cf7cb.firebaseapp.com",

  projectId: "todo-app-cf7cb",

  storageBucket: "todo-app-cf7cb.appspot.com",

  messagingSenderId: "485568912880",

  appId: "1:485568912880:web:1878b7d494a3cd164e9135"

};


initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
const auth = getAuth();

export default function Login() {
  const [user] = useAuthState(auth);
  const loginComp = <div class="w-screen h-screen flex justify-center bg-slate-600">
      <div class="w-full h-3/4 md:w-1/2 md:h-1/2 bg-slate-900 mt-20 md:rounded-3xl flex justify-center">
        <button class="bg-slate-600 h-12 md:h-20 mt-20 w-1/2 rounded-2xl md:text-2xl side-button"
                onClick={()=>{signInWithPopup(auth,provider);}}
        >Sign in with Google</button>
      </div>
    </div>

  return (
    <>
    {
      user ? <Navigate to="/todo"/> : loginComp
    }
    </>
  )
}

