/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "./axios"

export const getTasks = async (params?: any) => {
  const res = await api.get("/tasks", { params })
  return res.data
}

export const createTask = async (data: any) => {
  const res = await api.post("/tasks", data)
  return res.data
}

export const updateTask = async (id: string, data: any) => {
  const res = await api.put(`/tasks/${id}`, data)
  return res.data
}