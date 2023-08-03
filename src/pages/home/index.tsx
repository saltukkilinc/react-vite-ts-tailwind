import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../redux/store";

const postDataToFirebase = async () => {
  const res = await fetch(
    "https://react-vite-ts-tailwind-default-rtdb.firebaseio.com/person.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "saltuk",
        surname: "kılınç",
        age: 30,
      }),
    }
  );
  const data = await res.json();
  console.log(data, "post data");
};

const getDataToFirebase = async () => {
  const res = await fetch(
    "https://react-vite-ts-tailwind-default-rtdb.firebaseio.com/person.json"
  );
  const data = await res.json();
  // console.log(data, "fetched data")
  const cData = Object.values(data);

  let result;

  result = cData;

  console.log(result, "result");
};

// postDataToFirebase();
getDataToFirebase();

const Home = () => {
  const dispatch = useDispatch<Dispatch>();
  const { name } = useSelector((state: RootState) => state.auth);
  // full loading pluging usage
  const { loading, success, error } = useSelector(
    (state: RootState) => state.loading.models.auth
  );
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center my-3">Home Page</h1>
      <button
        onClick={() =>
          dispatch.auth.getNameAsync(name === "osman" ? "saltuk" : "osman")
        }
        className="border border-red-500 p-4 rounded-lg hover:bg-green-400 hover:border-none hover:text-white mx-auto block"
      >
        Change Name
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{(error as Error).message}</p>
      ) : (
        <p>{name}</p>
      )}
    </div>
  );
};

export default Home;
