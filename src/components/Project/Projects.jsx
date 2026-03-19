import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Weather App"
            description="React app that fetches real-time weather data from an API"
          />
          <ProjectCard
            title="Todo App"
            description="Task manager ussing LocalStorage and Javascript"
          />
          <ProjectCard
            title="React Dashboard"
            description="Dashboard UI with cards, sidebar, and routing"
          />
        </div>
      </div>
    </section>
  );
}
