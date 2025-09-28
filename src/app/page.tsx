'use client'


import Link from 'next/link'

export default function Home() {
  return (
    <div className=" min-h-screen bg-gray-900 text-white flex flex-col items-center p-8 sm:p-20 gap-16">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">OpenCurricula</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Building lessons for everyone.
        </p>
      </div>


      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="bg-gray-800 rounded-2xl p-6 shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Intuitive Curricula Design</h2>
          <p className="text-gray-400 text-sm">
            Drag, drop, and customize lessons to design curricula no matter the resources at your disposal.
          </p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Explore and Remix</h2>
          <p className="text-gray-400 text-sm">
            Browse a library of curricula created by educators worldwide and adapt them to your needs, free of charge.
          </p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Accessible Anywhere</h2>
          <p className="text-gray-400 text-sm">
            No paywalls, no barriers. Access and contribute to curricula from any device, anywhere in the world.
          </p>
        </div>
      </div>


      {/* Call to Action */}
      <div className="text-center max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
        <p className="text-gray-400 mb-6">
          Join the growing community of educators building open resources. Start creating lessons or explore existing ones.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/build">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-md font-semibold max-w-sm">
              Start Building
            </button>
          </Link>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-2xl shadow-md font-semibold max-w-sm">
            Explore Curriculum
          </button>
        </div>
      </div>


      {/* Footer */}
      <footer className="mt-auto text-gray-400 text-sm text-center pt-12">
        <p>Made for the 2025 WarriorHacks - Aditya Bhadra & Atharv Sondhi</p>
        <p>Lisenced under MIT License</p>
      </footer>
    </div>
  );
}
