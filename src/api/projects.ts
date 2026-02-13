import { api } from "./axios"
import type { Project } from "../types/project"

export const getProjects = async (): Promise<Project[]> => {
  const { data } = await api.get("/projects")
  return data
}

export const createProject = async (payload: {
  name: string
  description?: string
}) => {
  const { data } = await api.post("/projects", payload)
  return data
}
