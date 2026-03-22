import React from 'react';
import { Wallet, User } from 'lucide-react';

export const TopNav: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full px-8 py-4 bg-surface-dim sticky top-0 z-50 border-b border-outline-variant/10">
      <div className="font-label font-bold text-lg uppercase tracking-widest text-on-surface">
        FINANCE_CORE_V1
      </div>
      
      <div className="flex gap-8 items-center">
        <nav className="hidden md:flex gap-10 items-center font-headline font-bold tracking-tight text-sm">
          <a href="#" className="text-outline hover:text-primary transition-colors">Dashboard</a>
          <a href="#" className="text-primary border-b-2 border-primary py-1">Sources</a>
          <a href="#" className="text-outline hover:text-primary transition-colors">Insights</a>
        </nav>
        
        <div className="flex gap-5 ml-6 items-center">
          <button className="text-primary hover:scale-110 transition-transform">
            <Wallet size={20} />
          </button>
          <button className="text-primary hover:scale-110 transition-transform">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};
