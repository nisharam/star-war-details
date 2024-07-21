import { Button, Card } from "antd";
import "./styles.css";

export const DetailCard = ({ starWar, handleOpenModal }) => {
  return (
    <Card
      title={starWar.name}
      style={{
        width: 400,
        marginTop: 20,
      }}
    >
      <div>gender: {starWar.gender}</div>
      <div>home planet: {starWar.home_planet}</div>
      <Button
        type="primary"
        onClick={() => handleOpenModal(starWar)}
        className="mar-top-20"
      >
        Details
      </Button>
    </Card>
  );
};
