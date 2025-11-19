import { render, screen } from "@testing-library/react";
import { afterAll, afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockedItemCounter = vi.fn((props: unknown) => {
  return <div data-testid="Itemcounter" />;
});

vi.mock("./shoping-cart/ItemCounter", () => ({
  default: (props: unknown) => mockedItemCounter(props),
}));

// vi.mock("./shoping-cart/ItemCounter", () => ({
//   default: (props: unkwnown) => (
//     <div
//       data-testid="Itemcounter"
//       name={props.name}
//       quantity={props.quantity}
//     />
//   ),
// }));

describe("FirstStepsApp", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

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

  test("should call ItemCounter with correct props", () => {
    render(<FirstStepsApp />);
    expect(mockedItemCounter).toHaveBeenCalledTimes(3);
    expect(mockedItemCounter).toHaveBeenCalledWith({
      name: "PS5",
      quantity: 1,
    });
    expect(mockedItemCounter).toHaveBeenCalledWith({
      name: "GOW",
      quantity: 1,
    });
    expect(mockedItemCounter).toHaveBeenCalledWith({
      name: "DualShock",
      quantity: 2,
    });
  });
});
