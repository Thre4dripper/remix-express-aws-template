import React from 'react'

const NotFound = () => {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      {/* Floating Glass Panels */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="absolute h-[60vh] w-[60vw] transform rounded-3xl bg-white/5 backdrop-blur-3xl transition-transform duration-500 ease-in-out hover:translate-x-2 hover:translate-y-2"></div>
        <div className="absolute h-[50vh] w-[50vw] transform rounded-3xl bg-white/10 backdrop-blur-xl transition-transform duration-500 ease-in-out hover:scale-105"></div>
      </div>

      {/* Main Card */}
      <div className="hover:shadow-glow relative z-10 max-w-lg transform rounded-3xl border border-white/20 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-2xl transition-transform duration-500 hover:scale-105">
        <h1 className="neon-text text-8xl font-extrabold tracking-wide text-white">
          404
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          You’ve entered the wrong place.
        </p>
        <p className="text-md mt-2 text-gray-400">
          This page has been lost in cyberspace.
        </p>

        <div className="mt-6">
          <a
            href="/"
            className="hover:shadow-neon inline-block transform rounded-xl bg-white/20 px-6 py-2 text-lg font-medium text-white shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/30"
          >
            Return to Home Page
          </a>
        </div>

        {/* Floating Neon Glow Elements */}
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 opacity-30 blur-3xl transition-opacity duration-500 ease-in-out hover:opacity-50"></div>
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-purple-500/10 opacity-20 blur-2xl transition-opacity duration-500 ease-in-out hover:opacity-40"></div>
      </div>
    </div>
  )
}

export default NotFound
