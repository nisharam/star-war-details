import React, { useState } from "react";
import styles from "./styles.css";
import { DetailCard } from "./card";
import { CardModal } from "./cardModal";

export const StarsList = ({ starWars, getPlanetName, planetName }) => {
  const [openModal, setOpenModal] = useState(false);
  const [starWarModalContent, setStarWarModalContent] = useState("");

  const handleOpenModal = (starWarData) => {
    setOpenModal(true);
    setStarWarModalContent(starWarData);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={"list_container"}>
        {starWars?.length > 0 &&
          starWars.map((starWar, index) => (
            <DetailCard
              starWar={starWar}
              key={index}
              handleOpenModal={handleOpenModal}
              getPlanetName={getPlanetName}
              planetName={planetName}
            />
          ))}
      </div>
      <CardModal
        starWarModalContent={starWarModalContent}
        handleCloseModal={handleCloseModal}
        openModal={openModal}
      />
    </>
  );
};
