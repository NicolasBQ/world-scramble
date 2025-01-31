import React from "react"

interface buttonProps {
    children: React.ReactNode
}


const Button = ({ children }: buttonProps) => {
    return (
        <button className="py-2 w-32 bg-pink rounded-xl text-white font-outfit font-medium shadow-button">
            {children}
        </button>
    )
}

export {
    Button
}