import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineRightCircle } from 'react-icons/ai'
import React, { ReactNode } from 'react'

interface ProjetoProps {
  title: string
  type: string
  slug: string
  img: ReactNode | any
}

function ProjectItem({ title, type, slug, img }: ProjetoProps) {
  return (
    <div
      data-aos="fade-up"
      className="w-screen h-96 flex items-end relative hover:opacity-5"
    >
      {/* <div>
        <Image alt="" fill src={img} objectFit="cover" quality={100} />
      </div> */}

      <section className="w-[50rem] h-screen relative bg-no-repeat bg-cover bg-[url('../../public/banner.png')]">
        <div className="absolute w-screen h-screen opacity-75 transition: 0.5s" />
        <div className="absolute top-12 -right-40 w-fit">
          <h1 className="text-4xl"># {title}</h1>
          <h2 className="text-3xl font-light ">- {type}</h2>
        </div>
      </section>
      <button
        type="button"
        className="h-16 margin: 0 0 3rem 5rem bg-none border-none"
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
