import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import { ErrorPage } from "./components/error-page";
import { NotFoundPage } from "./components/not-found";
import { PageLoader } from "./components/page-loader";

const MapComponent = React.lazy(() => import("@/components/map"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<PageLoader />}>
        <MapComponent />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: (
      <React.Suspense fallback={<PageLoader />}>
        <NotFoundPage />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
