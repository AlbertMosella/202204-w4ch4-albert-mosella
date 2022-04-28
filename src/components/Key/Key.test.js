import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When it receives the string '5'", () => {
    test("Then it should render a key with the text '5'", () => {
      const number = "5";

      render(<Key text={number} />);

      const expectedResult = screen.getByText(number);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
