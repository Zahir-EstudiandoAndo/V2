import { useState } from 'react';
import type { Question, ExamResult } from '../../types';
import { Trophy, TrendingUp, CheckCircle, XCircle, AlertCircle, BookOpen, ChevronDown, ChevronUp, RotateCcw, ArrowLeft } from '../icons';

interface ResultsViewProps {
  result: ExamResult;
  questions: Question[];
  simulatorName: string;
  simulatorColor: string;
  areaLabels: Record<string, string>;
  onRetry: () => void;
  onBack: () => void;
}

export function ResultsView({ 
  result, 
  questions, 
  simulatorName, 
  simulatorColor, 
  areaLabels,
  onRetry, 
  onBack 
}: ResultsViewProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100);
  const isApproved = percentage >= 60;

  // Calculate area performance
  const areaPerformance = Object.entries(result.areaBreakdown).map(([area, stats]) => ({
    area,
    label: areaLabels[area] || area,
    ...stats,
    percentage: Math.round((stats.correct / stats.total) * 100)
  })).sort((a, b) => a.percentage - b.percentage);

  // Get weakest areas (below 60%)
  const weakAreas = areaPerformance.filter(a => a.percentage < 60);
  const strongAreas = areaPerformance.filter(a => a.percentage >= 80);

  // Get incorrect questions for review
  const incorrectAnswers = result.answers.filter(a => !a.isCorrect);
  const incorrectQuestions = incorrectAnswers.map(a => ({
    answer: a,
    question: questions.find(q => q.id === a.questionId)!
  })).filter(item => item.question);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getScoreMessage = () => {
    if (percentage >= 90) return { text: '¡Excelente!', color: 'text-emerald-400', bgColor: 'bg-emerald-500/20' };
    if (percentage >= 80) return { text: '¡Muy bien!', color: 'text-blue-400', bgColor: 'bg-blue-500/20' };
    if (percentage >= 70) return { text: '¡Bien hecho!', color: 'text-cyan-400', bgColor: 'bg-cyan-500/20' };
    if (percentage >= 60) return { text: 'Aprobado', color: 'text-amber-400', bgColor: 'bg-amber-500/20' };
    return { text: 'Necesitas practicar más', color: 'text-rose-400', bgColor: 'bg-rose-500/20' };
  };

  const scoreMessage = getScoreMessage();

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
              Volver al inicio
            </button>
            <h1 className={`text-xl font-bold bg-gradient-to-r ${simulatorColor} bg-clip-text text-transparent`}>
              Resultados del Examen
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Score Overview */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${scoreMessage.bgColor} mb-4`}>
                <Trophy className={`w-12 h-12 ${scoreMessage.color}`} />
              </div>
              <h2 className={`text-3xl font-bold ${scoreMessage.color} mb-2`}>
                {scoreMessage.text}
              </h2>
              <p className="text-slate-400">{simulatorName}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                <div className={`text-3xl font-bold ${isApproved ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {percentage}%
                </div>
                <div className="text-sm text-slate-500 mt-1">Calificación</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                <div className="text-3xl font-bold text-white">
                  {result.correctAnswers}/{result.totalQuestions}
                </div>
                <div className="text-sm text-slate-500 mt-1">Correctas</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                <div className="text-3xl font-bold text-white">
                  {formatTime(result.timeSpent)}
                </div>
                <div className="text-sm text-slate-500 mt-1">Tiempo</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-xl">
                <div className="text-3xl font-bold text-white">
                  {Math.round(result.timeSpent / result.totalQuestions)}s
                </div>
                <div className="text-sm text-slate-500 mt-1">Por pregunta</div>
              </div>
            </div>
          </div>

          {/* Areas to Improve */}
          {weakAreas.length > 0 && (
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-rose-400" />
                <h3 className="text-lg font-semibold text-white">Áreas que necesitas reforzar</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {weakAreas.map(area => (
                  <div key={area.area} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">{area.label}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-rose-500 rounded-full"
                          style={{ width: `${area.percentage}%` }}
                        />
                      </div>
                      <span className="text-rose-400 font-medium w-12 text-right">{area.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Strong Areas */}
          {strongAreas.length > 0 && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-semibold text-white">Tus fortalezas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {strongAreas.map(area => (
                  <span 
                    key={area.area}
                    className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium"
                  >
                    {area.label} ({area.percentage}%)
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Performance by Area */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              Desempeño por área
            </h3>
            <div className="space-y-4">
              {areaPerformance.map(area => (
                <div key={area.area} className="flex items-center gap-4">
                  <span className="text-slate-400 w-32 md:w-48 text-sm truncate">{area.label}</span>
                  <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        area.percentage >= 80 ? 'bg-emerald-500' :
                        area.percentage >= 60 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${area.percentage}%` }}
                    />
                  </div>
                  <span className={`text-sm font-medium w-12 text-right ${
                    area.percentage >= 80 ? 'text-emerald-400' :
                    area.percentage >= 60 ? 'text-amber-400' : 'text-rose-400'
                  }`}>
                    {area.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Question Review */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden mb-8">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="w-full p-6 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Revisar respuestas incorrectas</h3>
                <span className="px-2 py-1 bg-rose-500/20 text-rose-400 rounded-full text-sm">
                  {incorrectAnswers.length}
                </span>
              </div>
              {showDetails ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>
            
            {showDetails && (
              <div className="border-t border-slate-800 p-6 space-y-4">
                {incorrectQuestions.length === 0 ? (
                  <p className="text-center text-slate-400 py-4">¡Felicitaciones! No tuviste respuestas incorrectas.</p>
                ) : (
                  incorrectQuestions.map(({ answer, question }, index) => (
                    <div 
                      key={question.id}
                      className="border border-slate-700 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedQuestion(expandedQuestion === question.id ? null : question.id)}
                        className="w-full p-4 flex items-start gap-4 hover:bg-slate-800/50 transition-colors text-left"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center">
                          <XCircle className="w-4 h-4 text-rose-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white mb-2">
                            <span className="text-slate-500 mr-2">{index + 1}.</span>
                            {question.text}
                          </p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-rose-400">
                              Tu respuesta: {String.fromCharCode(65 + answer.selectedOption)}
                            </span>
                            <span className="text-emerald-400">
                              Correcta: {String.fromCharCode(65 + question.correctAnswer)}
                            </span>
                          </div>
                        </div>
                        {expandedQuestion === question.id ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                      </button>
                      
                      {expandedQuestion === question.id && (
                        <div className="border-t border-slate-700 p-4 bg-slate-800/30">
                          <div className="space-y-2 mb-4">
                            {question.options.map((option, i) => (
                              <div 
                                key={i}
                                className={`p-3 rounded-lg flex items-center gap-3 ${
                                  i === question.correctAnswer
                                    ? 'bg-emerald-500/20 border border-emerald-500/30'
                                    : i === answer.selectedOption
                                    ? 'bg-rose-500/20 border border-rose-500/30'
                                    : 'bg-slate-800/50'
                                }`}
                              >
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                                  i === question.correctAnswer
                                    ? 'bg-emerald-500 text-white'
                                    : i === answer.selectedOption
                                    ? 'bg-rose-500 text-white'
                                    : 'bg-slate-700 text-slate-400'
                                }`}>
                                  {String.fromCharCode(65 + i)}
                                </span>
                                <span className={i === question.correctAnswer ? 'text-emerald-300' : i === answer.selectedOption ? 'text-rose-300' : 'text-slate-400'}>
                                  {option}
                                </span>
                                {i === question.correctAnswer && <CheckCircle className="w-4 h-4 text-emerald-400 ml-auto" />}
                                {i === answer.selectedOption && i !== question.correctAnswer && <XCircle className="w-4 h-4 text-rose-400 ml-auto" />}
                              </div>
                            ))}
                          </div>
                          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                            <p className="text-sm text-blue-300">
                              <span className="font-medium">Explicación:</span> {question.explanation}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onRetry}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${simulatorColor} text-white rounded-xl font-medium hover:opacity-90 transition-opacity`}
            >
              <RotateCcw className="w-4 h-4" />
              Intentar de nuevo
            </button>
            <button
              onClick={onBack}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
