import React from 'react';
import { motion } from 'motion/react';
import { Upload, Info, CheckCircle2, PauseCircle } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { IngestionCard } from './components/IngestionCard';

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      
      <main className="ml-64 min-h-screen flex flex-col">
        <TopNav />
        
        <div className="p-12 max-w-7xl w-full mx-auto flex-1">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-16"
          >
            <h1 className="font-headline font-black text-7xl uppercase tracking-tighter text-primary mb-2">
              Data Ingestion
            </h1>
            <p className="font-label text-sm uppercase text-outline tracking-[0.2em]">
              Architectural Wireframe // v2.4.0-STABLE
            </p>
          </motion.div>

          <div className="grid grid-cols-12 gap-10 relative">
            {/* Annotation Layer: Blueprint Notes */}
            <div className="absolute -left-32 top-48 hidden xl:block">
              <div className="bg-secondary-container p-4 font-label text-[10px] uppercase leading-tight w-28 blueprint-line shadow-sm">
                Backend Mapping: NLP Pipeline
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* Bento Grid Layout for Sources */}
              <div className="grid grid-cols-2 gap-6">
                <IngestionCard 
                  title="SMS Sync" 
                  subtitle="Local device ingestion" 
                  status="CONNECTED" 
                  active={true}
                />
                <IngestionCard 
                  title="API Connect" 
                  subtitle="Direct Bank Linkage" 
                  status="PENDING" 
                  active={false}
                  type="auth"
                />

                {/* CSV Upload Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="col-span-2 bg-surface-container-high p-10 flex flex-col md:flex-row justify-between items-center gap-10 border-l-8 border-primary/10"
                >
                  <div className="flex-1">
                    <h3 className="font-headline font-bold text-3xl uppercase tracking-tight mb-3">Manual CSV Ledger</h3>
                    <p className="font-body text-sm text-on-surface-variant max-w-md leading-relaxed">
                      Import legacy financial data directly from institutional exports. 
                      Supports .csv, .xlsx, and .json formats with automated schema detection.
                    </p>
                  </div>
                  <div className="w-full md:w-auto">
                    <button className="w-full md:w-72 border-2 border-primary py-5 px-8 font-label font-bold text-xs uppercase tracking-widest flex items-center justify-between hover:bg-primary hover:text-on-primary transition-all group">
                      <span>Upload File</span>
                      <Upload size={18} className="group-hover:translate-y-[-2px] transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Technical Footer Annotation */}
              <div className="pt-16 border-t border-outline-variant/30 flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="bg-secondary-container px-4 py-1.5 font-label text-[10px] uppercase tracking-tighter font-bold">
                    Annotate: Flow-1
                  </div>
                  <div className="w-40 h-[1px] bg-outline-variant/50"></div>
                  <div className="font-label text-[10px] uppercase text-outline tracking-widest">
                    Select -{'>'} Sync Workflow
                  </div>
                </div>
                <div className="font-label text-[10px] text-outline uppercase tracking-[0.2em] opacity-60">
                  System Ver: STABLE_2.4
                </div>
              </div>
            </div>

            {/* Sidebar Info/Metadata Panel */}
            <div className="col-span-12 lg:col-span-4 space-y-10">
              {/* Status Inventory Card */}
              <div className="bg-surface-container-lowest p-10 border border-outline-variant/10">
                <h4 className="font-label text-xs font-bold uppercase tracking-[0.2em] mb-10 border-b border-outline-variant/20 pb-3">
                  Status Inventory
                </h4>
                <ul className="space-y-8">
                  <li className="flex items-center justify-between group cursor-help">
                    <div className="flex items-center gap-4">
                      <div className="w-1.5 h-10 bg-primary group-hover:h-12 transition-all"></div>
                      <div>
                        <p className="font-headline font-bold text-sm uppercase tracking-tight">Active Links</p>
                        <p className="font-label text-[10px] text-outline uppercase tracking-wider">4 nodes connected</p>
                      </div>
                    </div>
                    <CheckCircle2 size={18} className="text-primary" />
                  </li>
                  <li className="flex items-center justify-between group cursor-help">
                    <div className="flex items-center gap-4">
                      <div className="w-1.5 h-10 bg-surface-dim group-hover:h-12 transition-all"></div>
                      <div>
                        <p className="font-headline font-bold text-sm uppercase tracking-tight">Background Sync</p>
                        <p className="font-label text-[10px] text-outline uppercase tracking-wider">Idle / Standby</p>
                      </div>
                    </div>
                    <PauseCircle size={18} className="text-outline" />
                  </li>
                </ul>
              </div>

              {/* Architect Note */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-secondary-container border-l-8 border-primary shadow-sm"
              >
                <div className="font-label text-[10px] font-black uppercase mb-5 tracking-[0.2em] flex items-center gap-2">
                  <Info size={14} />
                  Architect Note
                </div>
                <p className="font-body text-xs text-on-secondary-container leading-relaxed font-medium">
                  Data ingestion uses an asymmetric polling mechanism. NLP services are mapped to CSV headers 
                  during initial sync to ensure categorical integrity and prevent schema drift.
                </p>
              </motion.div>

              {/* Interaction Flow Diagram */}
              <div className="p-10 bg-surface-container-high relative overflow-hidden h-56 border border-outline-variant/10">
                <div className="font-label text-[10px] uppercase text-outline mb-6 tracking-widest">Interaction Flow Map</div>
                <div className="flex flex-col gap-3">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '66%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-2.5 bg-primary" 
                  />
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                    className="h-2.5 bg-surface-dim" 
                  />
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '45%' }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="h-2.5 bg-outline" 
                  />
                </div>
                <div className="absolute bottom-6 right-6 flex gap-1.5">
                  <div className="w-5 h-5 bg-primary" />
                  <div className="w-5 h-5 bg-outline" />
                  <div className="w-5 h-5 bg-surface-dim" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
