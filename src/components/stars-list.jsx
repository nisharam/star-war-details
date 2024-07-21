import { Button, Card, Modal } from "antd";
import React, { useState } from "react";
import styles from "./styles.css";

export const StarsList = ({ starWars }) => {
  console.log("name is", starWars);

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
            <Card
              key={index}
              title={starWar.name}
              style={{
                width: 400,
                marginTop: 20,
              }}
            >
              <div>gender: {starWar.gender}</div>
              <div>home planet: {starWar.homeworld}</div>
              <Button type="primary" onClick={() => handleOpenModal(starWar)}>
                Details
              </Button>
            </Card>
          ))}
      </div>
      <Modal
        open={openModal}
        title={starWarModalContent?.name}
        onCancel={handleCloseModal}
        footer={null}
      >
        <div>
          <p>
            <b>hair color:</b> {starWarModalContent?.hair_color}{" "}
          </p>
          <p>
            <b>eye color:</b>
            {starWarModalContent?.eye_color}{" "}
          </p>
          <p>
            <b>gender:</b> {starWarModalContent?.gender}{" "}
          </p>
          <p>
            <b>home planet: </b>
            {starWarModalContent?.homeworld}
          </p>
          <p>
            <b>films done by him: </b>
            {starWarModalContent?.films}{" "}
          </p>
        </div>
      </Modal>
    </>
  );
};
