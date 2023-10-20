import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../FireBase/FireBase";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const GoogleSignIn = () => {
        return signInWithPopup(auth,GoogleProvider)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
            console.log( currentUser);
                setUser(currentUser)
        })
        return () => {
            return unSubScribe();
        }
    },[])

    const logOut = () => {
        return signOut(auth)
    }


 

   

    const UserInfo = {
        user,
        GoogleSignIn,
        signIn,
        createUser,
        logOut

    }
    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;