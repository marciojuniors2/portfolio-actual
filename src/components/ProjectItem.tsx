import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineRightCircle } from 'react-icons/ai'

interface ProjetoProps {
  title: string
  type: string
  slug: string
  img: string
}

function ProjectItem({ title, type, slug, img }: ProjetoProps) {
  return (
    <div data-aos="fade-up">
      <div>
        <Image src={img} alt="" />
      </div>

      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projetos/${slug}`}>
          Ver mais <AiOutlineRightCircle />
        </Link>
      </button>
    </div>
  )
}
export default ProjectItem
