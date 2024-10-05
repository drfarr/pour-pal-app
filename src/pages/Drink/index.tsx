import useDrinks from "@/hooks/useDrinks";

import { Link, useParams } from "react-router-dom";

import "./styles.css";
import { getIngredientsWithMeasures, getTags } from "@/utils/drink";

/**
 * Page component for individual drink details.
 */
function DrinkPage() {
  const { id } = useParams();

  const { data: _data } = useDrinks({ id });

  const data = _data ? _data[0] : null;

  const ingredients = getIngredientsWithMeasures(data);
  const tags = getTags(data);

  return (
    <section data-testid="drink" className="drink">
      <div>
        <Link data-testid="back-link" className="button" to="/">
          View more drinks
        </Link>
      </div>
      {data && (
        <div className="item">
          <div>
            <h1 aria-level={2} className="title" data-testid="title">
              {data.strDrink}
            </h1>
            {data.strDrinkThumb && data.strDrink && (
              <img
                width={300}
                height={300}
                alt={data.strDrink}
                data-testid="image"
                src={data.strDrinkThumb}
              />
            )}
            <h5>
              This drink{" "}
              {data.strAlcoholic === "Alcoholic"
                ? "contains"
                : "does not contain"}{" "}
              alchohol
            </h5>
          </div>
          <div>
            {ingredients && (
              <>
                <h2>Ingredients</h2>
                <ul aria-label="list" data-testid="ingredients">
                  {ingredients.map((ingredient, idx) => (
                    <li
                      aria-label="listitem"
                      key={idx}
                      data-testid="ingredient"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <h2>Instructions</h2>
            <p className="instructions" data-testid="instructions">
              {data.strInstructions}
            </p>
            <p>
              For the ultimate experience; serve in a{" "}
              {data.strGlass?.toLocaleLowerCase()}.
            </p>

            <small>File under: {tags}</small>
          </div>
        </div>
      )}
    </section>
  );
}

export default DrinkPage;
