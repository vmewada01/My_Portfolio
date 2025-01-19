export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Frontend</h3>
          <p>HTML, CSS, JavaScript, TypeScript, React, Next.js 14, Axios, Index DB, Chrome Extension, Ant Design and shadcn/ui</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Backend</h3>
          <p>Golang</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">DBMS</h3>
          <p>SQL, Supabase</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">DevOps</h3>
          <p>AWS, NGINX</p>
        </div>
      </div>
    </section>
  )
}

