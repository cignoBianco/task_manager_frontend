import { useEffect, useState } from "react"
import { Button } from "../components/ui/button"
import ProjectCard from "../components/projects/ProjectCard"
import CreateProjectModal from "../components/projects/CreateProjectModal"
import type { Project } from "../types/project"
import { getProjects, createProject } from "../api/projects"

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([])
    const [isModalOpen, setModalOpen] = useState(false)

    const loadProjects = async () => {
        const data = await getProjects()
        setProjects(data)
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        void loadProjects()
    }, [])

    // useEffect(() => {
    //     const init = async () => {
    //         await loadProjects()
    //     }
    //     init()
    // }, [])

    const addProject = async (name: string, description: string) => {
        const newProject = await createProject({ name, description })
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