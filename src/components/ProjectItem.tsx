import Link from 'next/link'
import { AiOutlineRightCircle } from 'react-icons/ai'
import React from 'react'

interface ProjetoProps {
  title: string
  type: string
  slug: string
  img: string
}

function ProjectItem({ title, type, slug, img }: ProjetoProps) {
  const bgImageUrl = `url(${img})`

  return (
    <div
      data-aos="fade-up"
      className="flex h-[17rem] w-screen even:flex-row lg:w-[70vw] lg:h-[25rem] items-end lg:even:flex-row-reverse relative"
    >
      <section
        className="w-screen lg:w-[40rem] xl:w-[50rem] lg:h-full relative"
        style={{
          backgroundImage: bgImageUrl,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div
          id="overlay"
          className="absolute w-screen h-screen opacity-75 transition: 0.5s hover:opacity-[0.4]"
        />
        <div
          id="text"
          className="left-4 top-4 lg:absolute w-fit lg:top-12 lg:-right-40 transition:0.5s"
        >
          <h1 className="text-4xl"># {title}</h1>
          <h2 className="text-3xl font-light ">- {type}</h2>
        </div>
      </section>

      <button
        type="button"
        className="h-16 margin:0 0 3rem 5rem bg-none border-none"
      >
        <Link
          href={`/projetos/${slug}`}
          className="color-[#fff] text-4xl font-light flex items-center gap-3 transition: 0.5s"
        >
          Ver mais <AiOutlineRightCircle />
        </Link>
      </button>
    </div>
  )
}
export default ProjectItem
