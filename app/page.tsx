import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="my-auto">
        <h1 className="text-4xl font-bold">Cory B Sorel</h1>
        <p className="pt-2">Developer | Full Stack | TypeScript</p>
        <a
          href="https://github.com/uncommon-carp"
          className="link link-accent link-hover mr-3"
        >
          Github
        </a>
        <a
          href="https://linkedin.com/in/corysorel"
          className="link link-accent link-hover"
        >
          LinkedIn
        </a>
      </div>
    </main>
  );
}
