import { render, screen } from "@testing-library/react";
import Action from "./Action";

describe("Given an Action component", () => {
  describe("When it's invoked", () => {
    test("Then it should render an <a> element", () => {
      render(<Action action={"call"} />);
      const result = screen.getByRole("link");

      expect(result).toBeInTheDocument();
    });
  });
});
