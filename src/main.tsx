import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

async function enableMocking() {
  if (Boolean(process.env.NODE_ENV === "test")) {
    const worker = await import("./mocks/worker");
    console.log(worker.serviceWorker.listHandlers());
    return worker.serviceWorker.start();
  }
}

enableMocking().then(() => {
  return createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
