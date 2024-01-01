import Image from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";
import profile from "../public/cory.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex my-auto">
        <div>
          <Image
            src={profile}
            alt="Cory"
            width="125"
            className="mask mask-hexagon-2 mr-3"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">Cory B Sorel</h1>
          <p className="pt-2">Full Stack | TypeScript | React | GraphQL</p>
          <div className="mt-4">
            <Link href="/portfolio" className="mr-4 link-primary">
              Work &gt;
            </Link>
            <Link href="/portfolio" className="link-primary">
              Contact &gt;
            </Link>
          </div>
          <div className="flex flex-row-reverse mt-5">
            <a
              href="https://github.com/uncommon-carp"
              className="link link-accent link-hover ml-3"
            >
              <SiGithub size="2rem" />
            </a>
            <a
              href="https://linkedin.com/in/corysorel"
              className="link link-accent link-hover"
            >
              <SiLinkedin size="2rem" />
            </a>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0">
        <p className="text-sm">Built in Next.js and Tailwind | Hosted on AWS</p>
      </div>
    </main>
  );
}
