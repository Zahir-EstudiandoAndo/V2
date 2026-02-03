import { useState, useEffect } from 'react';
import type { Question, Reading, Exam } from '../../types';
import { Clock, ChevronLeft, ChevronRight, Flag, AlertCircle, BookOpen } from '../icons';

interface ExamViewProps {
  exam: Exam;
  questions: (Question & { reading?: Reading })[];
  simulatorColor: string;
  onFinish: (answers: Record<string, number>, timeSpent: number) => void;
  onCancel: () => void;
}

export function ExamView({ exam, questions, simulatorColor, onFinish, onCancel }: ExamViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(exam.timeLimit * 60);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [startTime] = useState(Date.now());

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const answeredCount = Object.keys(answers).length;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionIndex }));
  };

  const handleFlag = () => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestion.id)) {
        newSet.delete(currentQuestion.id);
      } else {
        newSet.add(currentQuestion.id);
      }
      return newSet;
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleFinish = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    onFinish(answers, timeSpent);
  };

  const jumpToQuestion = (index: number) => {
    setCurrentIndex(index);
  };

  const getOptionLetter = (index: number) => String.fromCharCode(65 + index);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Header */}
      <header className="bg-slate-900/80 border-b border-slate-800 sticky top-0 z-20 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowExitConfirm(true)}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
              >
                ← Salir
              </button>
              <div>
                <h1 className="font-semibold text-white">{exam.title}</h1>
                <p className="text-xs text-slate-400">Pregunta {currentIndex + 1} de {questions.length}</p>
              </div>
            </div>
            
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              timeRemaining < 300 ? 'bg-rose-500/20 text-rose-400 animate-pulse' : 'bg-slate-800 text-slate-300'
            }`}>
              <Clock className="w-4 h-4" />
              <span className="font-mono font-medium">{formatTime(timeRemaining)}</span>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-3 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${simulatorColor} transition-all duration-300`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Navigator - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 sticky top-24">
              <h3 className="text-sm font-medium text-slate-400 mb-3">Navegación</h3>
              <div className="grid grid-cols-5 gap-1">
                {questions.map((q, i) => (
                  <button
                    key={q.id}
                    onClick={() => jumpToQuestion(i)}
                    className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                      i === currentIndex
                        ? `bg-gradient-to-br ${simulatorColor} text-white`
                        : answers[q.id] !== undefined
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : flaggedQuestions.has(q.id)
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500/30" />
                  <span className="text-slate-400">Respondida</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-amber-500/20 border border-amber-500/30" />
                  <span className="text-slate-400">Marcada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-slate-800" />
                  <span className="text-slate-400">Sin responder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Question Content */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              {/* Reading if exists */}
              {currentQuestion.reading && (
                <div className="mb-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">
                      {currentQuestion.reading.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3">{currentQuestion.reading.title}</h3>
                  <div 
                    className="text-slate-300 text-sm leading-relaxed space-y-3"
                    dangerouslySetInnerHTML={{ __html: currentQuestion.reading.content }}
                  />
                </div>
              )}

              {/* Question */}
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-lg text-white leading-relaxed">
                    <span className="text-slate-500 mr-2">{currentIndex + 1}.</span>
                    {currentQuestion.text}
                  </h3>
                  <button
                    onClick={handleFlag}
                    className={`p-2 rounded-lg transition-colors ${
                      flaggedQuestions.has(currentQuestion.id)
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-slate-800 text-slate-400 hover:text-amber-400'
                    }`}
                  >
                    <Flag className="w-5 h-5" />
                  </button>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(i)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        answers[currentQuestion.id] === i
                          ? `border-emerald-500 bg-emerald-500/10`
                          : 'border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          answers[currentQuestion.id] === i
                            ? 'bg-emerald-500 text-white'
                            : 'bg-slate-700 text-slate-400'
                        }`}>
                          {getOptionLetter(i)}
                        </span>
                        <span className={`pt-1 ${
                          answers[currentQuestion.id] === i ? 'text-white' : 'text-slate-300'
                        }`}>
                          {option}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Anterior
                </button>

                <span className="text-sm text-slate-500">
                  {answeredCount} de {questions.length} respondidas
                </span>

                {currentIndex < questions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                  >
                    Siguiente
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    className={`flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r ${simulatorColor} text-white hover:opacity-90 transition-opacity`}
                  >
                    Finalizar
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Question Navigator */}
      <div className="lg:hidden bg-slate-900 border-t border-slate-800 p-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {questions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => jumpToQuestion(i)}
              className={`flex-shrink-0 w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                i === currentIndex
                  ? `bg-gradient-to-br ${simulatorColor} text-white`
                  : answers[q.id] !== undefined
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : flaggedQuestions.has(q.id)
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">¿Salir del examen?</h3>
            </div>
            <p className="text-slate-400 mb-6">
              Tu progreso se perderá si sales ahora. Has respondido {answeredCount} de {questions.length} preguntas.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
              >
                Continuar examen
              </button>
              <button
                onClick={onCancel}
                className="flex-1 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Need to import ArrowRight
import { ArrowRight } from '../icons';
