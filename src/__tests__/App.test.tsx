import { describe, it, expect, vi } from "vitest";
import {
  fireEvent,
  render,
  waitFor,
  screen as _screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import site, {
  apiUrl,
  getDrinksUrl,
  getDrinkUrl,
  SEARCH_ON,
} from "@/utils/config";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routerConfig } from "@/router";
import { http, HttpResponse } from "msw";
import server from "@/__tests__/mocks/server";
import { SWRConfig } from "swr";

window.scrollTo = vi.fn();

const SWRMemoryRouter = ({
  initialEntries,
  initialIndex,
}: {
  initialEntries?: string[];
  initialIndex?: number;
}) => {
  const router = createMemoryRouter(routerConfig, {
    initialEntries,
    initialIndex,
  });

  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <RouterProvider router={router} />;
    </SWRConfig>
  );
};

describe("App", () => {
  it("Displays a loading state while drinks are loading", async () => {
    const screen = render(<SWRMemoryRouter initialEntries={["/"]} />);

    await waitFor(() => screen.getByTestId("loader")), { timeout: 5000 };
  });

  it("Displays the title and description of the app", async () => {
    const screen = render(<SWRMemoryRouter initialEntries={["/"]} />);
    expect(await screen.findByText(site.name)).toBeInTheDocument();
    expect(await screen.findByTestId("app-description")).toHaveTextContent(
      site.description,
    );
  });

  it("Displays a list of only 10 drinks once loaded", async () => {
    const screen = render(<SWRMemoryRouter initialEntries={["/"]} />);
    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    expect(await screen.getByTestId("items")).toBeInTheDocument();
    expect(await screen.getAllByTestId("item")).toHaveLength(10);
  });

  it("Displays a details screen with a drink's image, name, ingredients and instruction", async () => {
    const screen = render(<SWRMemoryRouter initialEntries={["/drink/1"]} />);
    await waitFor(() => screen.getByTestId("drink"));
    expect(await screen.getByTestId("title")).toBeInTheDocument();
    expect(await screen.getByTestId("image")).toBeInTheDocument();
    expect(await screen.getByTestId("instructions")).toBeInTheDocument();
    expect(await screen.getByTestId("ingredients")).toBeInTheDocument();
  });
  it("Can click a link to view more details about a drink and navigate back to the list of drinks", async () => {
    const screen = render(
      <SWRMemoryRouter initialEntries={["/", "/drink/1"]} initialIndex={0} />,
    );
    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    const link = await screen.getByTestId("item-1");

    fireEvent.click(link);
    await waitFor(() => screen.getByTestId("drink"));
    expect(await screen.getByTestId("title")).toBeInTheDocument();
    expect(await screen.getByTestId("image")).toBeInTheDocument();
    expect(await screen.getByTestId("instructions")).toBeInTheDocument();
    expect(await screen.getByTestId("ingredients")).toBeInTheDocument();
  });

  it("Can navigate back to the list of drinks from the drink details page", async () => {
    const screen = render(
      <SWRMemoryRouter initialEntries={["/", "/drink/1"]} initialIndex={1} />,
    );
    await waitFor(() => screen.getByTestId("drink"));
    expect(await screen.getByTestId("title")).toBeInTheDocument();
    expect(await screen.getByTestId("image")).toBeInTheDocument();
    expect(await screen.getByTestId("instructions")).toBeInTheDocument();
    expect(await screen.getByTestId("ingredients")).toBeInTheDocument();

    const backLink = screen.getByTestId("back-link");
    fireEvent.click(backLink);
    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));
    expect(screen.getByTestId("items")).toBeInTheDocument();
  });

  it.todo("Displays an action to load more drinks");
});
