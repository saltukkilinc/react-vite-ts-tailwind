import React, { useState } from "react";
import { firebaseConfig } from "../../firebase-config";
import { initializeApp } from "firebase/app";

const initialState = {
  email: "",
  password: ""
}

const app = initializeApp(firebaseConfig);

type userFormTypes = {
  getUserEmailAndPassword: (cred: {email: string, password: string}) => void
}

const UserForm = ({getUserEmailAndPassword}: userFormTypes) => {
  const [formState, setFormState] = useState(initialState);

  const onChangeHandler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }
  
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formState);
    getUserEmailAndPassword(formState);
    setFormState(initialState);
  }

  return (
    <form className="flex flex-col  gap-4" onSubmit={submitHandler}>
      <h1 className="text-center font-medium text-base">User Form</h1>
      <div className="flex justify-around">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Type your email address please"
          id="email"
          name="email"
          className="border border-black truncate"
          onChange={onChangeHandler}
          value={formState.email}
        />
      </div>
      <br />
      <div className="flex justify-around">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="Type your password please"
          id="password"
          name="password"
          className="border border-black truncate"
          onChange={onChangeHandler}
          value={formState.password}
        />
      </div>
      <div className="flex justify-center">
        <button className="border border-green-500 w-32 text-center rounded-lg">Sign Up</button>
      </div>
    </form>
  );
};

export default UserForm;
