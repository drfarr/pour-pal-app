import { describe, it } from "vitest";
import { render, waitForElementToBeRemoved } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("Displays the title and description of the app", () => {
    const { getByTestId, getByRole } = render(<App />);
    expect(getByRole("heading")).toHaveTextContent("Pour Pal 🍹");
    expect(getByTestId("app-description")).toHaveTextContent(
      "Mix the perfect drink anytime with your cocktail companion; Pour Pal!",
    );
  });
  it("Displays a loading state while drinks are loading", () => {
    const { getByRole } = render(<App />);
    expect(getByRole("status")).toHaveTextContent("Loading...");
  });

  it("Displays a list of only 10 drinks once loaded", async () => {
    const { getAllByTestId, getByRole } = render(<App />);
    await waitForElementToBeRemoved(() => getByRole("status"));
    expect(getAllByTestId("cocktail")).toHaveLength(10);
  });

  it.todo("Clicking on a drink takes you to the detail screen for the drink");
  it.todo(
    "Displays a details screen with drink's image, name, alcohol by volume (abv), tagline, full description, and ingredients",
  );
  it.todo("Displays an action to load more drinks");
});
