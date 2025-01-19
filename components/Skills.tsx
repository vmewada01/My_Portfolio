export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
        <div className="mb-4">
          <h3 className="text-md md:text-lg font-semibold mb-2">Frontend</h3>
          <p className="text-sm md:text-base">HTML, CSS, JavaScript, TypeScript, React, Next.js 14, Axios, Index DB, Chrome Extension, Ant Design and shadcn/ui</p>
        </div>
        <div className="mb-4">
          <h3 className="text-md md:text-lg font-semibold mb-2">Backend</h3>
          <p className="text-sm md:text-base">Golang</p>
        </div>
        <div className="mb-4">
          <h3 className="text-md md:text-lg font-semibold mb-2">DBMS</h3>
          <p className="text-sm md:text-base">SQL, Supabase</p>
        </div>
        <div>
          <h3 className="text-md md:text-lg font-semibold mb-2">DevOps</h3>
          <p className="text-sm md:text-base">AWS, NGINX</p>
        </div>
      </div>
    </section>
  )
}

