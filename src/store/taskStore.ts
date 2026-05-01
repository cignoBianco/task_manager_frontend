import { create } from "zustand"
import { getTasks } from "../api/tasks"
import type { Task } from "../types/task"
import type { TaskApiResponse } from "../types/api"
import { mapTaskFromApi } from "./../lib/mappers/taskMapper"

type State = {
  tasks: Task[]
  loading: boolean
  fetchTasks: () => Promise<void>,
  setTasks: (updater: Task[] | ((prev: Task[]) => Task[])) => void
}

export const useTaskStore = create<State>((set) => ({
  tasks: [],
  loading: false,
  setTasks: (updater) =>
    set((state) => ({
      tasks:
        typeof updater === "function"
          ? updater(state.tasks)
          : updater,
    })),

  fetchTasks: async () => {
    try {
      set({ loading: true })

      const data: TaskApiResponse[] = await getTasks()

      const mapped = data.map(mapTaskFromApi)

      set({ tasks: mapped })
    } catch (e) {
      console.error(e)
    } finally {
      set({ loading: false })
    }
  },
}))