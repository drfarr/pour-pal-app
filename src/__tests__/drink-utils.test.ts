import { describe, it, expect } from "vitest";
import { getIngredientsWithMeasures, getTags } from "@/utils/drink";
import { Cocktail } from "@/types";

describe("getIngredientsWithMeasures", () => {
  it("should map a list of ingredients with measures by index", () => {
    const cocktail = {
      strIngredient1: "Vodka",
      strIngredient2: "Orange Juice",
      strIngredient3: null,
      strMeasure1: "50ml",
      strMeasure2: "100ml",
      strMeasure3: null,
    };

    const result = getIngredientsWithMeasures(cocktail as Cocktail);
    expect(result).toEqual(["50ml Vodka", "100ml Orange Juice"]);
  });

  it("should return null if data is null", () => {
    const result = getIngredientsWithMeasures(null);
    expect(result).toBeNull();
  });

  it("should handle missing measures", () => {
    const cocktail = {
      strIngredient1: "Vodka",
      strMeasure1: "",
      strIngredient2: "Orange Juice",
      strMeasure2: "",
    };

    const result = getIngredientsWithMeasures(cocktail as Cocktail);
    expect(result).toEqual([" Vodka", " Orange Juice"]);
  });
});

describe("getTags", () => {
  it("should return a list of tags including category", () => {
    const cocktail = {
      strCategory: "Cocktail",
      strTags: "Refreshing,Fruity",
    };

    const result = getTags(cocktail as Cocktail);
    expect(result).toBe("Cocktail, Refreshing, Fruity");
  });

  it("should return only the category if tags are empty", () => {
    const cocktail = {
      strCategory: "Cocktail",
      strTags: "",
    };

    const result = getTags(cocktail as Cocktail);
    expect(result).toBe("Cocktail");
  });

  it("should return undefined if data is null", () => {
    const result = getTags(null);
    expect(result).toBeUndefined();
  });
});
