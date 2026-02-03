import { useState } from 'react';
import type { ExamResult } from '../../types';
import { TrendingUp, Calendar, Clock, Target, ArrowLeft, Trash2, ChevronDown, ChevronUp } from '../icons';

interface HistoryViewProps {
  history: ExamResult[];
  areaLabels: Record<string, string>;
  simulatorColor: string;
  onBack: () => void;
  onClearHistory: () => void;
}

export function HistoryView({ history, areaLabels, simulatorColor, onBack, onClearHistory }: HistoryViewProps) {
  const [expandedResult, setExpandedResult] = useState<string | null>(null);
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  const sortedHistory = [...history].sort((a, b) => 
    new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  if (history.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950">
        <header className="bg-slate-900/50 border-b border-slate-800">
          <div className="container mx-auto px-4 py-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </button>
          </div>
        </header>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-slate-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Sin historial</h2>
            <p className="text-slate-400 mb-6">Aún no has completado ningún examen. ¡Comienza a practicar!</p>
            <button
              onClick={onBack}
              className={`px-6 py-3 bg-gradient-to-r ${simulatorColor} text-white rounded-xl font-medium hover:opacity-90 transition-opacity`}
            >
              Ir al simulador
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900/50 border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </button>
            <h1 className="text-xl font-bold text-white">Historial de Exámenes</h1>
            <button
              onClick={() => setShowConfirmClear(true)}
              className="p-2 text-slate-400 hover:text-rose-400 transition-colors"
              title="Borrar historial"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-white">{history.length}</div>
            <div className="text-sm text-slate-500">Exámenes</div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-emerald-400">
              {Math.round(history.reduce((acc, r) => acc + (r.score / r.totalQuestions * 100), 0) / history.length)}%
            </div>
            <div className="text-sm text-slate-500">Promedio</div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-white">
              {Math.round(history.reduce((acc, r) => acc + r.timeSpent, 0) / history.length / 60)}m
            </div>
            <div className="text-sm text-slate-500">Tiempo promedio</div>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
            <div className="text-2xl font-bold text-white">
              {history.filter(r => (r.score / r.totalQuestions * 100) >= 60).length}
            </div>
            <div className="text-sm text-slate-500">Aprobados</div>
          </div>
        </div>

        {/* History List */}
        <div className="space-y-4">
          {sortedHistory.map((result) => {
            const percentage = Math.round((result.score / result.totalQuestions) * 100);
            const isExpanded = expandedResult === result.completedAt;
            
            return (
              <div 
                key={result.completedAt}
                className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedResult(isExpanded ? null : result.completedAt)}
                  className="w-full p-4 md:p-6 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      percentage >= 60 ? 'bg-emerald-500/20' : 'bg-rose-500/20'
                    }`}>
                      <span className={`text-lg font-bold ${
                        percentage >= 60 ? 'text-emerald-400' : 'text-rose-400'
                      }`}>
                        {percentage}%
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-white">{result.examName}</h3>
                      <div className="flex items-center gap-3 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(result.completedAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-4 text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        {result.correctAnswers}/{result.totalQuestions}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {formatTime(result.timeSpent)}
                      </span>
                    </div>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-slate-800 p-4 md:p-6">
                    <h4 className="text-sm font-medium text-slate-400 mb-3">Desempeño por área</h4>
                    <div className="space-y-2">
                      {Object.entries(result.areaBreakdown).map(([area, stats]) => {
                        const areaPercentage = Math.round((stats.correct / stats.total) * 100);
                        return (
                          <div key={area} className="flex items-center gap-4">
                            <span className="text-slate-400 w-32 md:w-48 text-sm truncate">
                              {areaLabels[area] || area}
                            </span>
                            <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  areaPercentage >= 80 ? 'bg-emerald-500' :
                                  areaPercentage >= 60 ? 'bg-amber-500' : 'bg-rose-500'
                                }`}
                                style={{ width: `${areaPercentage}%` }}
                              />
                            </div>
                            <span className={`text-sm font-medium w-12 text-right ${
                              areaPercentage >= 80 ? 'text-emerald-400' :
                              areaPercentage >= 60 ? 'text-amber-400' : 'text-rose-400'
                            }`}>
                              {areaPercentage}%
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Confirm Clear Modal */}
      {showConfirmClear && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-white mb-4">¿Borrar historial?</h3>
            <p className="text-slate-400 mb-6">
              Esta acción eliminará permanentemente todos tus resultados. No se puede deshacer.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmClear(false)}
                className="flex-1 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  onClearHistory();
                  setShowConfirmClear(false);
                }}
                className="flex-1 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
