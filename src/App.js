import React, { useState, useEffect } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [data, setData] = useState({});

  const handleClick = async () => {};

  const handleTextChange = (e, v) => {
    setFirstName(e.target.value);
  };

  async function getTask() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
      console.log('result',response);
  }

  useEffect(() => {
    getTask().then();
  }, []);

  useEffect(() => {
    console.log("I am listening", firstName);
  }, [firstName]);

  return (
    <>
      <button onClick={handleClick}>Click me for display</button>
      <input type="text" onChange={(e) => handleTextChange(e, "firstName")} />
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{JSON.stringify(data, null, 4)}</div>
    </>
  );
}

export default App;
