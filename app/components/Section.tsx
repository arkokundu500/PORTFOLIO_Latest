import type { ReactNode } from "react"

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`min-h-screen py-16 px-4 md:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="border-b-4 border-blue-500 pb-2">{title}</span>
        </h2>
        {children}
      </div>
    </section>
  )
}

