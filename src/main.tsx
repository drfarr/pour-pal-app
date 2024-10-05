import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { fetcher } from "@/utils/fetcher";
import App from "@/App.tsx";

import { ErrorBoundary } from "react-error-boundary";
import { SWRConfig } from "swr";
import "./index.css";
import Loader from "./components/Loader";
const root = createRoot(document.getElementById("root") as HTMLElement);

/**
 *
 *
 */
async function shouldMock() {
  if (Boolean(process.env.NODE_ENV === "test")) {
    const worker = await import("./__tests__/mocks/worker");
    console.log(worker.serviceWorker.listHandlers());
    return worker.serviceWorker.start();
  }
}

shouldMock().then(() => {
  return root.render(
    <StrictMode>
      <ErrorBoundary fallback={<h1>Something went wrong :(</h1>}>
        <Suspense fallback={<Loader />}>
          <SWRConfig
            value={{
              fetcher,
              suspense: true,
            }}
          >
            <App />
          </SWRConfig>
        </Suspense>
      </ErrorBoundary>
    </StrictMode>,
  );
});
