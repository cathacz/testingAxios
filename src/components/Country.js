import React from "react";

const Country = ({ result, getCountry }) => {
  console.log(result);
  console.log(getCountry);
  const land = result.map((obj, i) => {
    console.log(obj);
    const { name, flag, capital, region, area, population, borders } = obj;
    return (
      <div className="country" key={i}>
        <h2>{name}</h2>
        <h3>{capital}</h3>
        <img className="flag" src={flag} alt="country flag" />
        <div>
          <b>Region: </b> {region}
        </div>
        <div>
          <b>Area: </b> {new Intl.NumberFormat("de-DE").format(area)} km²
        </div>
        <div>
          <b>Population: </b>{" "}
          {new Intl.NumberFormat("de-DE").format(population)}
        </div>
        <div>
          <b>Borders:</b>
          {borders.map((border, i) => (
            <i key={i} onClick={() => getCountry(border)}>
              &nbsp;&nbsp; {border}
            </i>
          ))}
        </div>
      </div>
    );
  });
  return <React.Fragment>{land}</React.Fragment>;
};
export default Country;
