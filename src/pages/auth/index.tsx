import React, { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../firebase-config";
import UserForm from "../../components/form/userForm";
import { initializeApp } from "firebase/app";

type credType = {
  email: string;
  password: string;
};

const initialState = {
  email: "",
  password: "",
};

const app = initializeApp(firebaseConfig);

const Auth = () => {
  const [cred, setCred] = useState(initialState);

  const getUserEmailAndPassword = (cred: credType) => {
    console.log(cred);
    setCred((prevState) => ({
      ...prevState,
      email: cred.email,
      password: cred.password,
    }));
  };

  // useEffect(() => {
  //   const auth = getAuth();

  //   createUserWithEmailAndPassword(auth, cred.email, cred.password)
  //     .then((user) => console.log(user))
  //     .catch((error) => console.log(error));
  // }, []);

  const signUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, cred.email, cred.password)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  };

  const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, cred.email, cred.password)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  }

  return (
    <main className="mt-8 flex flex-col gap-4">
      <h1 className="text-center font-semibold text-lg">This is Auth Page</h1>
      <UserForm getUserEmailAndPassword={getUserEmailAndPassword} signUp={signUp} signIn={signIn}/>
    </main>
  );
};

export default Auth;
