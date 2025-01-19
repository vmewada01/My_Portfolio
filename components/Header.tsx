import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <Link href="/" className="text-xl font-bold">Vishal Mewada</Link>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center w-full md:w-auto mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4`}>
          <li><Link href="#experience" className="block py-2 hover:text-blue-600">Experience</Link></li>
          <li><Link href="#projects" className="block py-2 hover:text-blue-600">Projects</Link></li>
          <li><Link href="#skills" className="block py-2 hover:text-blue-600">Skills</Link></li>
          <li><Link href="#contact" className="block py-2 hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

