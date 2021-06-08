import React, { useState, useEffect } from "react";
import axios from "axios";
import "./sass/main.scss";
import Loading from "./components/Loading";
import Country from "./components/Country";
const App = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function handleChange(e) {
    setUserInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let textToURl = encodeURIComponent(userInput);
    let endPoint = `https://restcountries.eu/rest/v2/name/${textToURl}`;

    axios(endPoint)
      .then(({ data }) => setResult(data))
      .catch(console.error(`Nope – you took a wrong turn somewhere`));
  }
  //   State          Component
  if (loading) return <Loading />;
  return (
    <React.Fragment>
      <div className="main">
        <h1>Know your Countries</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={handleChange}
            placeholder="country?"
          />
          <button type="submit">Search</button>
        </form>
        <Country result={result} />
      </div>
    </React.Fragment>
  );
};

export default App;
