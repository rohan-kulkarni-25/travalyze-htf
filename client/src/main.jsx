import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewTrip from "./pages/NewTrip";
import Trip from "./pages/Trip";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home />,
    children: [
      {
        path: "/new-trip",
        element: <NewTrip />,
      },
      {
        path: "new-trip/trip",
        element: <Trip />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
