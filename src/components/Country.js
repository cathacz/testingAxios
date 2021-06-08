import React from "react";

const Country = ({ result }) => {
  const land = result.map((obj, i) => {
    const { name, flag, capital } = obj;
    return (
      <div key={i}>
        <h2>{name}</h2>
        <h4>{capital}</h4>
        <img className="flag" src={flag} alt="${name} flag" />
      </div>
    );
  });
  return <React.Fragment>{land}</React.Fragment>;
};
export default Country;
