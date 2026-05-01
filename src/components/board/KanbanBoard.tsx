import { DragDropContext } from "@hello-pangea/dnd"
import KanbanColumn from "./KanbanColumn"
import { useEffect } from "react"
import { useTaskStore } from "../../store/taskStore"

export default function KanbanBoard() {
    const { tasks, fetchTasks } = useTaskStore()

    useEffect(() => {
        fetchTasks()
    }, [])

    const onDragEnd = () => {
        // todo: backend
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-4 gap-4">
                <KanbanColumn title="New" tasks={tasks} />
                <KanbanColumn title="In Progress" tasks={tasks} />
                <KanbanColumn title="Review" tasks={tasks} />
                <KanbanColumn title="Done" tasks={tasks} />
            </div>
        </DragDropContext>
    )
}