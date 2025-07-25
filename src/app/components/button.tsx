import React, { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="border border-blue-600 px-4 py-2 rounded-2xl hover:text-white hover:bg-blue-900 hover:border-blue-900 transition-all 0.3s duration-200 transform hover:scale-105 cursor-pointer">{children}</button>
  )
}
