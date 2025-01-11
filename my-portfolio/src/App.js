// src/App.js
import React from 'react';
import Portfolio from './pages/portfolio'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white">
      <main className="flex flex-col w-full items-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Portfolio />
        </div>
      </main>
    </div>
  );
}

export default App;