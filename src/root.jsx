import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "@/assets/css/style.css";
import Home from "@/view/home";
import ViewError from "@/view/viewerror";
import About from "@/view/about";
import ViewLocation from "@/view/viewlocation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ViewError />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ViewError />,
  }, 
  {
    path: "/viewlocation/:id",
    element: <ViewLocation />,
    errorElement: <ViewError />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);