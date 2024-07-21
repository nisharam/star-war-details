import { Button, Card } from "antd";
import { useEffect } from "react";

export const DetailCard = ({
  starWar,
  handleOpenModal,
  getPlanetName,
  planetName,
}) => {
  useEffect(() => {
    getPlanetName(starWar.homeworld);
  }, []);

  return (
    <Card
      title={starWar.name}
      style={{
        width: 400,
        marginTop: 20,
      }}
    >
      <div>gender: {starWar.gender}</div>
      <div>home planet: {planetName}</div>
      <Button type="primary" onClick={() => handleOpenModal(starWar)}>
        Details
      </Button>
    </Card>
  );
};
