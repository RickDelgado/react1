import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
vi.mock("./shoping-cart/ItemCounter", () => ({
  default: (props: unkwnown) => (
    <div
      data-testid="Itemcounter"
      name={props.name}
      quantity={props.quantity}
    />
  ),
}));

describe("FirstStepsApp", () => {
  test("should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();

    screen.debug();
  });

  test("should show the correct number of items in the cart", () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId("Itemcounter");
    expect(itemCounters.length).toBe(3);
    screen.debug();
  });
});
