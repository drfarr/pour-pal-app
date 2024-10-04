import { z } from "zod";
import { cocktailApiResponseSchema, cocktailSchema } from ".";

export type Cocktail = z.infer<typeof cocktailSchema>;
export type CocktailApiResponse = z.infer<typeof cocktailApiResponseSchema>;
