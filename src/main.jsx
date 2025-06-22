// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css"; // Tailwind CSS import

// Import your page components
import Home from "./pages/Home.jsx";
import AllProjects from "./pages/AllProjects.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // main App component will render the routes
    children: [
      {
        index: true, // This makes Home the default route for "/"
        element: <Home />,
      },
      {
        path: "projects",
        element: <AllProjects />,
      },
      // Add more routes as needed
    ],
  },
  // You can also add a 404 page:
  // {
  //   path: '*',
  //   element: <NoPageFound />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
