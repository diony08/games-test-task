import React from "react"
import { RouterProvider as Provider } from "react-router-dom"
import { router } from "../config"

export const RouterProvider = () => {
  return (
    <Provider router={router} />
  )
}
