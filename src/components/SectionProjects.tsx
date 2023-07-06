import React from 'react'
import ProjectItem from './ProjectItem'
import Link from 'next/link'
import SectionTitle from './SectionTitle'

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
    <div className="w-screen flex min-h-[200rem] flex-col items-center gap-20 pt-24">
      <SectionTitle title="Ultimos Projetos" />

      <section className="gap-8 w-[70vw] flex flex-col lg:gap-16">
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
      <button
        type="button"
        className="bg-violet-700 padding: 0.8rem 3rem rounded-lg border-none transition:0.5s hover:bg-violet-800"
      >
        <Link
          href="/projetos"
          className="uppercase text=[#fff] text-2xl font-light max-w-lg:text-base"
        >
          Ver todos os projetos
        </Link>
      </button>
    </div>
  )
}

export default SectionProjects
