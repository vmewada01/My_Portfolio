import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-6 md:py-8">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

