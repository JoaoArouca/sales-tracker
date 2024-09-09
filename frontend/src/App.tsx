import { useEffect } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"
import { router } from "./lib/routes"

export const App = () => {
  useEffect(() => {
    fetch('/orders')
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | sales.tracker" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}