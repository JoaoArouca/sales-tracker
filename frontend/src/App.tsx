import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"
import { router } from "./lib/routes"
import { QueryClientProvider, QueryClient } from 'react-query'

export const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Helmet titleTemplate="%s | sales.tracker" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  )
}