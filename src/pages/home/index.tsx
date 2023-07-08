import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Home = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.auth);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-3">Home Page</h1>
      <button
        onClick={() => dispatch.auth.setName(name === "osman" ? "saltuk" : "osman")}
        className="border border-red-500 p-4 rounded-lg hover:bg-green-400 hover:border-none hover:text-white mx-auto block"
      >
        Change Name
      </button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
