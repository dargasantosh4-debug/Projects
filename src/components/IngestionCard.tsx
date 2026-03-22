import React from 'react';
import { motion } from 'motion/react';

interface IngestionCardProps {
  title: string;
  subtitle: string;
  status: 'CONNECTED' | 'PENDING' | 'IDLE';
  active?: boolean;
  type?: 'toggle' | 'auth';
}

export const IngestionCard: React.FC<IngestionCardProps> = ({ 
  title, 
  subtitle, 
  status, 
  active = false,
  type = 'toggle'
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-8 border-b-4 relative group transition-all ${
        active 
          ? 'bg-surface-container-lowest border-primary' 
          : 'bg-surface-container border-outline-variant'
      }`}
    >
      <div className="flex justify-between items-start mb-16">
        <div>
          <h3 className="font-headline font-black text-2xl uppercase tracking-tight">{title}</h3>
          <p className="font-label text-xs text-outline mt-1 uppercase tracking-wider">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-label text-[10px] text-outline tracking-widest">{status}</span>
          <div className={`w-2.5 h-2.5 ${status === 'CONNECTED' ? 'bg-primary' : 'bg-outline-variant'}`} />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-label text-[10px] uppercase tracking-widest text-outline">
          {type === 'toggle' ? 'Toggle State' : 'Authentication'}
        </span>
        <div 
          className={`w-12 h-6 flex items-center px-1 cursor-pointer transition-colors ${
            active ? 'bg-primary' : 'bg-surface-dim'
          }`}
        >
          <motion.div 
            animate={{ x: active ? 24 : 0 }}
            className={`w-4 h-4 bg-white`} 
          />
        </div>
      </div>
    </motion.div>
  );
};
