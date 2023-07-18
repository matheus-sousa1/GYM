import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import Appointment from "./components/pages/appointment";
import Home from "./home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Activities from "./components/pages/activities";
import About from "./components/pages/about";
import Plans from "./components/pages/plans";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "appointment",
    element: <Appointment />,
  },
  {
    path: "activities",
    element: <Activities />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "plans",
    element: <Plans />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
