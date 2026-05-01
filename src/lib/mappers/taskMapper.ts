import type { Task } from "../../types/task"
import type { TaskApiResponse } from "../../types/api"

export function mapTaskFromApi(api: TaskApiResponse): Task {
  return {
    id: api.id,
    title: api.title,
    description: api.description,
    status: mapStatus(api.status_id),
    priority: "low",
    project_id: api.project_id,
    tags: api.tags,
    start_date: api.start_date,
    due_date: api.due_date
  }
}

function mapStatus(id: string): Task["status"] {
  const map: Record<string, Task["status"]> = {
    "1": "new",
    "2": "in_progress",
    "3": "review",
    "4": "done",
  }

  return map[id] || "new"
}