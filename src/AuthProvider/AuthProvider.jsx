import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.init";
const auth = getAuth(app)
export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const emailPassowrdSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //name edit 
    const updateUserInfo = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })

    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch(() => {
                // An error happened.
            });

    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currUser) => {
            if (currUser) {
                setLoading(false)
                return setUser(currUser)
            }
        })
        return () => {
            return unSubscribe()
        }

    }, [])
    const authInfo = {
        googleSignIn,
        emailPassowrdSignIn,
        createUser,
        user,
        logOut,
        loading,
        updateUserInfo
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;