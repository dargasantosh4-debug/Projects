import React from 'react';
import { ShieldCheck, Share2, ListTodo, Activity, Settings } from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { id: 'consent', label: 'Consent', icon: ShieldCheck, active: false },
  { id: 'sources', label: 'Sources', icon: Share2, active: true },
  { id: 'transactions', label: 'Transactions', icon: ListTodo, active: false },
  { id: 'health', label: 'Health', icon: Activity, active: false },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col h-screen fixed left-0 top-0 py-8 px-4 bg-surface-container-low w-64 z-40 border-r border-outline-variant/10">
      <div className="font-headline font-black text-xl mb-12 tracking-tighter px-4">
        ML_EDITOR_PRO
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ x: 4 }}
            className={`flex items-center px-4 py-3 gap-3 font-label text-[12px] uppercase tracking-wider cursor-pointer transition-all ${
              item.active 
                ? 'bg-surface-container-lowest text-primary font-bold border-l-4 border-primary' 
                : 'text-outline hover:bg-surface-container-highest'
            }`}
          >
            <item.icon size={18} strokeWidth={item.active ? 2.5 : 2} />
            <span>{item.label}</span>
          </motion.div>
        ))}
      </nav>

      <div className="mt-auto border-t border-outline-variant/20 pt-4 space-y-1">
        <div className="flex items-center px-4 py-3 gap-3 text-outline font-label text-[12px] uppercase tracking-wider hover:bg-surface-container-highest transition-all cursor-pointer">
          <Settings size={18} />
          <span>Settings</span>
        </div>
        <div className="px-4 py-2">
          <button className="w-full bg-primary text-on-primary font-label text-[10px] uppercase tracking-widest py-4 px-4 transition-all active:scale-[0.98] hover:bg-primary/90">
            Back to ML Loop
          </button>
        </div>
      </div>
    </aside>
  );
};
