import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "../App";

describe("App", () => {
  it("it renders Calculator component", () => {
    render(<App />);
    const calulatorComp = screen.getByTestId("calculator");
    expect(calulatorComp).toBeInTheDocument();
  });
});
