import useDrinks from "@/hooks/useDrinks";
import Loader from "@/components/Loader";
import { Link } from "react-router-dom";
import "./styles.css";

function DrinksPage() {
  const { loading, data: items } = useDrinks({});

  return (
    <section className="drinks">
      {loading && <Loader />}
      {items && (
        <ul data-testid="items" aria-label="list" className="items">
          {items.map((data) => (
            <li
              data-testid={"item"}
              className="item"
              aria-label="listitem"
              key={data.idDrink}
            >
              <Link
                data-testid={`item-${data.idDrink}`}
                to={`/drink/${data.idDrink}`}
              >
                <h3
                  role="heading"
                  className="title"
                  aria-level={2}
                  data-testid="title"
                >
                  {data.strDrink}
                </h3>
                {data.strDrinkThumb && data.strDrink && (
                  <img
                    width={100}
                    height={100}
                    alt={data.strDrink}
                    data-testid="image"
                    src={data.strDrinkThumb}
                  />
                )}

                <p className="instructions" data-testid="instructions">
                  {data.strInstructions}
                </p>
                <div aria-label="link" className="button" data-testid="link">
                  View Details
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
export default DrinksPage;
