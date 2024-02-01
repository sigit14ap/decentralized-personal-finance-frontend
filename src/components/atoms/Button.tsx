"use client"
import React from 'react'

interface ButtonProps {
    type: "button" | "reset" | "submit" | undefined
    label: string
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, label }) => {
  return <button
        type={type}
        onClick={onClick}
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
        {label}
    </button>
}

export default Button