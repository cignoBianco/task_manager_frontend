import * as React from "react"

// interface DialogProps {
//     open: boolean
//     onOpenChange: (open: boolean) => void
//     children: React.ReactElement<{ onClose: () => void }>
// }

export function Dialog({ open, children }: {
    open: boolean
    children: React.ReactNode
}) {
    if (!open) return null

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            {children}
        </div>
    )
}

interface DialogContentProps {
    children: React.ReactNode
    onClose?: () => void
}

export function DialogContent({ children, onClose }: DialogContentProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            {children}
            <div className="mt-4 flex justify-end">
                <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
    return <div className="mb-4 text-lg font-semibold">{children}</div>
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
    return <h2 className="text-xl font-bold">{children}</h2>
}

export function DialogFooter({
    children,
    className = "",
}: {
    children: React.ReactNode
    className?: string
}) {
    return <div className={`mt-4 flex justify-end gap-2 ${className}`}>{children}</div>
}
