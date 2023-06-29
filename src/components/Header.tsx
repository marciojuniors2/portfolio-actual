import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  title: string
  path: string
  includes?: boolean
}

const NavLink = ({ title, path, includes = false }: Props) => {
  const pathname = usePathname()

  const isActive = includes ? pathname.includes(path) : pathname === path

  return (
    <Link href={path}>
      <p className={isActive ? 'text-green-500' : 'text-slate-600'}>{title}</p>
    </Link>
  )
}

function Header() {
  return (
    <header>
      <div className="absolute flex w-screen items-center bg-transparent">
        <ul className="flex gap-4">
          <NavLink title="Home" path="/" />
          <NavLink title="Projetos" path="/projetos" includes />
        </ul>
      </div>
    </header>
  )
}

export default Header
