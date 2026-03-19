export default function ProjectCard({ title, description }) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow hoer:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-blue-600 font-medium">View Project →</button>
    </div>
  );
}
