import React, { useEffect, useState } from "react";
import { StarsList } from "../components/stars-list";

export const Stars = () => {
  const [starWars, setStarWarsList] = useState([]);
  const [planetNames, setPlanetNames] = useState({});
  const [filmNames, setFilmName] = useState({});

  //first will fetch the people data.
  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => {
        setStarWarsList(data?.results);
      });
  }, []);

  //get the home planet with the respective ids.
  useEffect(() => {
    const getHomePlanetName = async () => {
      const names = {};
      for (let star of starWars) {
        if (star.homeworld) {
          const name = await getPlanetName(star.homeworld);
          names[star.homeworld] = name;
        }
      }
      setPlanetNames(names);
    };

    if (starWars.length > 0) {
      getHomePlanetName();
    }
  }, [starWars]);

  //adds the key home_planet in the array.
  useEffect(() => {
    if (Object.keys(planetNames).length > 0) {
      const updatedStarWars = starWars.map((star) => ({
        ...star,
        home_planet: planetNames[star.homeworld] || "n/a",
      }));
      setStarWarsList(updatedStarWars);
    }
  }, [planetNames]);

  const getPlanetName = async (planetId) => {
    const response = await fetch(planetId);
    const data = await response.json();
    return data.name;
  };

  /**
   *
   * @description added this function to get the film names.
   * now in the modal it shows the url, need to update with the movie name.
   */
  const getFilmName = async (filmId) => {
    const response = await fetch(filmId);
    const data = await response.json();
    return data.title;
  };

  return (
    <div>
      <StarsList starWars={starWars} planetNames={planetNames} />
    </div>
  );
};
