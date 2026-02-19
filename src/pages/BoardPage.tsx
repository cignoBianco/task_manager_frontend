import { useParams } from "react-router-dom"
import { useState } from "react"
import type { Task, TaskStatus } from "../types/task"
import KanbanColumn from "../components/board/KanbanColumn"

export default function BoardPage() {
    const { id } = useParams()

    const [tasks, setTasks] = useState<Task[]>([
        {
            id: "1", title: "Setup project", status: "new",
            priority: "low",
            project_id: "",
            tags: []
        },
        {
            id: "2", title: "Create API", status: "in_progress",
            priority: "low",
            project_id: "",
            tags: []
        },
        {
            id: "3", title: "Write tests", status: "review",
            priority: "low",
            project_id: "",
            tags: []
        },
        {
            id: "4", title: "Deploy", status: "done",
            priority: "low",
            project_id: "",
            tags: []
        },
    ])

    const updateTaskStatus = (taskId: string, status: TaskStatus) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === taskId ? { ...task, status } : task
            )
        )
    }

    const addTask = (title: string) => {
        const newTask: Task = {
            id: crypto.randomUUID(),
            title,
            status: "new",
            priority: "low",
            project_id: "",
            tags: []
        }
        setTasks((prev) => [...prev, newTask])
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">
                Project Board: {id}
            </h2>

            <div className="grid grid-cols-4 gap-6">
                <KanbanColumn
                    title="New"
                    status="new"
                    tasks={tasks}
                    onMove={updateTaskStatus}
                    onAddTask={addTask}
                />

                <KanbanColumn
                    title="In Progress"
                    status="in_progress"
                    tasks={tasks}
                    onMove={updateTaskStatus}
                />

                <KanbanColumn
                    title="Review"
                    status="review"
                    tasks={tasks}
                    onMove={updateTaskStatus}
                />

                <KanbanColumn
                    title="Done"
                    status="done"
                    tasks={tasks}
                    onMove={updateTaskStatus}
                />
            </div>
        </div>
    )
}
