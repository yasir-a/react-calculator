import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import Calculator from "../components/Calculator";

describe("Calculator", () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  const getDisplay = () => screen.getByTestId("display");
  const clickButton = (name: string) =>
    fireEvent.click(screen.getByRole("button", { name }));

  test("initial display shows 0", () => {
    expect(getDisplay()).toHaveTextContent("0");
  });

  test("number input updates display", () => {
    clickButton("7");
    clickButton("8");
    expect(getDisplay()).toHaveTextContent("78");
  });

  test("clear button resets calculator", () => {
    clickButton("5");
    clickButton("AC");
    expect(getDisplay()).toHaveTextContent("0");
  });

  test("basic addition", () => {
    clickButton("1");
    clickButton("+");
    clickButton("2");
    clickButton("=");
    expect(getDisplay()).toHaveTextContent("3");
  });

  test("percentage calculation", () => {
    clickButton("5");
    clickButton("%");
    expect(getDisplay()).toHaveTextContent("0.05");
  });

  test("decimal point handling", () => {
    clickButton(".");
    clickButton("5");
    expect(getDisplay()).toHaveTextContent("0.5");
  });

  test("sign toggle", () => {
    clickButton("9");
    clickButton("±");
    expect(getDisplay()).toHaveTextContent("-9");
  });

  test("chained operations", () => {
    clickButton("5");
    clickButton("×");
    clickButton("3");
    clickButton("-");
    clickButton("2");
    clickButton("=");
    expect(getDisplay()).toHaveTextContent("13");
  });

  test("division by zero", () => {
    clickButton("5");
    clickButton("÷");
    clickButton("0");
    clickButton("=");
    expect(getDisplay()).toHaveTextContent("Infinity");
  });

  test("multiple zeros input", () => {
    clickButton("0");
    clickButton("0");
    clickButton(".");
    clickButton("0");
    clickButton("5");
    expect(getDisplay()).toHaveTextContent("0.05");
  });

  test("operator precedence", () => {
    clickButton("3");
    clickButton("+");
    clickButton("5");
    clickButton("×");
    clickButton("2");
    clickButton("=");
    expect(getDisplay()).toHaveTextContent("13");
  });
});
