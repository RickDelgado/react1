import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);

    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toContain("Ricardo");

    const h3 = container.querySelector("h3");
    expect(h3?.innerHTML).toContain("Delgado");
  });

  test("should render firstName and lastName -screen", () => {
    // render the component so screen queries find the elements
    render(<MyAwesomeApp />);

    // useful to inspect the DOM when debugging
    screen.debug();

    // const h1 = screen.getByRole("heading", { level: 1 });

    const h1 = screen.getByTestId("first-name-title");
    expect(h1.innerHTML).toContain("Ricardo");
  });

  test("should match the snapshot", () => {
    const { container } = render(<MyAwesomeApp />);

    expect(container).toMatchSnapshot();
  });
});
