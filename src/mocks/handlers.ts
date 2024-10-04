//@ts-expect-error
import { word, uuid, date } from "minifaker";
import "minifaker/locales/en";
import { http, HttpResponse } from "msw";

/**
 * Generate a rando§m string of words.
 * @param length
 * @returns string
 */
const words = (length: number) =>
  [...Array(length)].map(() => word()).join(" ");

/**
 * Mock handlers for theCocktailDB API.
 */
export const handlers = [
  http.get(`https://www.thecocktaildb.com/api/json/v2/*`, () => {
    return HttpResponse.json({
      drinks: [...Array(10)].map(() => ({
        idDrink: uuid.v4(),
        strDrink: words(Math.floor(Math.random() * 3 + 2)),
        strDrinkAlternate: word(),
        strTags: word(),
        strVideo: word(),
        strCategory: word(),
        strIBA: word(),
        strAlcoholic: word(),
        strGlass: word(),
        strInstructions: words(Math.floor(Math.random() * 20 + 2)),
        strInstructionsES: word(),
        strInstructionsDE: word(),
        strInstructionsFR: word(),
        strInstructionsIT: word(),
        "strInstructionsZH-HANS": word(),
        "strInstructionsZH-HANT": word(),
        strIngredient1: word(),
        strIngredient2: word(),
        strIngredient3: word(),
        strIngredient4: word(),
        strIngredient5: word(),
        strIngredient6: word(),
        strIngredient7: word(),
        strIngredient8: word(),
        strIngredient9: word(),
        strIngredient10: word(),
        strIngredient11: word(),
        strIngredient12: word(),
        strIngredient13: word(),
        strIngredient14: word(),
        strIngredient15: word(),
        strMeasure1: word(),
        strMeasure2: word(),
        strMeasure3: word(),
        strMeasure4: word(),
        strMeasure5: word(),
        strMeasure6: word(),
        strMeasure7: word(),
        strMeasure8: word(),
        strMeasure9: word(),
        strMeasure10: word(),
        strMeasure11: word(),
        strMeasure12: word(),
        strMeasure13: word(),
        strMeasure14: word(),
        strMeasure15: word(),
        strImageSource: "https://placehold.co/300x300.png",
        strDrinkThumb: "https://placehold.co/100x100.png",
        strImageAttribution: word(),
        strCreativeCommonsConfirmed: word(),
        dateModified: date(),
      })),
    });
  }),
];
