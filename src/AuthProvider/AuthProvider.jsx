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

        return signOut(auth)

    };




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currUser) => {
            if (currUser) {
                setLoading(false)

                setUser(currUser)
                fetch("http://localhost:5000/jwt", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ email: currUser.email, name: currUser.displayName })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("token", data.token)
                    })
            } else {
                localStorage.removeItem("token")
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