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

  const getCountry = (status, countryName) => {
    let textToUrl = encodeURIComponent(countryName);
    let endPoint = `https://restcountries.eu/rest/v2/${status}/${textToUrl}`;

    // fetch(endPoint)
    // .then((res)=> res.json())
    // .then((data)=>setResults(data))

    axios(endPoint)
      .then(({ data }) => setResult(data))
      .catch((err) => console.log(`Your had an ${err}`));
  };
  function handleChange(e) {
    setUserInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    getCountry("name", userInput);
    setUserInput("");
  }
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
        <Country result={result} getCountry={getCountry} />
      </div>
    </React.Fragment>
  );
};
export default App;
