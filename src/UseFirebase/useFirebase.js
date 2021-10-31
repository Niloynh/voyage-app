import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';

// configure 
initializeAuthentication()

const useFirebase = () => {
    // state
    const [user, setUser] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsloading] = useState(true)
    // auth
    const auth = getAuth()
    // authProvider
    const googleProvider = new GoogleAuthProvider()

    // handler
    const signInUsingGoogle = () => {
        setIsloading(true)
        return signInWithPopup(auth, googleProvider)
        
        .catch(error =>{
            setError(error.message)
        })
        .finally(() => setIsloading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsloading(false)
        })
    },[])

    const userSignOut = () =>{
        setIsloading(true)
        signOut(auth)
        .then(result =>{
            setUser({})
        })
        .finally(() => setIsloading(false));
    }
    return {
        user,
        error,
        signInUsingGoogle,
        userSignOut,
        isLoading
        
    }
}   


export default useFirebase;