import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CardModal } from "../cardModal";

// Mock the Ant Design Modal component
jest.mock("antd", () => ({
  Modal: ({ open, title, onCancel, children }) => (
    <div data-testid="modal" style={{ display: open ? "block" : "none" }}>
      <div data-testid="modal-title">{title}</div>
      <button data-testid="close-button" onClick={onCancel}>
        Close
      </button>
      <div>{children}</div>
    </div>
  ),
}));

const mockStarWarModalContent = {
  name: "Luke Skywalker",
  hair_color: "Blond",
  eye_color: "Blue",
  gender: "Male",
  homeworld: "Tatooine",
  films: ["A New Hope", "The Empire Strikes Back"],
};

describe("CardModal", () => {
  test("renders modal with star details", () => {
    render(
      <CardModal
        starWarModalContent={mockStarWarModalContent}
        handleCloseModal={jest.fn()}
        openModal={true}
      />
    );

    expect(screen.getByTestId("modal")).toBeVisible();
    expect(screen.getByTestId("modal-title")).toHaveTextContent(
      mockStarWarModalContent.name
    );
    expect(
      screen.getByText(`hair color: ${mockStarWarModalContent.hair_color}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`eye color: ${mockStarWarModalContent.eye_color}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`gender: ${mockStarWarModalContent.gender}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`home planet: ${mockStarWarModalContent.homeworld}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `films done by him: ${mockStarWarModalContent.films.join(", ")}`
      )
    ).toBeInTheDocument();
  });

  test("calls handleCloseModal on close button click", () => {
    const handleCloseModal = jest.fn();

    render(
      <CardModal
        starWarModalContent={mockStarWarModalContent}
        handleCloseModal={handleCloseModal}
        openModal={true}
      />
    );

    fireEvent.click(screen.getByTestId("close-button"));
    expect(handleCloseModal).toHaveBeenCalledTimes(1);
  });

  test("modal is not visible when openModal is false", () => {
    render(
      <CardModal
        starWarModalContent={mockStarWarModalContent}
        handleCloseModal={jest.fn()}
        openModal={false}
      />
    );

    expect(screen.getByTestId("modal")).not.toBeVisible();
  });
});
