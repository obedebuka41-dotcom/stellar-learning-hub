import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stellar Learning Hub",
  description: "Learn Stellar blockchain development - tutorials, guides, and interactive examples",
};

const courses = [
  {
    title: "Stellar Basics",
    description: "Introduction to Stellar, accounts, transactions, and the Horizon API",
    items: [
      "Understanding XLM and Lumens",
      "Creating and funding accounts",
      "Building your first transaction",
    ],
  },
  {
    title: "Smart Contracts",
    description: "Rust-based smart contracts with Soroban on Stellar",
    items: [
      "Soroban fundamentals",
      "Writing and testing contracts",
      "Deployment and interaction",
    ],
  },
  {
    title: "dApp Development",
    description: "Build complete decentralized applications on Stellar",
    items: [
      "Frontend integration with Freighter",
      "Backend SDKs and APIs",
      "Real-world project patterns",
    ],
  },
];

const tutorials = [
  {
    title: "Building a Payment Splitter on Stellar",
    description: "Learn how to create a smart contract that automatically distributes payments",
  },
  {
    title: "Cross-Border Payments Demo",
    description: "Implement a complete cross-border payment flow using Stellar assets",
  },
  {
    title: "Stellar Anchor Integration",
    description: "Set up an anchor service for fiat on-ramp and off-ramp",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Stellar Learning Hub</h1>
          <div className="space-x-4">
            <a href="#courses" className="text-white hover:text-yellow-300">
              Courses
            </a>
            <a href="#tutorials" className="text-white hover:text-yellow-300">
              Tutorials
            </a>
            <a href="#docs" className="text-white hover:text-yellow-300">
              Docs
            </a>
            <a href="#community" className="text-white hover:text-yellow-300">
              Community
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-white">
            Master Stellar Blockchain Development
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-200">
            Interactive tutorials, real-world examples, and hands-on projects to build on the Stellar network
          </p>
          <a
            href="#courses"
            className="inline-block rounded-full bg-yellow-400 px-8 py-3 text-lg font-bold text-gray-900 transition hover:bg-yellow-300"
          >
            Start Learning
          </a>
        </section>

        <section id="courses" className="mb-16 grid gap-8 md:grid-cols-3">
          {courses.map((course) => (
            <div key={course.title} className="rounded-xl bg-white/10 p-6 backdrop-blur">
              <h3 className="mb-2 text-2xl font-bold text-white">{course.title}</h3>
              <p className="mb-4 text-blue-200">{course.description}</p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-blue-300">
                {course.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="tutorials" className="mb-16">
          <h3 className="mb-8 text-3xl font-bold text-white">Latest Tutorials</h3>
          <div className="space-y-4">
            {tutorials.map((tutorial) => (
              <div key={tutorial.title} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h4 className="text-lg font-semibold text-yellow-300">{tutorial.title}</h4>
                <p className="text-sm text-blue-200">{tutorial.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="container mx-auto border-t border-white/10 px-4 py-8">
        <p className="text-center text-blue-300">
          Built for the Stellar ecosystem | Open Source | Contribute on GitHub
        </p>
      </footer>
    </div>
  );
}
