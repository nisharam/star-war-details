import React, { useCallback, useEffect, useState } from "react";
import { StarsList } from "../components/stars-list";

export const Stars = () => {
  const [starWars, setStarWarsList] = useState([]);
  const [planetName, setPlanetName] = useState("");

  //first will fetch the people data.

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => {
        setStarWarsList(data?.results);
      });
  }, []);

  const getPlanetName = (planetId) => {
    fetch(planetId)
      .then((res) => res.json())
      .then((data) => {
        console.log("data is", data);
        setPlanetName(data.name);
      });
  };

  return (
    <div>
      <StarsList
        starWars={starWars}
        getPlanetName={getPlanetName}
        planetName={planetName}
      />
    </div>
  );
};
