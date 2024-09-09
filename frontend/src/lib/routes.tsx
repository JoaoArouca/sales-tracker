import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../pages/not-found";

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <h1>hello world</h1>
  }
])