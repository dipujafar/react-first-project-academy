import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Users";
import Loading from "./components/Loading";
import { fetchUserData } from "./api";

// const usersData = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

function App() {
  const [value, setValue] = useState(0);
  // const [usersData, setUsersData] = useState([]);
  const  usersData  = fetchUserData();

  // const handleIncreaseValue = () => {
  //   setValue(value + 1);
  // };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsersData(data));
  // }, [usersData]);

  // API
  return (
    <>
      {/* <h1 className="text-3xl">{value}</h1> */}
      <Suspense fallback={<Loading />}>
        <Users usersData={usersData}></Users>
      </Suspense>

      {/* <button onClick={handleIncreaseValue} className="btn">
        Default
      </button> */}
    </>
  );
}

export default App;
