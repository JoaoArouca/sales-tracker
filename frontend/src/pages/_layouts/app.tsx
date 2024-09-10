import { Header } from "@/components/header"
import { Outlet, useNavigate } from "react-router-dom"

export const AppLayout = () => {
  const navigate = useNavigate()

  return (
    // TODO: handle authorization here
    <div className="flex max-h-screen min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}