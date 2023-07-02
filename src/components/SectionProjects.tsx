import React from 'react'
import ProjectItem from './ProjectItem'

interface Iprojeto {
  slug: string
  title: string
  description: string
  type: string
  link: string
  thumbnail: string
}

export interface ProjetosProps {
  projetos: Iprojeto[]
}

function SectionProjects({ projetos }: ProjetosProps) {
  return (
    <div className="w-screen h-screen">
      <section>
        {projetos.slice(0, 3).map((projeto) => (
          <ProjectItem
            key={projeto.slug}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
          />
        ))}
      </section>
    </div>
  )
}

export default SectionProjects
