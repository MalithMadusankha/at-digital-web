import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./views/ErrorPage";
import TestPage from "./views/TestPage";
import Index from "./views/Index";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <TestPage />,
    errorElement: <ErrorPage />,
  },
]);

export default routes;
