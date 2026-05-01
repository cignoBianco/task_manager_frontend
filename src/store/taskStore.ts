import { create } from "zustand"
import { getTasks } from "../api/tasks"

type Task = {
  id: string
  title: string
  status_id?: string
  tags: { id: string; name: string }[]
}

type State = {
  tasks: Task[]
  fetchTasks: () => Promise<void>
}

export const useTaskStore = create<State>((set) => ({
  tasks: [],

  fetchTasks: async () => {
    const data = await getTasks()
    set({ tasks: data })
  },
}))