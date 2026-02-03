import { useState } from 'react';
import { ArrowRight, Lock, Clock, BookOpen, GraduationCap, Sparkles } from '../shared/components/icons';
import { simulators } from '../shared/data/simulators';
import type { SimulatorConfig } from '../shared/types';

interface MainPageProps {
  onSelectSimulator: (simulator: SimulatorConfig) => void;
}

export function MainPage({ onSelectSimulator }: MainPageProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">EstudiandoAndo</h1>
                <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">V2</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-slate-400">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Plataforma de simuladores universitarios</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">Prepárate para tu examen de admisión</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Simuladores para las
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              mejores universidades
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Practica con exámenes realistas, recibe retroalimentación detallada y mejora tu puntaje. 
            Cada simulador está diseñado según el formato oficial de cada universidad.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              250+ reactivos
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Tiempo real
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Retroalimentación inmediata
            </span>
          </div>
        </div>
      </section>

      {/* Simulators Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            Selecciona tu simulador
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {simulators.map((sim) => (
              <div
                key={sim.id}
                onMouseEnter={() => setHoveredId(sim.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative group rounded-2xl border transition-all duration-300 overflow-hidden ${
                  sim.isLocked
                    ? 'border-slate-700 bg-slate-900/50 cursor-not-allowed'
                    : 'border-slate-700 bg-slate-900/80 hover:border-emerald-500/50 hover:bg-slate-800/80 cursor-pointer'
                }`}
                onClick={() => !sim.isLocked && onSelectSimulator(sim)}
              >
                {/* Gradient overlay */}
                {!sim.isLocked && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${sim.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                )}

                <div className="relative p-6">
                  {/* Logo/Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold mb-4 ${
                    sim.isLocked
                      ? 'bg-slate-800 text-slate-500'
                      : `bg-gradient-to-br ${sim.color} text-white shadow-lg`
                  }`}>
                    {sim.isLocked ? <Lock className="w-6 h-6" /> : sim.logo}
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold text-white mb-1">{sim.name}</h4>
                  <p className="text-sm text-slate-400 mb-3">{sim.university}</p>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">{sim.description}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {sim.totalQuestions} reactivos
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {Math.floor(sim.timeLimit / 60)}h {sim.timeLimit % 60}m
                    </span>
                  </div>

                  {/* Areas */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {sim.areas.slice(0, 4).map((area, i) => (
                      <span
                        key={i}
                        className={`text-[10px] px-2 py-1 rounded-full ${
                          sim.isLocked
                            ? 'bg-slate-800 text-slate-500'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {area}
                      </span>
                    ))}
                    {sim.areas.length > 4 && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-slate-800 text-slate-500">
                        +{sim.areas.length - 4}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  {sim.isLocked ? (
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Lock className="w-4 h-4" />
                      <span>Próximamente</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      <span>Comenzar simulador</span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${hoveredId === sim.id ? 'translate-x-1' : ''}`} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EA</span>
            </div>
            <span className="text-slate-400 text-sm">EstudiandoAndo V2</span>
          </div>
          <p className="text-slate-600 text-sm">
            Plataforma de preparación para exámenes de admisión universitaria
          </p>
        </div>
      </footer>
    </div>
  );
}
