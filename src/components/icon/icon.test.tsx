import React from "react";
import { render } from "@testing-library/react";
import Icon from ".";

describe("Icon component", () => {
  it("Icon render", () => {
    render(<Icon icon="delete" />);
  });
});
