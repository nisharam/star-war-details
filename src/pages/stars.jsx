import React, { useEffect, useState } from "react";
import { StarsList } from "../components/stars-list";

export const Stars = () => {
  const [starWars, setStarWarsList] = useState([]);

  //first will fetch the people data.

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => {
        setStarWarsList(data?.results);
      });
  }, []);
  return (
    <div>
      <StarsList starWars={starWars} />
    </div>
  );
};
