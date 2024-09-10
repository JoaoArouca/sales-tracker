import axios from "axios"
import { env } from "./env"

const LAZY_TIME = 3000

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true
})

api.interceptors.request.use(async (config) => {
  await new Promise((resolve) => {
    setTimeout(resolve, LAZY_TIME)
  })
  return config
})