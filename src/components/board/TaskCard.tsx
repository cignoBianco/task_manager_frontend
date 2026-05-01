import { Draggable } from "@hello-pangea/dnd"
import type { Task } from "../../types/task"

interface Props {
    task: Task
    // onMove: (taskId: string, status: TaskStatus) => void
    index: number
}

export default function TaskCard({ task, index }: Props) {
    // const nextStatus: Record<TaskStatus, TaskStatus | null> = {
    //     new: "in_progress",
    //     in_progress: "review",
    //     review: "done",
    //     done: null,
    // }

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white p-3 rounded-lg shadow-sm border"
                >
                    <p>{task.title}</p>
                </div>
            )}
        </Draggable>
    )
}
