import { Droppable } from "@hello-pangea/dnd"
import type { TaskStatus, Task } from "../../types/task"
import { useState } from "react"
import TaskCard from "./TaskCard"

interface Props {
    title: string
    status: TaskStatus
    tasks: Task[]
    onMove: (taskId: string, status: TaskStatus) => void
    onAddTask?: (title: string) => void
}

export default function KanbanColumn({
    title,
    status,
    tasks,
    // onMove,
    onAddTask,
}: Props) {
    const [newTitle, setNewTitle] = useState("")

    const filtered = tasks.filter((task) => task.status === status)

    return (
        <div className="bg-gray-50 p-4 rounded-xl border min-h-[500px]">
            <h3 className="font-semibold mb-4">{title}</h3>

            {status === "new" && onAddTask && (
                <div className="mb-4">
                    <input
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="New task..."
                        className="w-full border rounded px-2 py-1 mb-2"
                    />
                    <button
                        className="w-full bg-blue-600 text-white py-1 rounded"
                        onClick={() => {
                            if (!newTitle.trim()) return
                            onAddTask(newTitle)
                            setNewTitle("")
                        }}
                    >
                        Add
                    </button>
                </div>
            )}

            <Droppable droppableId={status}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="space-y-3 min-h-[100px]"
                    >
                        {filtered.map((task, index) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                index={index}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}
