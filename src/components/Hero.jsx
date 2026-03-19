export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm Lucky 👋
        </h1>

        <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
          Frontend Developer
        </h2>

        <p className="text-gray-600 mb-8">
          I build modern web applications using React and moden tools.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            View Projects
          </button>
          <button className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-200 transition">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
