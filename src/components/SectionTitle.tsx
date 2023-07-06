import { ReactNode } from 'react'

interface props {
  title: string | ReactNode
  description?: string | ReactNode
}

function SectionTitle({ title, description }: props) {
  return (
    <div
      data-aos="fade-right"
      className="w-screen flex flex-col items-start gap-2"
    >
      <h1 className="sm:text-3xl md:text-4xl lg:text-7xl text-purple-800">
        #{title}
      </h1>
      {description && (
        <h2 className="sm:text-lg md:text-3xl lg:text-6xl font-light text-purple-700">
          {description}
        </h2>
      )}
    </div>
  )
}

export default SectionTitle
