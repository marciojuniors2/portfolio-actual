'use client'
import HomeHero from '@/components/HomeHero'

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen bg-gradient-to-b overflow-x-hidden">
      <main className="w-screen h-screen">
        <div className="md:px-4 lg:px-6 xl:px-8">
          <HomeHero />
        </div>
        <section className=""></section>
      </main>
    </div>
  )
}
