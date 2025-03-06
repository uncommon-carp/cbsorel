import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  thumb: StaticImageData;
  liveUrl: string;
  repoUrl?: string;
  techStack: string[];
}

export default function ProjectCard({
  title,
  description,
  thumb,
  liveUrl,
  repoUrl,
  techStack,
}: ProjectProps) {
  return (
    <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden p-4">
      <div className="relative w-full h-40">
        <Image
          src={thumb}
          alt={`${title} thumbnail`}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className="badge badge-outline">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          <Link
            href={liveUrl}
            className="btn btn-primary btn-sm"
            target="_blank"
          >
            Live Demo
          </Link>
          {repoUrl && (
            <Link
              href={repoUrl}
              className="btn btn-outline btn-sm"
              target="_blank"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
