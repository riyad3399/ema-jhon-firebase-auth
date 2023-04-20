import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


const auth = getAuth(app);

export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          console.log('state change', currentUser);
            setUser(currentUser)
        })
        return () => {
            return unsubscribe;
        }
    }, [])

    
const authInfo = {
    createUser,
    loginUser,
    user,
    logOut,

}

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;