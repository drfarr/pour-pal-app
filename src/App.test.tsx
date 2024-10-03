import { describe, it } from "vitest";
import { render } from "@testing-library/react";

import App from "./App.tsx";

describe("App", () => {
  it("Renders the app", () => {
    render(<App />);
  });

  it.todo("Displays the title and description of the app");
  it.todo("Displays a loading state while drinks are loading");
  it.todo("Displays a list of only 10 drinks");
  it.todo("Displays an action to load more drinks");
  it.todo("Clicking on a drink takes you to the detail screen for the drink");
  it.todo(
    "Displays a details screen with drink's image, name, alcohol by volume (abv), tagline, full description, and ingredients",
  );
});
