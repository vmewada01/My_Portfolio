import { GitlabIcon as GitHub, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="text-center py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Vishal Mewada</h1>
      <h2 className="text-xl md:text-2xl text-gray-600 mb-6">Full Stack Developer</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mb-8">
        <a href="tel:+919826736077" className="flex items-center"><Phone className="mr-2" size={18} /> +91-9826736077</a>
        <a href="mailto:vishalmewada9826@gmail.com" className="flex items-center"><Mail className="mr-2" size={18} /> vishalmewada9826@gmail.com</a>
        <a href="https://linkedin.com/in/vishal" target="_blank" rel="noopener noreferrer" className="flex items-center"><Linkedin className="mr-2" size={18} /> LinkedIn</a>
        <span className="flex items-center"><MapPin className="mr-2" size={18} /> Gurugram, Haryana</span>
      </div>
    </section>
  )
}

