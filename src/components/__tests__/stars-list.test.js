import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { StarsList } from "../stars-list";

// Mock the DetailCard and CardModal components
jest.mock("../card", () => ({
  DetailCard: ({ starWar, handleOpenModal }) => (
    <div data-testid="detail-card" onClick={() => handleOpenModal(starWar)}>
      {starWar.name}
    </div>
  ),
}));

jest.mock("../CardModal", () => ({
  CardModal: ({ starWarModalContent, handleCloseModal, openModal }) => (
    <div
      data-testid="card-modal"
      style={{ display: openModal ? "block" : "none" }}
    >
      <button onClick={handleCloseModal}>Close</button>
      {starWarModalContent.name}
    </div>
  ),
}));

const mockStarWars = [
  { id: 1, name: "Luke Skywalker", planetId: 1 },
  { id: 2, name: "Leia Organa", planetId: 2 },
];

const mockPlanetNames = {
  1: "Tatooine",
  2: "Alderaan",
};

describe("StarsList", () => {
  test("renders the list of stars with planet names", () => {
    render(<StarsList starWars={mockStarWars} planetNames={mockPlanetNames} />);

    mockStarWars.forEach((star) => {
      expect(screen.getByText(star.name)).toBeInTheDocument();
    });
  });

  test("opens and closes the modal with star details", () => {
    render(<StarsList starWars={mockStarWars} planetNames={mockPlanetNames} />);

    const starCard = screen.getByText(mockStarWars[0].name);
    fireEvent.click(starCard);

    const modal = screen.getByTestId("card-modal");
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent(mockStarWars[0].name);

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    expect(modal).not.toBeVisible();
  });
});
