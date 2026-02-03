export type AreaType = 'reading' | 'writing' | 'math' | 'english' | 'physics' | 'chemistry' | 'biology' | 'history';

export interface Exam {
  id: string;
  title: string;
  description: string;
  area: AreaType;
  difficulty: 'basic' | 'intermediate' | 'advanced' | 'full';
  timeLimit: number;
  questionCount: number;
  icon: string;
}

export interface Reading {
  id: string;
  title: string;
  type: string;
  content: string;
  area: AreaType;
}

export interface Question {
  id: string;
  readingId: string | null;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  area: AreaType;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuestionWithReading extends Question {
  reading?: Reading;
}

export interface UserAnswer {
  questionId: string;
  selectedOption: number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface ExamResult {
  examId: string;
  examName: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: number;
  answers: UserAnswer[];
  areaBreakdown: Record<string, { correct: number; total: number }>;
  completedAt: string;
}

export type ViewState = 'dashboard' | 'exam' | 'results' | 'study' | 'progress';
export type MobileTab = 'text' | 'question';

export interface SimulatorConfig {
  id: string;
  name: string;
  fullName: string;
  description: string;
  university: string;
  logo: string;
  color: string;
  totalQuestions: number;
  timeLimit: number;
  areas: string[];
  path: string;
  isLocked?: boolean;
  comingSoon?: boolean;
}
