export interface TaskApiResponse {
    id: string
    title: string
    description?: string
    status_id: string
    project_id: string
    tags: {
      id: string
      name: string
    }[]
    start_date?: string
    due_date?: string
  }