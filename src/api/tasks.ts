import axios from "axios"

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
})

export const getTasks = async (params?: {
  project_id?: string
  status_id?: string
  assignee_id?: string
  tags?: string[]
  skip?: number
  limit?: number
}) => {
  const res = await api.get("/tasks", { params })
  return res.data
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createTask = async (data: any) => {
  const res = await api.post("/tasks", data)
  return res.data
}

export const addTagsToTask = async (taskId: string, tags: string[]) => {
  const res = await api.post(`/tasks/${taskId}/tags`, { tags })
  return res.data
}