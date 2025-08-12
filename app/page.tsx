export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">🚀</h1>
        <h1 className="text-4xl font-bold mb-4">App Docker Swarm Demo</h1>
        <p className="text-xl mb-8">Aplicação rodando no Docker Swarm!</p>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
          <p className="text-lg">✅ Next.js 14</p>
          <p className="text-lg">✅ TypeScript</p>
          <p className="text-lg">✅ Docker Swarm</p>
        </div>
      </div>
    </main>
  )
}
