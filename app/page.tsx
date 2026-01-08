export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Mistake Pattern Agent</h1>
      <p className="text-gray-600 text-lg mb-8">
        Learn from your mistakes. Master your weak patterns.
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Submit a Mistake
        </button>
        <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition">
          View My Patterns
        </button>
      </div>
    </main>
  );
}
