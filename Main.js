import React from "react";
import ReactDOM from "react-dom/client";
import App, { router } from "./src/App";
import "./Main.css"
import { RouterProvider } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}><App /></RouterProvider>);
