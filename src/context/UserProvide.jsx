import React, {useEffect,useState} from 'react'
import { createContext } from 'react'
import Proptypes from 'prop-types'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'

export const UserContext= createContext();

const UserProvide = (props) => {
    const[user,setUser]= useState(false)

    const registerUser=(email, password)=>{
        createUserWithEmailAndPassword(auth,email,password)
    }
const loginUser=(email, password)=>{
    signInWithEmailAndPassword(auth,email,password)

}
const signOutUser = ()=>{
    signOut(auth);
}
// mantener el usuarioo en el sitio

 useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth,(user)=>{
        console.log(user);
        if (user){
            const{email, photoURL,displayName,uid}=user;
            setUser({email,photoURL,displayName,uid});

        }else{
            setUser(null)
        }
    })
    return()=> unsuscribe();
 },[]);


  return (
    <UserContext.Provider value={{user, setUser,registerUser,loginUser}}>
        {props.children}
    </UserContext.Provider>

  )
}

//validacion 
UserProvide.Proptypes={
    children: Proptypes.node,isRequiered, 

}

export default UserProvide