import { render, screen } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";
import Display from "./Display";

describe("Given a Display component", () => {
  describe("When it receives the string '666666666'", () => {
    test("Then it should render the text '666666666'", () => {
      const phoneNumber = "666666666";

      render(
        <PhoneContextProvider>
          <Display />
        </PhoneContextProvider>
      );
      const expectedNumberRendered = screen.getByText(phoneNumber);

      expect(expectedNumberRendered).toBeInTheDocument();
    });
  });
});
