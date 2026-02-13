import { useParams } from "react-router-dom"

export default function BoardPage() {
    const { id } = useParams()

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">
                Board for project: {id}
            </h2>
            <p>Kanban board will be here.</p>
        </div>
    )
}
