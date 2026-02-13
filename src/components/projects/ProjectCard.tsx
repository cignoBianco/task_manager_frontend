import { useNavigate } from "react-router-dom"

interface ProjectCardProps {
    project: {
        id: string
        name: string
        description: string
    }
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const navigate = useNavigate()

    return (
        <div
            className="p-4 bg-card rounded-lg shadow hover:shadow-md cursor-pointer transition"
            onClick={() => navigate(`/projects/${project.id}`)}
        >
            <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
            <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
    )
}
