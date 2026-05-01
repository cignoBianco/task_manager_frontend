import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import { format, parse, startOfWeek, getDay } from "date-fns"
import { useTaskStore } from "@/store/taskStore"

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales: {},
})

export default function CalendarView() {
    const { tasks } = useTaskStore()

    const events = tasks.map((t) => ({
        title: t.title,
        start: new Date(),
        end: new Date(),
    }))

    return (
        <div className="h-[600px]">
            <Calendar localizer={localizer} events={events} />
        </div>
    )
}