import { createBrowserRouter, RouterProvider } from "react-router";

import Portfolio from "./Portfolio";
import Layout from "./Layout";
import Home from "./Home";
import React from "react";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Portfolio />,
      },
      {
        path: "/about",
        element: <Home />,
      },
    ],
  },
], { basename: "/portfolio-project" }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
