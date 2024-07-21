import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DetailCard } from "../card";

describe("DetailCard Component", () => {
  const mockStarWar = {
    name: "Luke Skywalker",
    gender: "male",
    home_planet: "Tatooine",
  };

  const mockHandleOpenModal = jest.fn();

  test("renders the DetailCard with correct content", () => {
    render(
      <DetailCard starWar={mockStarWar} handleOpenModal={mockHandleOpenModal} />
    );

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText("gender: male")).toBeInTheDocument();
    expect(screen.getByText("home planet: Tatooine")).toBeInTheDocument();
    // expect(
    //   screen.getByRole("button", { name: /details/i })
    // ).toBeInTheDocument();
  });

  test("calls handleOpenModal when the Details button is clicked", () => {
    render(
      <DetailCard starWar={mockStarWar} handleOpenModal={mockHandleOpenModal} />
    );

    fireEvent.click(screen.getByRole("button", { name: /details/i }));
    expect(mockHandleOpenModal).toHaveBeenCalledTimes(1);
    expect(mockHandleOpenModal).toHaveBeenCalledWith(mockStarWar);
  });

  test("applies custom styles", () => {
    render(
      <DetailCard starWar={mockStarWar} handleOpenModal={mockHandleOpenModal} />
    );

    const card = screen.getByText("Luke Skywalker").closest(".ant-card");
    expect(card).toHaveStyle("width: 400px");
    expect(card).toHaveStyle("margin-top: 20px");
  });
});
