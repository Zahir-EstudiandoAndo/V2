import { useState, useEffect } from 'react';
import type { Exam, ExamResult } from '../../types';
import { Clock, Trophy, Target, TrendingUp, BookOpen, ArrowRight, Calculator, BookOpen as BookIcon, Globe, Flask, Atom, Dna, Scroll } from '../icons';

interface DashboardProps {
  exams: Exam[];
  simulatorName: string;
  simulatorColor: string;
  history: ExamResult[];
  onStartExam: (examId: string) => void;
  onViewHistory: () => void;
  onBack: () => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  Clock,
  BookOpen,
  Calculator,
  Globe,
  Flask,
  Atom,
  Dna,
  Scroll,
  BookIcon,
  Target
};

export function Dashboard({ 
  exams, 
  simulatorName, 
  simulatorColor, 
  history, 
  onStartExam, 
  onViewHistory,
  onBack 
}: DashboardProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  
  const averageScore = history.length > 0
    ? Math.round(history.reduce((acc, r) => acc + (r.score / r.totalQuestions * 100), 0) / history.length)
    : 0;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(averageScore), 300);
    return () => clearTimeout(timer);
  }, [averageScore]);

  const fullExam = exams.find(e => e.difficulty === 'full');
  const practiceExams = exams.filter(e => e.difficulty !== 'full');

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900/50 border-b border-slate-800 sticky top-0 z-10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
              >
                ← Volver
              </button>
              <div>
                <h1 className={`text-2xl font-bold bg-gradient-to-r ${simulatorColor} bg-clip-text text-transparent`}>
                  {simulatorName}
                </h1>
                <p className="text-sm text-slate-400">Simulador de Examen de Admisión</p>
              </div>
            </div>
            <button
              onClick={onViewHistory}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-sm"
            >
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">Historial</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${simulatorColor} flex items-center justify-center`}>
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-slate-400">Promedio General</span>
            </div>
            <div className="text-3xl font-bold text-white">{animatedScore}%</div>
            <p className="text-sm text-slate-500 mt-1">Basado en {history.length} exámenes</p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-slate-400">Exámenes Completados</span>
            </div>
            <div className="text-3xl font-bold text-white">{history.length}</div>
            <p className="text-sm text-slate-500 mt-1">Total de simulacros</p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-slate-400">Tiempo de Estudio</span>
            </div>
            <div className="text-3xl font-bold text-white">
              {Math.round(history.reduce((acc, r) => acc + r.timeSpent, 0) / 60)}h
            </div>
            <p className="text-sm text-slate-500 mt-1">Tiempo total invertido</p>
          </div>
        </div>

        {/* Full Exam Card */}
        {fullExam && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              Examen Completo
            </h2>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8 hover:border-slate-600 transition-all cursor-pointer group"
                 onClick={() => onStartExam(fullExam.id)}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${simulatorColor} flex items-center justify-center`}>
                      {(() => {
                        const Icon = iconMap[fullExam.icon] || Trophy;
                        return <Icon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {fullExam.title}
                      </h3>
                      <p className="text-slate-400">{fullExam.description}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{fullExam.questionCount}</div>
                    <div className="text-xs text-slate-500">Preguntas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{Math.round(fullExam.timeLimit / 60)}h</div>
                    <div className="text-xs text-slate-500">Duración</div>
                  </div>
                  <button className={`px-6 py-3 bg-gradient-to-r ${simulatorColor} text-white rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center gap-2`}>
                    Iniciar
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Practice Exams Grid */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            Práctica por Área
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {practiceExams.map((exam) => {
              const Icon = iconMap[exam.icon] || BookOpen;
              return (
                <div
                  key={exam.id}
                  onClick={() => onStartExam(exam.id)}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-slate-600 hover:bg-slate-800/50 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      exam.difficulty === 'basic' ? 'bg-emerald-500/20 text-emerald-400' :
                      exam.difficulty === 'intermediate' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-rose-500/20 text-rose-400'
                    }`}>
                      {exam.difficulty === 'basic' ? 'Básico' : 
                       exam.difficulty === 'intermediate' ? 'Intermedio' : 'Avanzado'}
                    </span>
                  </div>
                  <h3 className="font-medium text-white mb-1 group-hover:text-emerald-400 transition-colors">
                    {exam.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">{exam.description}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      {exam.questionCount} preguntas
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {exam.timeLimit} min
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
