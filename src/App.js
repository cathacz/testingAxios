import React, { useState, useEffect } from "react";
import axios from "axios";
import "./sass/main.scss";
// import Loading from "./components/Loading";
import Country from "./components/Country";
const App = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  const getCountry = (code) => {
    // let textToUrl = encodeURIComponent(countryName);
    let endPoint = `https://restcountries.eu/rest/v2/name/${code}/`; //this is the correct line to get the country by code but it will give me the error that in Country.js "result.map" in line 6 is NOT a freaking function, BUT if I set the url part to .../name/${code} I get the seyshells next to austria...
    console.log(code.toLowerCase());

    // fetch(endPoint)
    // .then((res)=> res.json())
    // .then((data)=>setResults(data))

    axios(endPoint)
      .then(({ data }) => setResult(data))
      .catch(console.error(`Nope – you took a wrong turn somewhere ${code}`));
  };
  function handleChange(e) {
    setUserInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let textToURl = encodeURIComponent(userInput);
    let endPoint = `https://restcountries.eu/rest/v2/name/${textToURl}`;

    // old school fetch: (much more then axios)
    // fetch(endPoint).then((res)=>res.json()).then((data)=>setResult(data));

    axios(endPoint)
      .then(({ data }) => setResult(data))
      .catch(console.error(`Nope – you took a wrong turn somewhere`));
  }
  // if (loading) return <Loading />;

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
