/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Moon, Sun, Scroll, User, Calendar, ChevronRight, RefreshCw, AlertTriangle, Heart, ShieldAlert, Briefcase } from 'lucide-react';
import { Day, Pasaran, DAY_NEPTU, PASARAN_NEPTU, WETON_INTERPRETATIONS } from './types';

export default function App() {
  const [stage, setStage] = useState<'splash' | 'dashboard' | 'result'>('splash');
  const [name, setName] = useState('');
  const [day, setDay] = useState<Day>('Minggu');
  const [pasaran, setPasaran] = useState<Pasaran>('Legi');
  const [result, setResult] = useState<{ neptu: number; character: string; fortune: string; unluckyDays: string; compatibleMatches: string; goodJobs: string } | null>(null);

  useEffect(() => {
    if (stage === 'splash') {
      const timer = setTimeout(() => {
        setStage('dashboard');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const neptuDay = DAY_NEPTU[day];
    const neptuPasaran = PASARAN_NEPTU[pasaran];
    const totalNeptu = neptuDay + neptuPasaran;
    
    const interpretation = WETON_INTERPRETATIONS[totalNeptu] || {
      character: "Memiliki kepribadian yang unik dan seimbang.",
      fortune: "Keberuntungan akan selalu menyertai langkah Anda.",
      unluckyDays: "Hari-hari tertentu yang perlu kewaspadaan.",
      compatibleMatches: "Kecocokan dengan berbagai neptu.",
      goodJobs: "Pekerjaan yang mengandalkan ketekunan dan kejujuran."
    };

    setResult({
      neptu: totalNeptu,
      ...interpretation
    });
    setStage('result');
  };

  const reset = () => {
    setStage('dashboard');
    setResult(null);
  };

  return (
    <div className="min-h-screen batik-pattern flex flex-col items-center justify-center p-4 overflow-y-auto py-12">
      <AnimatePresence mode="wait">
        {stage === 'splash' && (
          <motion.div
            key="splash"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 mx-auto mb-8 relative flex items-center justify-center"
            >
              <div className="absolute inset-0 gold-gradient rounded-full blur-xl opacity-20 animate-pulse" />
              <Sparkles className="w-20 h-20 text-jawa-gold" />
            </motion.div>
            <h1 className="text-5xl font-serif font-bold tracking-tighter text-jawa-gold mb-2">
              PRIMBON JATI
            </h1>
            <p className="text-stone-400 font-light tracking-widest uppercase text-sm">
              Menyingkap Rahasia Weton Jawa
            </p>
          </motion.div>
        )}

        {stage === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-md glass-card p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Scroll className="w-24 h-24 text-jawa-gold" />
            </div>

            <h2 className="text-3xl font-serif text-jawa-gold mb-6 border-b border-white/10 pb-4">
              Ramalan Weton
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center text-xs uppercase tracking-widest text-stone-400 mb-2">
                  <User className="w-3 h-3 mr-2" /> Nama Lengkap
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-jawa-gold/50 transition-colors text-stone-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center text-xs uppercase tracking-widest text-stone-400 mb-2">
                    <Calendar className="w-3 h-3 mr-2" /> Hari Lahir
                  </label>
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value as Day)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-jawa-gold/50 transition-colors text-stone-100 appearance-none"
                  >
                    {Object.keys(DAY_NEPTU).map((d) => (
                      <option key={d} value={d} className="bg-jawa-deep">{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="flex items-center text-xs uppercase tracking-widest text-stone-400 mb-2">
                    <Moon className="w-3 h-3 mr-2" /> Pasaran
                  </label>
                  <select
                    value={pasaran}
                    onChange={(e) => setPasaran(e.target.value as Pasaran)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-jawa-gold/50 transition-colors text-stone-100 appearance-none"
                  >
                    {Object.keys(PASARAN_NEPTU).map((p) => (
                      <option key={p} value={p} className="bg-jawa-deep">{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full gold-gradient text-jawa-brown font-bold py-4 rounded-xl shadow-lg hover:shadow-jawa-gold/20 transition-all flex items-center justify-center group"
              >
                Lihat Ramalan <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        )}

        {stage === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg glass-card p-8 shadow-2xl relative"
          >
            <div className="text-center mb-8">
              <div className="inline-block p-4 rounded-full bg-jawa-gold/10 mb-4">
                <Sun className="w-12 h-12 text-jawa-gold" />
              </div>
              <h3 className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-2">Hasil Ramalan Untuk</h3>
              <h2 className="text-4xl font-serif text-jawa-gold font-bold">{name}</h2>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 p-4 rounded-2xl text-center border border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Weton</p>
                <p className="text-lg font-serif text-jawa-gold">{day} {pasaran}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl text-center border border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Neptu</p>
                <p className="text-2xl font-bold text-jawa-gold">{result.neptu}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl text-center border border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Elemen</p>
                <p className="text-lg font-serif text-jawa-gold">Tanah</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 gold-gradient rounded-full opacity-50" />
                <h4 className="text-sm font-bold text-jawa-gold uppercase tracking-widest mb-2 flex items-center">
                  <Scroll className="w-4 h-4 mr-2" /> Karakter & Sifat
                </h4>
                <p className="text-stone-300 leading-relaxed italic">
                  "{result.character}"
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 gold-gradient rounded-full opacity-50" />
                <h4 className="text-sm font-bold text-jawa-gold uppercase tracking-widest mb-2 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" /> Rezeki & Keberuntungan
                </h4>
                <p className="text-stone-300 leading-relaxed">
                  {result.fortune}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-500 rounded-full opacity-50" />
                  <h4 className="text-sm font-bold text-red-400 uppercase tracking-widest mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" /> Hari Naas
                  </h4>
                  <p className="text-stone-300 text-sm">
                    {result.unluckyDays}
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-pink-500 rounded-full opacity-50" />
                  <h4 className="text-sm font-bold text-pink-400 uppercase tracking-widest mb-2 flex items-center">
                    <Heart className="w-4 h-4 mr-2" /> Jodoh
                  </h4>
                  <p className="text-stone-300 text-sm">
                    {result.compatibleMatches}
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-emerald-500 rounded-full opacity-50" />
                <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" /> Pekerjaan yang Baik
                </h4>
                <p className="text-stone-300 text-sm">
                  {result.goodJobs}
                </p>
              </div>
            </div>

            <button
              onClick={reset}
              className="mt-10 w-full border border-jawa-gold/30 text-jawa-gold hover:bg-jawa-gold/10 transition-colors py-3 rounded-xl flex items-center justify-center text-sm font-bold uppercase tracking-widest"
            >
              <RefreshCw className="w-4 h-4 mr-2" /> Ramal Lagi
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="fixed bottom-4 text-[10px] text-stone-600 uppercase tracking-[0.4em] pointer-events-none">
        Warisan Leluhur &copy; 2026
      </footer>
    </div>
  );
}
