import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stellar Learning Hub",
  description: "Learn Stellar blockchain development - tutorials, guides, and interactive examples",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Stellar Learning Hub</h1>
          <div className="space-x-4">
            <a href="#courses" className="text-white hover:text-yellow-300">Courses</a>
            <a href="#tutorials" className="text-white hover:text-yellow-300">Tutorials</a>
            <a href="#docs" className="text-white hover:text-yellow-300">Docs</a>
            <a href="#community" className="text-white hover:text-yellow-300">Community</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Master Stellar Blockchain Development
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Interactive tutorials, real-world examples, and hands-on projects to build on the Stellar network
          </p>
          <a 
            href="#courses" 
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition"
          >
            Start Learning
          </a>
        </section>

        <section id="courses" className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Stellar Basics</h3>
            <p className="text-blue-200 mb-4">
              Introduction to Stellar, accounts, transactions, and the Horizon API
            </p>
            <ul className="text-sm text-blue-300 space-y-1">
              <li>• Understanding XLM and Lumens</li>
              <li>• Creating and funding accounts</li>
              <li>• Building your first transaction</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Smart Contracts</h3>
            <p className="text-blue-200 mb-4">
              Rust-based smart contracts with Soroban on Stellar
            </p>
            <ul className="text-sm text-blue-300 space-y-1">
              <li>• Soroban fundamentals</li>
              <li>• Writing and testing contracts</li>
              <li>• Deployment and interaction</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-2">dApp Development</h3>
            <p className="text-blue-200 mb-4">
              Build complete decentralized applications on Stellar
            </p>
            <ul className="text-sm text-blue-300 space-y-1">
              <li>• Frontend integration with Freighter</li>
              <li>• Backend SDKs and APIs</li>
              <li>• Real-world project patterns</li>
            </ul>
          </div>
        </section>

        <section id="tutorials" className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Latest Tutorials</h3>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="text-lg font-semibold text-yellow-300">Building a Payment Splitter on Stellar</h4>
              <p className="text-blue-200 text-sm">Learn how to create a smart contract that automatically distributes payments</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="text-lg font-semibold text-yellow-300">Cross-Border Payments Demo</h4>
              <p className="text-blue-200 text-sm">Implement a complete cross-border payment flow using Stellar assets</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="text-lg font-semibold text-yellow-300">Stellar Anchor Integration</h4>
              <p className="text-blue-200 text-sm">Set up an anchor service for fiat on-ramp and off-ramp</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 border-t border-white/10">
        <p className="text-center text-blue-300">
          Built for the Stellar ecosystem • Open Source • Contribute on GitHub
        </p>
      </footer>
    </div>
  );
}