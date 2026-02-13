import { NavLink } from "react-router-dom"

export default function Sidebar() {
    return (
        <aside className="w-64 border-r bg-background p-4">
            <h2 className="text-xl font-semibold mb-6">Task Manager</h2>

            <nav className="flex flex-col gap-2">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `p-2 rounded-md ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                        }`
                    }
                >
                    Projects
                </NavLink>

                <NavLink
                    to="/reports"
                    className={({ isActive }) =>
                        `p-2 rounded-md ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                        }`
                    }
                >
                    Reports
                </NavLink>
            </nav>
        </aside>
    )
}
