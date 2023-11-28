import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./";

describe("Button component", () => {
  it("Button render", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
