import React, { createContext, useEffect, useState } from "react";

import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  // create new user email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signIn with  google
  const googleSingIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  // update user name and profile ficture
  const upDatePhotoAndName = (logged, name, photo) => {
    return updateProfile(logged, { displayName: name, photoURL: photo });
  };

  //  user state check fun function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  const authInfo = {
    user,
    loading,
    createUser,
    logOut,
    signIn,
    upDatePhotoAndName,
    googleSingIn,
    setLoading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
