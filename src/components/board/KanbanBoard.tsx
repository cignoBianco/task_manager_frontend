import { DragDropContext, type DropResult } from "@hello-pangea/dnd"
import KanbanColumn from "./KanbanColumn"
import { useEffect } from "react"
import { useTaskStore } from "../../store/taskStore"
import type { TaskStatus } from "../../types/task"
import { updateTask } from "../../api/tasks"

export default function KanbanBoard() {
    const { tasks, fetchTasks, setTasks } = useTaskStore()

    useEffect(() => {
        fetchTasks()
    }, [fetchTasks])

    const onDragEnd = async (result: DropResult) => {
        if (!result.destination) return

        const taskId = result.draggableId
        const newStatus = result.destination.droppableId as TaskStatus

        // optimistic update
        setTasks((prev) =>
            prev.map((t) =>
                t.id === taskId ? { ...t, status: newStatus } : t
            )
        )

        try {
            await updateTask(taskId, { status: newStatus })
        } catch (e) {
            console.error(e)
            fetchTasks()
        }
    }

    const handleMove = async (taskId: string, status: TaskStatus) => {
        setTasks((prev) =>
            prev.map((t) =>
                t.id === taskId ? { ...t, status } : t
            )
        )

        try {
            await updateTask(taskId, { status })
        } catch (e) {
            console.error(e)

            // rollback
            fetchTasks()
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-4 gap-4">
                <KanbanColumn
                    title="New"
                    status="new"
                    tasks={tasks}
                    onMove={handleMove}
                />
                <KanbanColumn
                    title="In Progress"
                    status="in_progress"
                    tasks={tasks}
                    onMove={handleMove}
                />
                <KanbanColumn
                    title="Review"
                    status="review"
                    tasks={tasks}
                    onMove={handleMove}
                />
                <KanbanColumn
                    title="Done"
                    status="done"
                    tasks={tasks}
                    onMove={handleMove}
                />
            </div>
        </DragDropContext>
    )
}
