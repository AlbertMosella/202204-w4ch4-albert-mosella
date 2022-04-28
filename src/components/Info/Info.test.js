import { render, screen } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";
import Info from "./Info";

describe("Given a Info component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'Calling...'", () => {
      const renderText = "Calling...";
      render(
        <PhoneContextProvider>
          <Info />
        </PhoneContextProvider>
      );
      const expectedText = screen.getByText(renderText);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
