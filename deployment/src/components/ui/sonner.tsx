"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        style: {
          background: '#272727',
          border: '1px solid #3a3a3a',
          color: 'white',
        },
        classNames: {
          toast: "!bg-[#272727] !border-[#3a3a3a] !text-white shadow-lg",
          title: "!text-white font-medium",
          description: "!text-zinc-400",
          actionButton: "bg-zinc-700 text-white hover:bg-zinc-600",
          cancelButton: "bg-zinc-700 text-white hover:bg-zinc-600",
          closeButton: "bg-zinc-700 text-white hover:bg-zinc-600 border-zinc-600",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
