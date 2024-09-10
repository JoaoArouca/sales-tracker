import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../pages/not-found";
import { AppLayout } from "@/pages/_layouts/app";
import { Dashboard } from "@/pages/dashboard";

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />
      }
    ]
  }
])