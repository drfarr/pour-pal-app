import { z } from "zod";
import { cocktailApiResponseSchema, cocktailSchema } from "@/schemas";

export type Cocktail = z.infer<typeof cocktailSchema>;
export type CocktailApiResponse = z.infer<typeof cocktailApiResponseSchema>;
