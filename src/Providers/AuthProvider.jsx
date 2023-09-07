import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true)

const googleProvider = new GoogleAuthProvider()

const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

const logOut = () => {
    setLoading(true);
    return signOut(auth)
}

const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photo: photo
    })
}

useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)

        // get and set jwt token
        if(currentUser){
            axios.post('http://localhost:5000/jwt', {email: currentUser.email})
            .then(data => {
                console.log(data.data.token);
                localStorage.setItem('access-token', data.data.token)
                setLoading(false)
            })
        }
        else{
            localStorage.removeItem('access-token')
        }
        
    })
    return () => {
        return unsbscribe();
    }
},[])

const AuthInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn
}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;