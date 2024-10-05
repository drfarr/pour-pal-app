import useSWR from "swr";

import { cocktailApiResponseSchema } from "@/schemas";
import { Cocktail, CocktailApiResponse } from "@/types";
import { fetcher } from "@/utils/fetcher";
import { apiUrl, SEARCH_ON } from "@/utils/config";

export const API_KEY = process.env.COCKTAIL_API_KEY;

/**
 * Custom hook to fetch cocktail data from TheCocktailDB API.
 *
 * @returns An object containing:
 * - `data`: An array of `Cocktail` objects or `null` if the data is not available.
 * - `error`: Any error encountered during the fetch operation.
 * - `loading`: A boolean indicating whether the data is currently being loaded.
 */

export default function useDrinks({ id }: { id?: string }): {
  data: Cocktail[] | null;
  error: { message: string } | undefined | unknown;
  loading: boolean;
} {
  let data = null;
  const searchMethod = id
    ? `${SEARCH_ON.LOOKUP}?i=${id}`
    : `${SEARCH_ON.RANDOM}`;

  const {
    data: _data,
    error,
    isLoading,
  } = useSWR<CocktailApiResponse>(
    `${apiUrl}/${API_KEY}/${searchMethod}`,
    fetcher,
    {
      revalidateOnFocus: false,
    },
  );

  const parsedData = cocktailApiResponseSchema.safeParse(_data);

  if (parsedData.success) {
    data = parsedData.data.drinks;
  } else {
    // Not the coolest but will need to discuss this scenario..
    console.error(parsedData.error);
  }

  return {
    data,
    error,
    loading: isLoading,
  };
}
