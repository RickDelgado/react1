import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ItemCounter from "./ItemCounter";

describe("ItemCounter", () => {
  test("should render with default values", () => {
    const name = "Sample Item";

    render(<ItemCounter name={name} />);

    screen.debug();
    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("should render with custom quantity", () => {
    const name = "Sample Item";
    const quantity = 5;
    render(<ItemCounter name={name} quantity={quantity} />);

    screen.debug();
    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("sould increase count when +1 is clicked", () => {
    render(<ItemCounter name="Sample Item" quantity={1} />);

    const [buttonAdd] = screen.getAllByRole("button");
    fireEvent.click(buttonAdd);

    expect(screen.getByText("2")).toBeDefined();
  });

  test("sould decrease count when -1 is clicked", () => {
    render(<ItemCounter name="Sample Item" quantity={5} />);

    const [, buttonSubtract] = screen.getAllByRole("button");
    fireEvent.click(buttonSubtract);

    expect(screen.getByText("4")).toBeDefined();
  });

  test("sould not decrease count when -1 is clicked and quanty is 0", () => {
    render(<ItemCounter name="Sample Item" quantity={5} />);

    const [, buttonSubtract] = screen.getAllByRole("button");

    for (let i = 0; i < 6; i++) {
      fireEvent.click(buttonSubtract);
    }

    expect(screen.getByText("0")).toBeDefined();
  });

  test("should change to black when count is 1", () => {
    const quiantity = 1;
    const name = "Sample Item";
    render(<ItemCounter name={name} quantity={quiantity} />);

    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe("black");
  });

  test("should change to red when count is 0", () => {
    const quiantity = 0;
    const name = "Sample Item";
    render(<ItemCounter name={name} quantity={quiantity} />);

    const itemText = screen.getByText(name);
    expect(itemText.style.color).toBe("red");
  });
});
