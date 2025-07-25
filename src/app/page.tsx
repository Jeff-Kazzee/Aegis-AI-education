export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Project Aegis
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Empowering the working class with critical, model-agnostic AI literacy
        </p>
        <div className="prose lg:prose-xl mx-auto">
          <p>
            Welcome to Project Aegis, a trusted, hype-free, and pro-labor alternative 
            to mainstream AI education. Our mission is to provide the practical skills 
            and critical thinking necessary for workers to navigate the AI transition 
            with agency and power.
          </p>
          <div className="mt-8 space-x-4">
            <a href="/course" className="btn-primary">
              Start Learning
            </a>
            <a href="/posts" className="btn-secondary">
              Read Posts
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}