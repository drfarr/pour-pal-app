import site from "@/utils/config";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header id="header">
        <Link to="/">
          <h1
            role="heading"
            data-testid="app-title"
            className="heading"
            aria-level={1}
          >
            {site.name}
          </h1>
          <h2 data-testid="app-description">{site.description}</h2>
        </Link>
      </header>
      <main id="main" className="container" role="main">
        {children}
      </main>
      <footer>
        <p>Made with 🤪🍻 © {new Date().getFullYear()} Pour Pals 🥂</p>
      </footer>
    </>
  );
};
