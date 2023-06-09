import React, { useState } from "react";
import { firebaseConfig } from "../../firebase-config";
import { initializeApp } from "firebase/app";

const initialState = {
  email: "",
  password: ""
}

const app = initializeApp(firebaseConfig);

type userFormTypes = {
  getUserEmailAndPassword: (cred: {email: string, password: string}) => void,
  signUp: () => void,
  signIn: () => void
}

const UserForm = ({getUserEmailAndPassword, signUp, signIn}: userFormTypes) => {
  const [formState, setFormState] = useState(initialState);

  const onChangeHandler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prevState => ({...prevState, [e.target.name]: e.target.value}))
  };
  
  // const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // console.log(formState);
  //   getUserEmailAndPassword(formState);
  //   setFormState(initialState);
  //   signUp();
  //   signIn();
  // };

  const signUpHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    getUserEmailAndPassword(formState);
    setFormState(initialState);
    signUp();
  }

  const signInHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    getUserEmailAndPassword(formState);
    setFormState(initialState);
    signIn();
  }

  return (
    <form className="flex flex-col  gap-y-3 px-4 w-full min-[768px]:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
      <h1 className="text-center font-medium text-base">User Form</h1>
      <div className="flex flex-col items-center gap-y-2 w-full">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Type your email address please"
          id="email"
          name="email"
          className="border border-black truncate p-1 rounded-lg w-full"
          onChange={onChangeHandler}
          value={formState.email}
        />
      </div>
    
      <div className="flex flex-col items-center gap-y-2 ">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="Type your password please"
          id="password"
          name="password"
          className="border border-black truncate p-1 rounded-lg w-full"
          onChange={onChangeHandler}
          value={formState.password}
        />
      </div>
      <div className="flex justify-between">
        <button className="border border-green-500 px-4 py-1 text-center rounded-lg" onClick={signUpHandler}>Sign Up</button>
        <button className="border border-green-500 px-4 py-1 text-center rounded-lg" onClick={signInHandler}>Sign In</button>
      </div>
    </form>
  );
};

export default UserForm;
