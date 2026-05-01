import { Routes, Route } from "react-router-dom"
import AppLayout from "./components/layout/AppLayout"
import ProjectsPage from "./pages/ProjectPage"
import BoardPage from "./pages/BoardPage"
import ReportsPage from "./pages/ReportsPage"
import CalendarPage from "./pages/CalendarPage"
import DashboardPage from "./pages/DashboardPage"

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<BoardPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}

export default App
