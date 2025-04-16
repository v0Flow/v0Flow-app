import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#031b2c] text-white font-sans">
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="bg-white text-[#031b2c] px-2 py-1 rounded">v0</span>
            <span>Flow Studio</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="#case-studies">Case Studies</Link>
            <Link href="#consultants">Consultants</Link>
            <Link href="#get-started">
              <span className="bg-teal-400 text-[#031b2c] px-4 py-2 rounded font-semibold">Get Started</span>
            </Link>
          </nav>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              From v0 to live <br /> in just <span className="text-teal-400">24 hours</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Transform your v0 ZIP prototypes into full-stack systems with our AI-driven deployment platform.
            </p>
            <Link href="#get-started">
              <span className="inline-block bg-teal-400 text-[#031b2c] px-6 py-3 rounded font-bold">Get Started</span>
            </Link>
          </div>
          <div className="border border-gray-600 rounded-xl p-6">
            <p className="font-semibold text-lg mb-4">Drag and drop or browse your v0 ZIP file</p>
            <div className="border border-dashed border-gray-400 p-10 rounded bg-[#062c45] text-center">
              📁 Upload Area Placeholder
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">System Description</p>
              <div className="bg-[#0a3a59] text-sm text-white p-3 rounded mt-2">
                A platform for NGOs to register, vet, and hire domestic workers.
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <Feature title="AI-Powered Automation" desc="Deploy your Supabase + Vercel stack with AI-generated schema and optional testing." />
          <Feature title="Streamlined Workflow" desc="Live preview, approve your system, and instantly push your code and database live." />
          <Feature title="Cost-Effective Launch" desc="Save months of dev time with ready apps in repurposed modules." />
        </div>

        <div id="case-studies" className="mt-24">
          <h2 className="text-2xl font-bold mb-6">Latest Case Study</h2>
          <div className="bg-[#062c45] p-6 rounded-xl flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-lg font-bold">
                <span className="bg-white text-[#031b2c] px-2 py-1 rounded">v0</span>
                Mjakazi Connect
              </div>
              <p className="text-gray-300">A hiring platform for domestic workers</p>
              <p className="text-sm mt-2">⏱️ 5 days &nbsp; | &nbsp; 🗃️ 12 tables</p>
            </div>
            <Link href="#">
              <span className="bg-teal-400 text-[#031b2c] px-4 py-2 rounded font-semibold">View Case Study</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-[#062c45] p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{desc}</p>
    </div>
  )
}
