import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../redux/store";

const Home = () => {
  const dispatch = useDispatch<Dispatch>();
  const { name } = useSelector((state: RootState) => state.auth);
  // full loading pluging usage
  const { loading, success, error } = useSelector(
		(state: RootState) => state.loading.models.auth
	)
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-3">Home Page</h1>
      <button
        onClick={() => dispatch.auth.getNameAsync(name === "osman" ? "saltuk" : "osman")}
        className="border border-red-500 p-4 rounded-lg hover:bg-green-400 hover:border-none hover:text-white mx-auto block"
      >
        Change Name
      </button>
      {loading 
        ? <p>Loading...</p> 
        : error  
          ? <p>{(error as Error).message}</p>
          : <p>{name}</p>}
    </div>
  );
};

export default Home;
