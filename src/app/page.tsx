'use client'
import React, { useEffect, useState } from 'react'
import HomeHero from '@/components/HomeHero'
import Xp from '@/components/Xp'
import SectionProjects from '@/components/SectionProjects'
import Linha from '@/components/Linha'

import { getPrismicClient } from '@/services/prismic'
import Prismic from 'prismic-javascript'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Page() {
  const [scroll, setScroll] = useState(0)
  const [projetos, setProjetos] = useState<any[]>([])

  const fecthData = async () => {
    const prismic = getPrismicClient()

    const projectResponse = await prismic.query(
      [Prismic.Predicates.at('document.type', 'portfolio')],
      { orderings: '[document.first_publication_date desc]' },
    )

    const projects = projectResponse.results.map((projeto) => ({
      slug: projeto.uid,
      title: projeto.data.title,
      type: projeto.data.type,
      description: projeto.data.description,
      link: projeto.data.link.url,
      thumbnail: projeto.data.thumbnail.url,
    }))

    setProjetos(projects)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    fecthData()
    Aos.init({ duration: 1500 })
    console.log('projects:', projetos)
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Linha scrolly={scroll} />

      <main>
        <section id="HomeHero">
          <HomeHero />
        </section>
        <section id="Xp">
          <Xp />
        </section>
        <section id="Projects">
          <SectionProjects projetos={projetos} />
        </section>
        <section id="Projects">
          {/* <SectionProjects projetos={projetos} /> */}
        </section>
      </main>
    </div>
  )
}
