import { useState, useEffect, useCallback } from 'react';
import { Dashboard, ExamView, ResultsView, HistoryView } from '../../shared/components/simulator';
import type { ExamResult, Question, Exam } from '../../shared/types';
import { ipnExams, getIpnQuestionsWithReadings, getIpnExamById } from './data/ipnDatabase';

interface IpnSimulatorProps {
  onBack: () => void;
}

type ViewState = 'dashboard' | 'exam' | 'results' | 'history';

const areaLabels: Record<string, string> = {
  math: 'Matemáticas',
  physics: 'Física',
  chemistry: 'Química',
  biology: 'Biología',
  reading: 'Competencia Escrita y Lectora',
  history: 'Historia',
  english: 'Inglés'
};

const STORAGE_KEY = 'ipn_history';

export function IpnSimulator({ onBack }: IpnSimulatorProps) {
  const [view, setView] = useState<ViewState>('dashboard');
  const [currentExam, setCurrentExam] = useState<Exam | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState<(Question & { reading?: any })[]>([]);
  const [currentResult, setCurrentResult] = useState<ExamResult | null>(null);
  const [history, setHistory] = useState<ExamResult[]>([]);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading history:', e);
      }
    }
  }, []);

  // Save history to localStorage
  const saveHistory = useCallback((newHistory: ExamResult[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
    setHistory(newHistory);
  }, []);

  const handleStartExam = (examId: string) => {
    const exam = getIpnExamById(examId);
    if (exam) {
      const questions = getIpnQuestionsWithReadings(examId);
      // Shuffle questions for variety
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      setCurrentExam(exam);
      setCurrentQuestions(shuffled.slice(0, exam.questionCount));
      setView('exam');
    }
  };

  const handleFinishExam = (answers: Record<string, number>, timeSpent: number) => {
    if (!currentExam) return;

    // Calculate results
    let correctCount = 0;
    const areaBreakdown: Record<string, { correct: number; total: number }> = {};
    const userAnswers = [];

    for (const question of currentQuestions) {
      const isCorrect = answers[question.id] === question.correctAnswer;
      if (isCorrect) correctCount++;

      // Track by area
      if (!areaBreakdown[question.area]) {
        areaBreakdown[question.area] = { correct: 0, total: 0 };
      }
      areaBreakdown[question.area].total++;
      if (isCorrect) {
        areaBreakdown[question.area].correct++;
      }

      userAnswers.push({
        questionId: question.id,
        selectedOption: answers[question.id] ?? -1,
        isCorrect,
        timeSpent: 0
      });
    }

    const result: ExamResult = {
      examId: currentExam.id,
      examName: currentExam.title,
      score: correctCount,
      correctAnswers: correctCount,
      totalQuestions: currentQuestions.length,
      timeSpent,
      answers: userAnswers,
      areaBreakdown,
      completedAt: new Date().toISOString()
    };

    setCurrentResult(result);
    
    // Save to history
    const newHistory = [...history, result];
    saveHistory(newHistory);
    
    setView('results');
  };

  const handleRetry = () => {
    if (currentExam) {
      const questions = getIpnQuestionsWithReadings(currentExam.id);
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      setCurrentQuestions(shuffled.slice(0, currentExam.questionCount));
      setView('exam');
    }
  };

  const handleClearHistory = () => {
    saveHistory([]);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {view === 'dashboard' && (
        <Dashboard
          exams={ipnExams}
          simulatorName="IPN"
          simulatorColor="from-amber-400 to-amber-600"
          history={history}
          onStartExam={handleStartExam}
          onViewHistory={() => setView('history')}
          onBack={onBack}
        />
      )}

      {view === 'exam' && currentExam && (
        <ExamView
          exam={currentExam}
          questions={currentQuestions}
          simulatorColor="from-amber-400 to-amber-600"
          onFinish={handleFinishExam}
          onCancel={() => setView('dashboard')}
        />
      )}

      {view === 'results' && currentResult && (
        <ResultsView
          result={currentResult}
          questions={currentQuestions}
          simulatorName="IPN"
          simulatorColor="from-amber-400 to-amber-600"
          areaLabels={areaLabels}
          onRetry={handleRetry}
          onBack={() => setView('dashboard')}
        />
      )}

      {view === 'history' && (
        <HistoryView
          history={history}
          areaLabels={areaLabels}
          simulatorColor="from-amber-400 to-amber-600"
          onBack={() => setView('dashboard')}
          onClearHistory={handleClearHistory}
        />
      )}
    </div>
  );
}
