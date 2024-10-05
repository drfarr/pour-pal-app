import { Cocktail } from "@/types";

/**
 * Munge the keys and values of the data object to return a list of ingredients with measures.
 * @param data
 * @returns string | null
 */
export const getIngredientsWithMeasures = (data: Cocktail | null) => {
  if (data) {
    return Object.entries(data)
      .filter(([key, value]) => key.includes("Ingredient") && value)
      .map(([, value], idx) => {
        const measureKey = `strMeasure${idx + 1}` as keyof Cocktail;
        const measure = data[measureKey] ? data[measureKey] : "";
        return `${measure} ${value}`;
      });
  }
  return null;
};
/**
 * Munge the tags and category to return a list of tags.
 * @param data
 * @returns string
 */
export const getTags = (data: Cocktail | null) => {
  if (!data?.strTags?.length) {
    return data?.strCategory;
  }
  return [data?.strCategory, ...data?.strTags.split(",")].join(", ");
};
