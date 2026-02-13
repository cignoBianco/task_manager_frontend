import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog"

interface CreateProjectModalProps {
    open: boolean
    onClose: () => void
    onCreate: (name: string, description: string) => void
}

export default function CreateProjectModal({
    open,
    onClose,
    onCreate,
}: CreateProjectModalProps) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const handleCreate = () => {
        if (name.trim() === "") return
        onCreate(name, description)
        setName("")
        setDescription("")
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Project</DialogTitle>
                </DialogHeader>

                <div className="space-y-3">
                    <Input
                        placeholder="Project name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <DialogFooter className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleCreate}>Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
