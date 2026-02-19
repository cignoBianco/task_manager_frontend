import type { Task, TaskStatus } from "../../types/task"

interface Props {
    task: Task
    onMove: (taskId: string, status: TaskStatus) => void
}

export default function TaskCard({ task, onMove }: Props) {
    const nextStatus: Record<TaskStatus, TaskStatus | null> = {
        new: "in_progress",
        in_progress: "review",
        review: "done",
        done: null,
    }

    return (
        <div className="bg-white p-3 rounded-lg shadow-sm border">
            <p className="mb-3 text-sm">{task.title}</p>

            {nextStatus[task.status] && (
                <button
                    className="text-xs bg-gray-200 px-2 py-1 rounded"
                    onClick={() =>
                        onMove(task.id, nextStatus[task.status] as TaskStatus)
                    }
                >
                    Move →
                </button>
            )}
        </div>
    )
}
