import { useState } from "react"
import { Button } from "../components/ui/button"
import ProjectCard from "../components/projects/ProjectCard"
import CreateProjectModal from "../components/projects/CreateProjectModal"
import type { Project } from "../types/project"

const dummyProjects = [
    { id: "1", name: "Project Alpha", description: "Internal tool development", created_at: '2025-10-10' },
    { id: "2", name: "Project Beta", description: "Marketing campaign", created_at: '2025-11-10' },
]

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>(dummyProjects)
    const [isModalOpen, setModalOpen] = useState(false)

    const addProject = (name: string, description: string) => {
        const newProject = {
            id: crypto.randomUUID(),
            name,
            description,
            created_at: (new Date().toString())
        }
        setProjects((prev) => [...prev, newProject])
        setModalOpen(false)
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <Button onClick={() => setModalOpen(true)}>+ Create Project</Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <CreateProjectModal
                open={isModalOpen}
                onClose={() => setModalOpen(false)}
                onCreate={addProject}
            />
        </div>
    )
}
