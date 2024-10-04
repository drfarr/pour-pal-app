import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

import useCocktails from "./hooks/useCocktails";

function App() {
  const { loading, data } = useCocktails();

  return (
    <>
      <header>
        <h1 role="heading" aria-level={1}>
          Pour Pal 🍹
        </h1>
        <i data-testid="app-description">
          Mix the perfect drink anytime with your cocktail companion; Pour Pal!
        </i>
      </header>
      <main id="main" role="main">
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <section>
            {loading && (
              <div role="status" aria-busy={loading} aria-live="polite">
                Loading...
              </div>
            )}
            {data && (
              <ul data-testid="cocktails" aria-label="list">
                {data.map((cocktail) => (
                  <li
                    aria-label="listitem"
                    data-testid="cocktail"
                    key={cocktail.idDrink}
                  >
                    <h2 role="heading" aria-level={2} data-testid="title">
                      {cocktail.strDrink}
                    </h2>
                    {cocktail.strDrinkThumb && cocktail.strDrink && (
                      <img
                        width={100}
                        height={100}
                        alt={cocktail.strDrink}
                        data-testid="image"
                        src={cocktail.strDrinkThumb}
                      />
                    )}
                    <p className="instructions" data-testid="instructions">
                      {cocktail.strInstructions}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </ErrorBoundary>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Pourous Pals 🥂</p>
      </footer>
    </>
  );
}

export default App;
