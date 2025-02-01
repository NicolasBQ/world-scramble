import React from "react"

interface buttonProps {
    children: React.ReactNode,
    eventFunction: () => void
}


const Button = ({ children, eventFunction }: buttonProps) => {
    return (
        <button
            className="py-2 w-32 bg-pink rounded-xl text-white font-outfit font-medium shadow-button active:shadow-none active:translate-y-1 focus:outline-none"
            onClick={eventFunction}
        >
            {children}
        </button>
    )
}

export {
    Button
}