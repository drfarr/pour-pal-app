const site = {
  name: "Pour Pal 🫗",
  description: "Your ultimate cocktail companion.",
};
/**
 * Enum-like object representing different search modes for cocktails.
 *
 * @property string RANDOM - Represents a random selection search mode.
 * @property string SEARCH - Represents a standard search mode.
 * @property string FILTER - Represents a filter-based search mode.
 */
export const SEARCH_ON = {
  RANDOM: "randomselection.php",
  SEARCH: "search.php",
  FILTER: "filter.php",
  LOOKUP: "lookup.php",
} as const;
export const apiUrl = "https://www.thecocktaildb.com/api/json/v2";
export const getDrinksUrl = `${apiUrl}/*/${SEARCH_ON.RANDOM}`;
export const getDrinkUrl = `${apiUrl}/*/${SEARCH_ON.LOOKUP}`;

export default site;
