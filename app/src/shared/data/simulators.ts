import type { SimulatorConfig } from '../types';

export const simulators: SimulatorConfig[] = [
  {
    id: 'exani',
    name: 'EXANI-II',
    fullName: 'Examen Nacional de Ingreso a la Educación Superior',
    description: 'Simulador oficial para universidades que aplican el EXANI-II. Incluye Comprensión Lectora, Redacción Indirecta, Pensamiento Matemático e Inglés Diagnóstico.',
    university: 'Universidad Veracruzana (UV) y más',
    logo: 'EX',
    color: 'from-emerald-400 to-emerald-600',
    totalQuestions: 120,
    timeLimit: 210,
    areas: ['Comprensión Lectora', 'Redacción Indirecta', 'Pensamiento Matemático', 'Inglés Diagnóstico'],
    path: '/exani'
  },
  {
    id: 'ipn',
    name: 'IPN',
    fullName: 'Instituto Politécnico Nacional',
    description: 'Simulador para el examen de admisión al IPN. Incluye Matemáticas, Física, Química, Biología, Competencia Lectora, Competencia Escrita, Historia e Inglés.',
    university: 'Instituto Politécnico Nacional',
    logo: 'IPN',
    color: 'from-amber-400 to-amber-600',
    totalQuestions: 140,
    timeLimit: 180,
    areas: ['Matemáticas', 'Física', 'Química', 'Biología', 'Competencia Lectora', 'Competencia Escrita', 'Historia', 'Inglés'],
    path: '/ipn'
  },
  {
    id: 'unam',
    name: 'UNAM',
    fullName: 'Universidad Nacional Autónoma de México',
    description: 'Próximamente: Simulador para el examen de admisión a la UNAM. Incluirá todas las áreas del examen COMIPEMS/UNAM.',
    university: 'Universidad Nacional Autónoma de México',
    logo: 'UNAM',
    color: 'from-blue-400 to-blue-600',
    totalQuestions: 120,
    timeLimit: 180,
    areas: ['Matemáticas', 'Física', 'Química', 'Biología', 'Historia', 'Geografía', 'Literatura', 'Español'],
    path: '/unam',
    isLocked: true,
    comingSoon: true
  }
];
