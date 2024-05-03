import { Outlet } from "react-router-dom"
import { Tabs } from "../../components/tabs/Tabs"
import "./HR.css"

export const HR = () => {
  return (
    <>
      <Tabs />
      <Outlet />
    </>
  )
}