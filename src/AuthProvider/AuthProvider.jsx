import { createContext, useEffect, useState } from "react"
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";


export const AuthContext = createContext()
export default function AuthProvider({children}) {
 const [user,setUser] = useState(null);
 const [loading,setLoading] = useState(true);

  const creatUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  
  const signInUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }

  useEffect(()=>{
    const onUser = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            onUser()
        }
    },[])
   const signOutUser = ()=>{
    signOut(auth)
    .then(res =>{

    }).catch(err=>{
      console.log(err)
    })
   }
   const provider = new GoogleAuthProvider()
   const signInwithGoogle = ()=>{
   return signInWithPopup(auth,provider)
   }
   const resetPassword = (email)=>{
    return sendPasswordResetEmail(auth,email);
   }
  const userInfo = {
       user,
       loading,
       setLoading,
       creatUser,
       signInUser,
       signOutUser,
       signInwithGoogle,
       resetPassword,
  }
  return (
    <AuthContext.Provider value={userInfo}>
         {children}
    </AuthContext.Provider>
  )
}

