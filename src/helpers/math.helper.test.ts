import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "./math.helper";

describe("add", () => {
  test("should add two numbers correctly", () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(a + b);
  });
});

describe("subtract", () => {
  test("should subtract two numbers correctly", () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const result = subtract(a, b);

    // Assert
    expect(result).toBe(a - b);
  });

  test("should subtract two numbers correctly", () => {
    // Arrange
    const a = 2;
    const b = 0;

    // Act
    const result = subtract(a, b);

    // Assert
    expect(result).toBe(a);
  });
});

describe("multiply", () => {
  test("should add two numbers correctly", () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(a * b);
  });

  test("should add two numbers correctly", () => {
    // Arrange
    const a = 2;
    const b = 0;

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(b);
  });
});

describe("divide", () => {
  test("should add divide numbers correctly", () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const result = divide(a, b);

    // Assert
    expect(result).toBe(a / b);
  });

  test("should divide two numbers correctly", () => {
    // Arrange
    const a = 2;
    const b = 2;

    // Act
    const result = divide(a, b);

    // Assert
    expect(result).toBe(1);
  });
});
