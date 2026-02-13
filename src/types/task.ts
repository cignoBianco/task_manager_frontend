export type TaskStatus = "new" | "in_progress" | "review" | "done"

export interface Task {
  id: string
  title: string
  description?: string
  status: TaskStatus
  priority: "low" | "medium" | "high"
  project_id: string
  tags: {
    id: string
    name: string
  }[]
}
