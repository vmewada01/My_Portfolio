import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Vishal Mewada</Link>
        <ul className="flex space-x-4">
          <li><Link href="#experience" className="hover:text-blue-600">Experience</Link></li>
          <li><Link href="#projects" className="hover:text-blue-600">Projects</Link></li>
          <li><Link href="#skills" className="hover:text-blue-600">Skills</Link></li>
          <li><Link href="#contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

