import { useState } from "react";

import "../styles/calculator.css";

const OPERATORS = ["+", "-", "×", "÷"];
const MAX_DISPLAY_LENGTH = 6;

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState<string[]>([]);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (display.length >= MAX_DISPLAY_LENGTH) return;
    if (newNumber) {
      if (num === ".") {
        setDisplay("0.");
      } else {
        setDisplay(num);
      }
      setNewNumber(false);
    } else {
      if (num === ".") {
        if (display.includes(".")) return;
        setDisplay(display + num);
      } else if (display === "0") {
        setDisplay(num);
      } else {
        setDisplay(display + num);
      }
    }
  };

  const handleOperator = (op: string) => {
    const currentValue = display;
    const newExpression = [...expression];

    // Ensure previous operand is captured
    if (
      newExpression.length === 0 ||
      OPERATORS.includes(newExpression[newExpression.length - 1])
    ) {
      newExpression.push(currentValue);
    }

    // Replace last operator if present
    if (
      newExpression.length > 0 &&
      OPERATORS.includes(newExpression[newExpression.length - 1])
    ) {
      newExpression[newExpression.length - 1] = op;
    } else {
      newExpression.push(op);
    }

    setExpression(newExpression);
    setNewNumber(true);
  };

  const evaluateExpression = (tokens: string[]): number => {
    const values: number[] = [];
    const ops: string[] = [];

    tokens.forEach((token) => {
      if (!isNaN(parseFloat(token))) {
        values.push(parseFloat(token));
      } else {
        while (
          ops.length > 0 &&
          getPrecedence(ops[ops.length - 1]) >= getPrecedence(token)
        ) {
          applyOperation(values, ops);
        }
        ops.push(token);
      }
    });

    while (ops.length > 0) {
      applyOperation(values, ops);
    }

    return values[0];
  };

  const getPrecedence = (op: string): number =>
    op === "×" || op === "÷" ? 2 : 1;

  const applyOperation = (values: number[], ops: string[]) => {
    const b = values.pop()!;
    const a = values.pop()!;
    const op = ops.pop()!;

    switch (op) {
      case "+":
        values.push(a + b);
        break;
      case "-":
        values.push(a - b);
        break;
      case "×":
        values.push(a * b);
        break;
      case "÷":
        values.push(a / b);
        break;
    }
  };

  const calculate = () => {
    const finalExpression = [...expression, display];
    try {
      const result = evaluateExpression(finalExpression);
      setDisplay(result.toString());
    } catch {
      setDisplay("Error");
    }
    setExpression([]);
    setNewNumber(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setExpression([]);
    setNewNumber(true);
  };

  const handlePercentage = () => {
    const value = parseFloat(display);
    setDisplay((value / 100).toString());
  };

  const handlePlusMinus = () => {
    const value = parseFloat(display);
    setDisplay((value * -1).toString());
  };

  return (
    <div data-testid="calculator" className="calculator">
      <div className="display" data-testid="display">
        {display}
      </div>
      <div className="buttons">
        <button role="button" className="function" onClick={handleClear}>
          AC
        </button>
        <button role="button" className="function" onClick={handlePlusMinus}>
          ±
        </button>
        <button role="button" className="function" onClick={handlePercentage}>
          %
        </button>
        <button
          role="button"
          className="operator"
          onClick={() => handleOperator("÷")}
        >
          ÷
        </button>

        <button
          role="button"
          className="number"
          onClick={() => handleNumber("7")}
        >
          7
        </button>
        <button
          role="button"
          className="number"
          onClick={() => handleNumber("8")}
        >
          8
        </button>
        <button
          role="button"
          className="number"
          onClick={() => handleNumber("9")}
        >
          9
        </button>
        <button
          role="button"
          className="operator"
          onClick={() => handleOperator("×")}
        >
          ×
        </button>

        <button
          role="button"
          className="number"
          onClick={() => handleNumber("4")}
        >
          4
        </button>
        <button
          role="button"
          className="number"
          onClick={() => handleNumber("5")}
        >
          5
        </button>
        <button
          role="button"
          className="number"
          onClick={() => handleNumber("6")}
        >
          6
        </button>
        <button
          role="button"
          className="operator"
          onClick={() => handleOperator("-")}
        >
          -
        </button>

        <button
          role="button"
          className="number"
          onClick={() => handleNumber("1")}
        >
          1
        </button>
        <button
          role="button"
          className="number"
          onClick={() => handleNumber("2")}
        >
          2
        </button>
        <button
          role="button"
          className="number"
          onClick={() => handleNumber("3")}
        >
          3
        </button>
        <button
          role="button"
          className="operator"
          onClick={() => handleOperator("+")}
        >
          +
        </button>

        <button
          role="button"
          className="number zero"
          onClick={() => handleNumber("0")}
        >
          0
        </button>
        <button
          role="button"
          className="number"
          onClick={() => handleNumber(".")}
        >
          .
        </button>
        <button role="button" className="operator" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}
