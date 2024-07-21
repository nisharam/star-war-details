import { Modal } from "antd";

export const CardModal = ({
  starWarModalContent,
  handleCloseModal,
  openModal,
}) => {
  return (
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
  );
};
