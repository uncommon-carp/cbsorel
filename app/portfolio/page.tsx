import ProjectCard from "./ProjectCard";
import fips from "../../public/fips.png";

const projects = [
  {
    title: "FIPS API 2.0",
    description:
      "A REST API providing FIPS County Codes and other information.",
    thumb: fips,
    liveUrl: "https://fips.cbsorel.com",
    repoUrl: "https://github.com/uncommon-carp/fips-2.0",
    techStack: ["Next.js", "Lambda", "DynamoDB", "Serverless"],
  },
  // Add more projects here
];

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
