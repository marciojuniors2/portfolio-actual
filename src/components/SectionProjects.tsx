import React from 'react'
import ProjectItem from './ProjectItem'
import banner from '../../public/banner.png'

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
    <div className="w-screen h-screen flex flex-col items-center gap-20 b">
      <section className="w-screen flex flex-col gap-16">
        {projetos.slice(0, 3).map((projeto) => (
          <ProjectItem
            key={projeto.slug}
            img={banner}
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
