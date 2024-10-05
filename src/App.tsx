import { RouterProvider } from "react-router-dom";

import "./App.css";
import router from "./router";
import { getDrinksUrl } from "./utils/config";

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
