'use client'
import React, { useEffect, useState } from 'react'
import HomeHero from '@/components/HomeHero'
import Xp from '@/components/Xp'
import Aos from 'aos'
import LineEffect from '@/components/LineEffect'

export default function Page() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
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
      <LineEffect scrollY={scrollY} />

      <main>
        <HomeHero />
        <section className="mx-16">
          <Xp />
        </section>
      </main>
    </div>
  )
}
