export default function Projects() {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2">Flipkart-VMS</h3>
          <ul className="list-disc list-inside text-sm md:text-base">
            <li>Managed shipment videos and data using Golang and React.</li>
            <li>Used by Flipkart/Myntra for Seller Protection Fund (SPF).</li>
            <li>Optimized storage/retrieval for 10K+ users and 100TB+ data.</li>
            <li>Enhanced security with Vulnerability Assessment and Penetration Testing.</li>
            <li>Built interactive dashboards for real-time tracking.</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2">APS - Advanced Planning and Scheduling</h3>
          <ul className="list-disc list-inside text-sm md:text-base">
            <li>Created production management and monitoring tools with Golang and React.</li>
            <li>Developed real-time scheduling for manufacturing workflows.</li>
            <li>Integrated query management via Mailgun for notifications and tracking.</li>
            <li>Implemented custom order configurations for unique requirements.</li>
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2">Generative AI-based Room Interior Designing App</h3>
          <ul className="list-disc list-inside text-sm md:text-base">
            <li>Built frontend with React, TypeScript, and Ant Design for intuitive UI.</li>
            <li>Added dynamic components for real-time design visualization.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

