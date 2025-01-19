export default function Contact() {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-2">Feel free to reach out to me for any opportunities or collaborations:</p>
        <ul className="list-disc list-inside">
          <li>Email: <a href="mailto:vishalmewada9826@gmail.com" className="text-blue-600 hover:underline">vishalmewada9826@gmail.com</a></li>
          <li>Phone: <a href="tel:+919826736077" className="text-blue-600 hover:underline">+91-9826736077</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/vishal" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/vishal</a></li>
        </ul>
      </div>
    </section>
  )
}

