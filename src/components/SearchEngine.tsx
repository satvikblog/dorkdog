import React, { useState, useEffect } from 'react';
import { Search, Zap, Shield, Database, Terminal, FileText, Image, Video, Code } from 'lucide-react'; // Icons from React Icons
import { QuerySection } from './QuerySection';
import { queries } from '../data/queries';
import { directoryQueries } from '../data/directoryQueries';
import { formatSearchQuery } from '../utils/searchUtils';

export function SearchEngine() {
  const [input, setInput] = useState('');
  const [iconIndex, setIconIndex] = useState(0);

  const icons = [
    <Search className="w-5 h-5 text-[#00ff9d]" />,
    <Zap className="w-5 h-5 text-[#00ff9d]" />,
    <Shield className="w-5 h-5 text-[#00ff9d]" />,
    <Database className="w-5 h-5 text-[#00ff9d]" />,
    <Terminal className="w-5 h-5 text-[#00ff9d]" />,
    <FileText className="w-5 h-5 text-[#00ff9d]" />,
    <Image className="w-5 h-5 text-[#00ff9d]" />,
    <Video className="w-5 h-5 text-[#00ff9d]" />,
    <Code className="w-5 h-5 text-[#00ff9d]" />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2500); // Change icon every 2.5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleSearch = (query: string) => {
    const formattedQuery = formatSearchQuery(query, input);
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(formattedQuery)}`;
    window.open(searchUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#00ff9d] font-mono relative overflow-hidden">
      {/* Matrix-style background animation */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="matrix-bg"></div>
      </div>

      {/* Responsive Header */}
      <header className="fixed top-0 left-0 w-full bg-[#000000]/50 backdrop-blur-md border-b border-[#00ff9d] z-50">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between py-4 md:py-6">
          <div className="flex items-center space-x-4">
            <div className="glitch-container">{icons[iconIndex]}</div>
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#00ff9d] whitespace-nowrap">DorkDog</h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0">
            <a
              href="mailto:contact@satvik.live"
              className="text-[#00ff9d] hover:text-[#00ccff] text-sm sm:text-base transition duration-300"
            >
              Contact the Developer
            </a>
            <span className="hidden sm:block text-[#00ff9d]">|</span>
            <a
              href="https://satvik.live"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ff9d] hover:text-[#00ccff] text-sm sm:text-base transition duration-300"
            >
              More Tools from Developer
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 relative z-10 pt-26">
        <div className="text-center mb-16">
          <div className="glitch-container">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 glitch-text">DorkDog</h1>
          </div>
          <p className="text-xl md:text-2xl text-[#00ccff] cyber-subtitle">Advanced Search Engine for Hackers ✨</p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative group">
            <div className="cyber-input-glow absolute -inset-1 bg-gradient-to-r from-[#00ff9d] via-[#00ccff] to-[#00ff9d] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center">
              <Terminal className="absolute left-4 text-[#00ff9d] w-5 h-5" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Domain or Keyword (e.g., example.com or vulnerability)"
                className="w-full pl-12 pr-12 py-4 bg-[#0a0a0a] border-2 border-[#00ff9d] 
                  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ff9d] 
                  text-[#00ff9d] placeholder-[#00ff9d]/50
                  shadow-[0_0_15px_rgba(0,255,157,0.3)]
                  group-hover:shadow-[0_0_25px_rgba(0,255,157,0.5)]
                  transition-all duration-300"
              />
              <Search className="absolute right-4 text-[#00ff9d] w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        <div className="grid gap-12">
          {Object.entries(directoryQueries).map(([category, categoryQueries]) => (
            <QuerySection
              key={category}
              title={category}
              queries={categoryQueries}
              onSearch={handleSearch}
              icon={<Database className="w-6 h-6 text-[#00ff9d]" />}
            />
          ))}
          {Object.entries(queries).map(([category, categoryQueries]) => (
            <QuerySection
              key={category}
              title={category}
              queries={categoryQueries}
              onSearch={handleSearch}
              icon={
                category.includes('Vulnerabilities') ? (
                  <Shield className="w-6 h-6 text-[#00ff9d]" />
                ) : (
                  <Zap className="w-6 h-6 text-[#00ff9d]" />
                )
              }
            />
          ))}
        </div>

        <footer className="text-center mt-20 px-4 text-[#00ccff]">
          <p className="text-xs sm:text-sm md:text-base">
            Crafted with{' '}
            <span className="text-[#00ff9d] animate-pulse">❤</span>{' '}
            by{' '}
            <a
              href="https://satvik.live"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ff9d] font-bold underline hover:text-[#00ccff] transition"
            >
              Satvik Vemulapalli
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}