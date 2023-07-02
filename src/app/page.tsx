'use client'
import React, { useEffect, useState } from 'react'
import HomeHero from '@/components/HomeHero'
import Xp from '@/components/Xp'
import Aos from 'aos'
// import LineEffect from '@/components/LineEffect'
import SectionProjects from '@/components/SectionProjects'
// import Linha from '@/components/Linha'

export default function Page() {
  const [scroll, setScroll] = useState(0)

  const p: any = []

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
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div className="overflow-x-hidden">
      <main>
        <section id="HomeHero">
          {/* <Linha scrollY={scrollY} /> */}
          <HomeHero scroll={scroll} />
        </section>
        <section id="Xp">
          <Xp />
        </section>
        <section id="Projects">
          <SectionProjects projetos={p} />
        </section>
      </main>
    </div>
  )
}
