import useSWR from "swr";

import { cocktailApiResponseSchema } from "../schemas";
import { Cocktail, CocktailApiResponse } from "../schemas/types";

export const API_KEY = process.env.COCKTAIL_API_KEY;

/**
 * Enum-like object representing different search modes for cocktails.
 *
 * @property string RANDOM - Represents a random selection search mode.
 * @property string SEARCH - Represents a standard search mode.
 * @property string FILTER - Represents a filter-based search mode.
 */
export const SEARCH_ON = {
  RANDOM: "randomselection",
  SEARCH: "search",
  FILTER: "filter",
};

/**
 * Fetches data from the given URL and parses it as JSON.
 *
 * @param url - The URL to fetch data from.
 * @returns A promise that resolves to the parsed JSON data.
 */
const fetcher = (url: string) => fetch(url).then((res) => res.json());

/**
 * Custom hook to fetch cocktail data from TheCocktailDB API.
 *
 * @returns An object containing:
 * - `data`: An array of `Cocktail` objects or `null` if the data is not available.
 * - `error`: Any error encountered during the fetch operation.
 * - `loading`: A boolean indicating whether the data is currently being loaded.
 */

export default function useCocktails(): {
  data: Cocktail[] | null;
  error: { message: string } | undefined | unknown;
  loading: boolean;
} {
  let data = null;
  const searchMethod = SEARCH_ON.RANDOM;

  const {
    data: _data,
    error,
    isLoading,
  } = useSWR<CocktailApiResponse>(
    `https://www.thecocktaildb.com/api/json/v2/${API_KEY}/${searchMethod}.php`,
    fetcher,
    {
      revalidateOnFocus: false,
    },
  );

  const parsedData = cocktailApiResponseSchema.safeParse(_data);

  if (parsedData.success) {
    data = parsedData.data.drinks;
  } else {
    console.error(parsedData.error);
  }

  return {
    data,
    error,
    loading: isLoading,
  };
}
