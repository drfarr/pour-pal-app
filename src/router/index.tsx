import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import DrinksPage from "@/pages/Drinks";
import DrinkPage from "@/pages/Drink";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ErrorPage from "@/pages/Error";
const RootPage = lazy(
  () => import(/* webpackChunkName: 'RootPage' */ "../pages/Root"),
);
export const routerConfig = [
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<LoadingSkeleton />}>
            <DrinksPage />
          </Suspense>
        ),
      },
      {
        path: "/drink/:id",
        element: (
          <Suspense fallback={<LoadingSkeleton variant="half" />}>
            <DrinkPage />
          </Suspense>
        ),
      },
    ],
  },
];
const router = createBrowserRouter(routerConfig);

export default router;
