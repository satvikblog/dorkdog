import React from 'react';
import { ChevronRight } from 'lucide-react';

interface QuerySectionProps {
  title: string;
  queries: Record<string, string>;
  onSearch: (query: string) => void;
  icon?: React.ReactNode;
}

export function QuerySection({ title, queries, onSearch, icon }: QuerySectionProps) {
  return (
    <div className="bg-[#0a0a0a] rounded-lg p-6 border border-[#00ff9d]/20
                    shadow-[0_0_15px_rgba(0,255,157,0.1)]
                    hover:shadow-[0_0_25px_rgba(0,255,157,0.2)]
                    transition-all duration-300
                    relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/5 via-transparent to-transparent"></div>
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h2 className="text-2xl font-bold text-[#00ff9d] cyber-text">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(queries).map(([label, query]) => (
            <button
              key={label}
              onClick={() => onSearch(query)}
              className="group flex items-center justify-between px-4 py-3 
                         bg-[#000000] rounded-lg
                         border border-[#00ff9d]/30
                         hover:border-[#00ff9d]
                         hover:shadow-[0_0_15px_rgba(0,255,157,0.3)]
                         transition-all duration-300
                         relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/0 via-[#00ff9d]/5 to-transparent 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300"></div>
              <span className="text-sm text-[#00ff9d] group-hover:text-[#00ff9d] relative">
                {label}
              </span>
              <ChevronRight className="w-4 h-4 text-[#00ff9d] opacity-0 
                                     group-hover:opacity-100 group-hover:translate-x-1
                                     transition-all duration-300 relative" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}