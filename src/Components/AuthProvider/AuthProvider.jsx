import { createContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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

 

   

    const UserInfo = {
        user,
        GoogleSignIn,
        signIn,

    }
    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;