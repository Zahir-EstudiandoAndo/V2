import type { Exam, Reading, Question } from '../../../shared/types';

export const ipnExams: Exam[] = [
  {
    id: 'ipn_full',
    title: 'IPN Completo - Simulacro Oficial',
    description: 'Examen realista de 140 reactivos según la estructura oficial del IPN. Tiempo límite: 3 horas.',
    area: 'math',
    difficulty: 'full',
    timeLimit: 180,
    questionCount: 140,
    icon: 'Trophy'
  },
  {
    id: 'ipn_math',
    title: 'Matemáticas IPN',
    description: 'Álgebra, geometría, trigonometría y cálculo. 30 preguntas.',
    area: 'math',
    difficulty: 'advanced',
    timeLimit: 40,
    questionCount: 30,
    icon: 'Calculator'
  },
  {
    id: 'ipn_physics',
    title: 'Física IPN',
    description: 'Mecánica, termodinámica, electricidad y magnetismo. 20 preguntas.',
    area: 'physics',
    difficulty: 'advanced',
    timeLimit: 25,
    questionCount: 20,
    icon: 'Atom'
  },
  {
    id: 'ipn_chemistry',
    title: 'Química IPN',
    description: 'Química general, orgánica y estequiometría. 20 preguntas.',
    area: 'chemistry',
    difficulty: 'advanced',
    timeLimit: 25,
    questionCount: 20,
    icon: 'Flask'
  },
  {
    id: 'ipn_biology',
    title: 'Biología IPN',
    description: 'Biología celular, genética y ecología. 15 preguntas.',
    area: 'biology',
    difficulty: 'advanced',
    timeLimit: 20,
    questionCount: 15,
    icon: 'Dna'
  },
  {
    id: 'ipn_spanish',
    title: 'Competencia Escrita y Lectora IPN',
    description: 'Gramática, ortografía, comprensión lectora y redacción. 30 preguntas.',
    area: 'reading',
    difficulty: 'advanced',
    timeLimit: 30,
    questionCount: 30,
    icon: 'BookOpen'
  },
  {
    id: 'ipn_history',
    title: 'Historia IPN',
    description: 'Historia de México e Historia Universal. 15 preguntas.',
    area: 'history',
    difficulty: 'advanced',
    timeLimit: 20,
    questionCount: 15,
    icon: 'Scroll'
  },
  {
    id: 'ipn_english',
    title: 'Inglés IPN',
    description: 'Reading comprehension y gramática en inglés. 10 preguntas.',
    area: 'english',
    difficulty: 'advanced',
    timeLimit: 15,
    questionCount: 10,
    icon: 'Globe'
  }
];

export const ipnReadings: Reading[] = [
  {
    id: 'ipn_r1',
    title: 'La Revolución Mexicana',
    type: 'HISTORIA',
    area: 'history',
    content: `<p>La Revolución Mexicana fue un conflicto armado que se inició en 1910 y tuvo lugar principalmente entre 1910 y 1920. El movimiento comenzó como una lucha contra la dictadura de Porfirio Díaz, quien había gobernado México durante más de 30 años.</p>
    <p>Francisco I. Madero lanzó la candidatura presidencial en 1910 y, tras ser encarcelado por Díaz, emitió el Plan de San Luis que convocaba a la rebelión para noviembre de ese año. El lema "Sufragio efectivo, no reelección" se convirtió en la bandera del movimiento.</p>
    <p>La revolución trajo consigo importantes cambios sociales y políticos, incluyendo la reforma agraria, los derechos laborales y la promulgación de la Constitución de 1917.</p>`
  },
  {
    id: 'ipn_r2',
    title: 'La Célula: Unidad de la Vida',
    type: 'BIOLOGÍA',
    area: 'biology',
    content: `<p>La célula es la unidad estructural y funcional básica de todos los seres vivos. Fue descubierta por Robert Hooke en 1665 al observar cortes de corcho. Todos los organismos están compuestos por una o más células.</p>
    <p>Las células pueden clasificarse en procariotas y eucariotas. Las procariotas, como las bacterias, no tienen núcleo definido. Las eucariotas poseen un núcleo verdadero rodeado de membrana.</p>
    <p>Las principales estructuras celulares incluyen la membrana plasmática, el citoplasma, el núcleo, las mitocondrias y el retículo endoplásmico.</p>`
  },
  {
    id: 'ipn_r3',
    title: 'Leyes de Newton',
    type: 'FÍSICA',
    area: 'physics',
    content: `<p>Isaac Newton formuló tres leyes fundamentales que describen el movimiento de los cuerpos. Estas leyes sentaron las bases de la mecánica clásica.</p>
    <p>Primera Ley (Inercia): Un cuerpo permanece en reposo o en movimiento rectilíneo uniforme a menos que una fuerza externa actúe sobre él.</p>
    <p>Segunda Ley: La fuerza es igual a la masa por la aceleración (F = ma).</p>
    <p>Tercera Ley (Acción y Reacción): Por cada acción hay una reacción igual y opuesta.</p>`
  },
  {
    id: 'ipn_r4',
    title: 'La Tabla Periódica',
    type: 'QUÍMICA',
    area: 'chemistry',
    content: `<p>La tabla periódica es una organización sistemática de los elementos químicos ordenados por su número atómico. Fue desarrollada por Dmitri Mendeleev en 1869.</p>
    <p>Los elementos se organizan en grupos (columnas) y períodos (filas). Los elementos de un mismo grupo comparten propiedades químicas similares.</p>
    <p>La tabla está dividida en metales, no metales y metaloides. Los gases nobles se encuentran en el grupo 18.</p>`
  },
  {
    id: 'ipn_r5',
    title: 'Climate Change',
    type: 'ENGLISH',
    area: 'english',
    content: `<p>Climate change is one of the most pressing issues facing humanity today. The Earth's average temperature has increased by approximately 1.1°C since the late 19th century, primarily due to increased carbon dioxide emissions from human activities.</p>
    <p>The consequences include rising sea levels, more frequent extreme weather events, and disruptions to ecosystems. Scientists agree that immediate action is necessary to limit global warming to 1.5°C above pre-industrial levels.</p>
    <p>Renewable energy sources such as solar and wind power offer promising alternatives to fossil fuels.</p>`
  }
];

export const ipnQuestions: Question[] = [
  // MATEMÁTICAS
  { id: 'ipn_m1', readingId: null, text: '¿Cuál es el resultado de simplificar (x²)³ · x⁴?', options: ['x⁹', 'x¹⁰', 'x²⁴', 'x⁷'], correctAnswer: 1, explanation: '(x²)³ = x⁶, luego x⁶ · x⁴ = x¹⁰. Al elevar una potencia a otra potencia, se multiplican los exponentes.', area: 'math', topic: 'Leyes de exponentes', difficulty: 'medium' },
  { id: 'ipn_m2', readingId: null, text: 'Resuelve: 3(x - 2) + 2(x + 1) = 2x + 5', options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'], correctAnswer: 0, explanation: '3x - 6 + 2x + 2 = 2x + 5 → 5x - 4 = 2x + 5 → 3x = 9 → x = 3.', area: 'math', topic: 'Ecuaciones lineales', difficulty: 'medium' },
  { id: 'ipn_m3', readingId: null, text: 'Factoriza: x² - 5x + 6', options: ['(x-2)(x-3)', '(x+2)(x+3)', '(x-1)(x-6)', '(x+1)(x-6)'], correctAnswer: 0, explanation: 'Buscamos dos números que multiplicados den 6 y sumados den -5: -2 y -3.', area: 'math', topic: 'Factorización', difficulty: 'medium' },
  { id: 'ipn_m4', readingId: null, text: 'Si f(x) = 2x² - 3x + 1, ¿cuál es f(-2)?', options: ['15', '3', '-9', '11'], correctAnswer: 0, explanation: 'f(-2) = 2(-2)² - 3(-2) + 1 = 2(4) + 6 + 1 = 15.', area: 'math', topic: 'Funciones', difficulty: 'medium' },
  { id: 'ipn_m5', readingId: null, text: '¿Cuál es el dominio de f(x) = √(x - 3)?', options: ['x ≥ 3', 'x > 3', 'x ≤ 3', 'Todos los reales'], correctAnswer: 0, explanation: 'Para que la raíz cuadrada esté definida: x - 3 ≥ 0, por tanto x ≥ 3.', area: 'math', topic: 'Dominio', difficulty: 'medium' },
  { id: 'ipn_m6', readingId: null, text: 'Resuelve el sistema: 2x + 3y = 12, x - y = 1', options: ['x=3, y=2', 'x=2, y=3', 'x=4, y=1', 'x=1, y=4'], correctAnswer: 0, explanation: 'De la segunda: x = y + 1. Sustituyendo: 2(y+1) + 3y = 12 → y = 2, x = 3.', area: 'math', topic: 'Sistemas', difficulty: 'medium' },
  { id: 'ipn_m7', readingId: null, text: '¿Cuál es la derivada de f(x) = 3x⁴ - 2x² + 5x?', options: ['12x³ - 4x + 5', '12x³ - 4x² + 5', '3x³ - 2x + 5', '12x⁴ - 4x³ + 5x²'], correctAnswer: 0, explanation: 'Regla de la potencia: d/dx(xⁿ) = nxⁿ⁻¹. Resultado: 12x³ - 4x + 5.', area: 'math', topic: 'Derivadas', difficulty: 'hard' },
  { id: 'ipn_m8', readingId: null, text: 'Área de un triángulo con base 8 cm y altura 5 cm:', options: ['20 cm²', '40 cm²', '13 cm²', '26 cm²'], correctAnswer: 0, explanation: 'Área = (base × altura)/2 = (8 × 5)/2 = 20 cm².', area: 'math', topic: 'Geometría', difficulty: 'easy' },
  { id: 'ipn_m9', readingId: null, text: 'Si sen θ = 3/5 en el primer cuadrante, ¿cuál es cos θ?', options: ['4/5', '3/4', '5/4', '5/3'], correctAnswer: 0, explanation: 'sen²θ + cos²θ = 1 → cos²θ = 1 - 9/25 = 16/25 → cos θ = 4/5.', area: 'math', topic: 'Trigonometría', difficulty: 'medium' },
  { id: 'ipn_m10', readingId: null, text: 'Resuelve: log₂(x) + log₂(x-2) = 3', options: ['x = 4', 'x = 2', 'x = 3', 'x = 1'], correctAnswer: 0, explanation: 'log₂[x(x-2)] = 3 → x(x-2) = 8 → x² - 2x - 8 = 0 → x = 4 (x > 2).', area: 'math', topic: 'Logaritmos', difficulty: 'hard' },
  { id: 'ipn_m11', readingId: null, text: '¿Cuál es el vértice de y = x² - 4x + 3?', options: ['(2, -1)', '(-2, 1)', '(2, 1)', '(-2, -1)'], correctAnswer: 0, explanation: 'x = -b/2a = 4/2 = 2. y = (2)² - 4(2) + 3 = -1. Vértice: (2, -1).', area: 'math', topic: 'Parábolas', difficulty: 'medium' },
  { id: 'ipn_m12', readingId: null, text: 'Circunferencia de un círculo con radio 5 cm:', options: ['10π cm', '25π cm', '5π cm', '20π cm'], correctAnswer: 0, explanation: 'C = 2πr = 2π(5) = 10π cm.', area: 'math', topic: 'Geometría', difficulty: 'easy' },
  { id: 'ipn_m13', readingId: null, text: 'Simplifica: (2x³y⁻²)/(4x⁻¹y³)', options: ['x⁴/(2y⁵)', 'x²/(2y)', '2x⁴/y⁵', 'x²y/2'], correctAnswer: 0, explanation: '= (1/2) · x⁴ · y⁻⁵ = x⁴/(2y⁵).', area: 'math', topic: 'Exponentes', difficulty: 'medium' },
  { id: 'ipn_m14', readingId: null, text: '¿Cuál es la integral de f(x) = 3x²?', options: ['x³ + C', 'x³', '6x + C', '3x³ + C'], correctAnswer: 0, explanation: '∫3x² dx = 3(x³/3) + C = x³ + C.', area: 'math', topic: 'Integrales', difficulty: 'medium' },
  { id: 'ipn_m15', readingId: null, text: 'Si tan θ = 2, ¿cuál es sen θ/cos θ?', options: ['2', '1/2', '4', '1/4'], correctAnswer: 0, explanation: 'Por definición: tan θ = sen θ/cos θ = 2.', area: 'math', topic: 'Trigonometría', difficulty: 'easy' },
  { id: 'ipn_m16', readingId: null, text: 'Resuelve: |2x - 4| = 6', options: ['x = 5 o x = -1', 'x = 5', 'x = -1', 'x = 3'], correctAnswer: 0, explanation: '2x - 4 = 6 → x = 5, o 2x - 4 = -6 → x = -1.', area: 'math', topic: 'Valor absoluto', difficulty: 'medium' },
  { id: 'ipn_m17', readingId: null, text: '¿Cuál es el mínimo común múltiplo de 12 y 18?', options: ['36', '6', '72', '24'], correctAnswer: 0, explanation: 'MCD(12,18) = 6, entonces MCM = (12×18)/6 = 36.', area: 'math', topic: 'MCM', difficulty: 'easy' },
  { id: 'ipn_m18', readingId: null, text: 'Simplifica: (3x² - 12)/(x² - 4)', options: ['3', '3(x+2)/(x-2)', '(3x-6)/(x-2)', '3(x-2)/(x+2)'], correctAnswer: 0, explanation: 'Factorizando: 3(x²-4)/(x²-4) = 3.', area: 'math', topic: 'Factorización', difficulty: 'medium' },
  { id: 'ipn_m19', readingId: null, text: 'En una progresión aritmética: a₁=3, d=4. ¿Cuál es a₁₀?', options: ['39', '43', '35', '47'], correctAnswer: 0, explanation: 'aₙ = a₁ + (n-1)d = 3 + (9)(4) = 39.', area: 'math', topic: 'Progresiones', difficulty: 'medium' },
  { id: 'ipn_m20', readingId: null, text: '¿Cuál es la probabilidad de obtener un 6 al lanzar un dado?', options: ['1/6', '1/3', '1/2', '2/3'], correctAnswer: 0, explanation: 'Hay 1 caso favorable de 6 posibles: P = 1/6.', area: 'math', topic: 'Probabilidad', difficulty: 'easy' },
  { id: 'ipn_m21', readingId: null, text: 'Resuelve: 2^(x+1) = 32', options: ['x = 4', 'x = 5', 'x = 3', 'x = 6'], correctAnswer: 0, explanation: '32 = 2⁵, entonces x+1 = 5 → x = 4.', area: 'math', topic: 'Ecuaciones exponenciales', difficulty: 'medium' },
  { id: 'ipn_m22', readingId: null, text: 'Distancia entre los puntos (1, 2) y (4, 6):', options: ['5', '4', '3', '6'], correctAnswer: 0, explanation: 'd = √[(4-1)²+(6-2)²] = √[9+16] = √25 = 5.', area: 'math', topic: 'Geometría analítica', difficulty: 'medium' },
  { id: 'ipn_m23', readingId: null, text: '¿Cuál es el conjunto solución de x² - 9 > 0?', options: ['x < -3 o x > 3', '-3 < x < 3', 'x > 3', 'x < -3'], correctAnswer: 0, explanation: 'x² > 9 → |x| > 3 → x < -3 o x > 3.', area: 'math', topic: 'Desigualdades', difficulty: 'hard' },
  { id: 'ipn_m24', readingId: null, text: 'Si f(x) = x² y g(x) = x + 1, ¿cuál es (f∘g)(x)?', options: ['(x+1)²', 'x²+1', 'x²+x', 'x³'], correctAnswer: 0, explanation: '(f∘g)(x) = f(g(x)) = f(x+1) = (x+1)².', area: 'math', topic: 'Composición', difficulty: 'medium' },
  { id: 'ipn_m25', readingId: null, text: 'El perímetro de un rectángulo es 30 cm. Si el largo es el doble del ancho, ¿cuál es el área?', options: ['50 cm²', '60 cm²', '45 cm²', '75 cm²'], correctAnswer: 0, explanation: 'Sea ancho = x, largo = 2x. Perímetro: 2(x+2x) = 30 → x = 5. Área = 5 × 10 = 50.', area: 'math', topic: 'Geometría', difficulty: 'medium' },

  // FÍSICA
  { id: 'ipn_f1', readingId: 'ipn_r3', text: 'Según la Primera Ley de Newton, un objeto en movimiento continuará a menos que:', options: ['Se aplique una fuerza neta', 'Aumente su masa', 'Disminuya su velocidad', 'Cambie de dirección'], correctAnswer: 0, explanation: 'La Primera Ley (Inercia) establece que un cuerpo mantiene su estado a menos que una fuerza neta actúe sobre él.', area: 'physics', topic: 'Leyes de Newton', difficulty: 'easy' },
  { id: 'ipn_f2', readingId: null, text: 'Un objeto de 10 kg con aceleración de 2 m/s². ¿Qué fuerza actúa?', options: ['20 N', '5 N', '12 N', '8 N'], correctAnswer: 0, explanation: 'F = ma = (10)(2) = 20 N. Segunda Ley de Newton.', area: 'physics', topic: 'Dinámica', difficulty: 'easy' },
  { id: 'ipn_f3', readingId: null, text: 'Un cuerpo cae desde 20 m. ¿Velocidad al llegar al suelo? (g=10)', options: ['20 m/s', '10 m/s', '15 m/s', '25 m/s'], correctAnswer: 0, explanation: 'v² = 2gh = 2(10)(20) = 400 → v = 20 m/s.', area: 'physics', topic: 'Cinemática', difficulty: 'medium' },
  { id: 'ipn_f4', readingId: null, text: 'Energía cinética de 5 kg a 4 m/s:', options: ['40 J', '20 J', '80 J', '10 J'], correctAnswer: 0, explanation: 'EC = ½mv² = ½(5)(16) = 40 J.', area: 'physics', topic: 'Energía', difficulty: 'easy' },
  { id: 'ipn_f5', readingId: null, text: 'Fuerza de fricción: μ=0.3, m=2 kg (g=10):', options: ['6 N', '0.6 N', '60 N', '20 N'], correctAnswer: 0, explanation: 'f = μN = μmg = (0.3)(2)(10) = 6 N.', area: 'physics', topic: 'Fricción', difficulty: 'medium' },
  { id: 'ipn_f6', readingId: null, text: 'Constante elástica: F=5 N, x=0.1 m:', options: ['50 N/m', '5 N/m', '0.5 N/m', '500 N/m'], correctAnswer: 0, explanation: 'k = F/x = 5/0.1 = 50 N/m. Ley de Hooke.', area: 'physics', topic: 'Elasticidad', difficulty: 'easy' },
  { id: 'ipn_f7', readingId: null, text: 'Presión: F=100 N, A=0.25 m²:', options: ['400 Pa', '25 Pa', '1000 Pa', '4 Pa'], correctAnswer: 0, explanation: 'P = F/A = 100/0.25 = 400 Pa.', area: 'physics', topic: 'Presión', difficulty: 'easy' },
  { id: 'ipn_f8', readingId: null, text: 'Voltaje: R=10 Ω, I=2 A:', options: ['20 V', '5 V', '12 V', '8 V'], correctAnswer: 0, explanation: 'V = IR = (2)(10) = 20 V. Ley de Ohm.', area: 'physics', topic: 'Electricidad', difficulty: 'easy' },
  { id: 'ipn_f9', readingId: null, text: 'Movimiento circular con velocidad constante tiene aceleración:', options: ['Centrípeta', 'Tangencial', 'Lineal', 'Ninguna'], correctAnswer: 0, explanation: 'Aunque la rapidez es constante, la dirección cambia, por lo que hay aceleración centrípeta.', area: 'physics', topic: 'Movimiento circular', difficulty: 'medium' },
  { id: 'ipn_f10', readingId: null, text: 'Frecuencia con período de 0.25 s:', options: ['4 Hz', '0.25 Hz', '2 Hz', '0.4 Hz'], correctAnswer: 0, explanation: 'f = 1/T = 1/0.25 = 4 Hz.', area: 'physics', topic: 'Ondas', difficulty: 'easy' },
  { id: 'ipn_f11', readingId: null, text: 'Trabajo realizado por una fuerza de 10 N que desplaza 5 m:', options: ['50 J', '15 J', '2 J', '500 J'], correctAnswer: 0, explanation: 'W = F·d = (10)(5) = 50 J.', area: 'physics', topic: 'Trabajo', difficulty: 'easy' },
  { id: 'ipn_f12', readingId: null, text: 'Potencia si se realiza un trabajo de 100 J en 5 s:', options: ['20 W', '500 W', '25 W', '100 W'], correctAnswer: 0, explanation: 'P = W/t = 100/5 = 20 W.', area: 'physics', topic: 'Potencia', difficulty: 'easy' },
  { id: 'ipn_f13', readingId: null, text: 'Densidad de un objeto de 2 kg con volumen de 0.001 m³:', options: ['2000 kg/m³', '2 kg/m³', '0.002 kg/m³', '500 kg/m³'], correctAnswer: 0, explanation: 'ρ = m/V = 2/0.001 = 2000 kg/m³.', area: 'physics', topic: 'Densidad', difficulty: 'easy' },
  { id: 'ipn_f14', readingId: null, text: 'Velocidad final de un objeto que cae desde 45 m (g=10):', options: ['30 m/s', '20 m/s', '45 m/s', '15 m/s'], correctAnswer: 0, explanation: 'v² = 2gh = 2(10)(45) = 900 → v = 30 m/s.', area: 'physics', topic: 'Caída libre', difficulty: 'medium' },
  { id: 'ipn_f15', readingId: null, text: 'Resistencia equivalente de dos resistencias de 6 Ω en paralelo:', options: ['3 Ω', '12 Ω', '6 Ω', '36 Ω'], correctAnswer: 0, explanation: '1/Req = 1/6 + 1/6 = 2/6 → Req = 3 Ω.', area: 'physics', topic: 'Circuitos', difficulty: 'medium' },
  { id: 'ipn_f16', readingId: null, text: 'Calor necesario para elevar 2 kg de agua de 20°C a 80°C (c=4186 J/kg°C):', options: ['502320 J', '4186 J', '120 J', '100000 J'], correctAnswer: 0, explanation: 'Q = mcΔT = (2)(4186)(60) = 502320 J.', area: 'physics', topic: 'Calorimetría', difficulty: 'medium' },
  { id: 'ipn_f17', readingId: null, text: 'Longitud de onda con f=50 Hz y v=340 m/s:', options: ['6.8 m', '17000 m', '0.147 m', '390 m'], correctAnswer: 0, explanation: 'λ = v/f = 340/50 = 6.8 m.', area: 'physics', topic: 'Ondas', difficulty: 'medium' },
  { id: 'ipn_f18', readingId: null, text: 'Momento de una fuerza de 10 N a 2 m del eje:', options: ['20 N·m', '5 N·m', '12 N·m', '200 N·m'], correctAnswer: 0, explanation: 'M = F·d = (10)(2) = 20 N·m.', area: 'physics', topic: 'Rotación', difficulty: 'easy' },
  { id: 'ipn_f19', readingId: null, text: 'Energía potencial de 5 kg a 10 m de altura (g=10):', options: ['500 J', '50 J', '5000 J', '5 J'], correctAnswer: 0, explanation: 'EP = mgh = (5)(10)(10) = 500 J.', area: 'physics', topic: 'Energía', difficulty: 'easy' },
  { id: 'ipn_f20', readingId: null, text: 'Ley de gravitación universal: F es proporcional a:', options: ['1/r²', 'r', 'r²', '1/r'], correctAnswer: 0, explanation: 'F = Gm₁m₂/r², por tanto F ∝ 1/r².', area: 'physics', topic: 'Gravitación', difficulty: 'medium' },

  // QUÍMICA
  { id: 'ipn_q1', readingId: 'ipn_r4', text: 'Elementos de un mismo grupo comparten:', options: ['Número atómico', 'Propiedades químicas similares', 'Masa atómica', 'Neutrones'], correctAnswer: 1, explanation: 'Los elementos de un mismo grupo tienen el mismo número de electrones de valencia, dándoles propiedades similares.', area: 'chemistry', topic: 'Tabla periódica', difficulty: 'easy' },
  { id: 'ipn_q2', readingId: null, text: 'Configuración electrónica del oxígeno (Z=8):', options: ['1s² 2s² 2p⁴', '1s² 2s² 2p⁶', '1s² 2s² 2p²', '1s² 2s² 3s²'], correctAnswer: 0, explanation: 'El oxígeno tiene 8 electrones: 1s² 2s² 2p⁴.', area: 'chemistry', topic: 'Configuración electrónica', difficulty: 'medium' },
  { id: 'ipn_q3', readingId: null, text: 'Enlace entre Na y Cl:', options: ['Iónico', 'Covalente', 'Metálico', 'Puente de hidrógeno'], correctAnswer: 0, explanation: 'Na (metal) y Cl (no metal) forman enlace iónico. El sodio cede un electrón al cloro.', area: 'chemistry', topic: 'Enlaces', difficulty: 'medium' },
  { id: 'ipn_q4', readingId: null, text: 'Balancea: H₂ + O₂ → H₂O. Coeficiente del O₂:', options: ['1', '2', '3', '4'], correctAnswer: 0, explanation: '2H₂ + O₂ → 2H₂O. El coeficiente del O₂ es 1 (implícito).', area: 'chemistry', topic: 'Balanceo', difficulty: 'medium' },
  { id: 'ipn_q5', readingId: null, text: 'Moles en 36 g de H₂O (M=18 g/mol):', options: ['2 mol', '1 mol', '0.5 mol', '4 mol'], correctAnswer: 0, explanation: 'n = m/M = 36/18 = 2 mol.', area: 'chemistry', topic: 'Estequiometría', difficulty: 'easy' },
  { id: 'ipn_q6', readingId: null, text: 'pH de [H⁺] = 10⁻⁴ M:', options: ['4', '10', '-4', '14'], correctAnswer: 0, explanation: 'pH = -log[H⁺] = -log(10⁻⁴) = 4.', area: 'chemistry', topic: 'pH', difficulty: 'medium' },
  { id: 'ipn_q7', readingId: null, text: 'El metano (CH₄) es un:', options: ['Alcano', 'Alqueno', 'Alquino', 'Aromático'], correctAnswer: 0, explanation: 'El metano es el alcano más simple (enlaces simples C-H).', area: 'chemistry', topic: 'Orgánica', difficulty: 'easy' },
  { id: 'ipn_q8', readingId: null, text: 'Nombre de Fe₂O₃:', options: ['Óxido de hierro (III)', 'Óxido de hierro (II)', 'Óxido férrico', 'Ambas a y c'], correctAnswer: 3, explanation: 'Fe₂O₃ es óxido de hierro (III) u óxido férrico. El hierro tiene estado +3.', area: 'chemistry', topic: 'Nomenclatura', difficulty: 'medium' },
  { id: 'ipn_q9', readingId: null, text: 'En redox, el agente oxidante:', options: ['Se reduce', 'Se oxida', 'No cambia', 'Pierde electrones'], correctAnswer: 0, explanation: 'El agente oxidante se reduce (gana electrones) mientras oxida a otra especie.', area: 'chemistry', topic: 'Redox', difficulty: 'hard' },
  { id: 'ipn_q10', readingId: null, text: 'Molaridad: 2 moles en 500 mL:', options: ['4 M', '2 M', '1 M', '0.5 M'], correctAnswer: 0, explanation: 'M = n/V = 2/0.5 = 4 M.', area: 'chemistry', topic: 'Soluciones', difficulty: 'easy' },
  { id: 'ipn_q11', readingId: null, text: 'El eteno (C₂H₄) tiene enlace:', options: ['Doble', 'Triple', 'Simple', 'Iónico'], correctAnswer: 0, explanation: 'El eteno (etileno) tiene un doble enlace C=C. Es un alqueno.', area: 'chemistry', topic: 'Orgánica', difficulty: 'easy' },
  { id: 'ipn_q12', readingId: null, text: 'Gas más abundante en la atmósfera:', options: ['Nitrógeno', 'Oxígeno', 'CO₂', 'Argón'], correctAnswer: 0, explanation: 'El nitrógeno (N₂) constituye aproximadamente el 78% de la atmósfera.', area: 'chemistry', topic: 'General', difficulty: 'easy' },
  { id: 'ipn_q13', readingId: null, text: 'Número de oxidación del oxígeno en H₂O:', options: ['-2', '-1', '+2', '+1'], correctAnswer: 0, explanation: 'En H₂O, el oxígeno tiene estado de oxidación -2.', area: 'chemistry', topic: 'Números de oxidación', difficulty: 'medium' },
  { id: 'ipn_q14', readingId: null, text: 'Fórmula del ácido sulfúrico:', options: ['H₂SO₄', 'H₂SO₃', 'HSO₄', 'H₂S'], correctAnswer: 0, explanation: 'El ácido sulfúrico tiene fórmula H₂SO₄.', area: 'chemistry', topic: 'Nomenclatura', difficulty: 'easy' },
  { id: 'ipn_q15', readingId: null, text: 'Isótopos del hidrógeno:', options: ['Protio, deuterio, tritio', 'H₁, H₂, H₃', 'H⁺, H, H⁻', 'Ninguno'], correctAnswer: 0, explanation: 'Los tres isótopos del hidrógeno son protio (¹H), deuterio (²H) y tritio (³H).', area: 'chemistry', topic: 'Isótopos', difficulty: 'medium' },
  { id: 'ipn_q16', readingId: null, text: 'Tipo de reacción: A + B → AB', options: ['Síntesis', 'Descomposición', 'Sustitución', 'Combustión'], correctAnswer: 0, explanation: 'Es una reacción de síntesis o combinación.', area: 'chemistry', topic: 'Tipos de reacciones', difficulty: 'easy' },
  { id: 'ipn_q17', readingId: null, text: 'Masa molar de CO₂ (C=12, O=16):', options: ['44 g/mol', '28 g/mol', '32 g/mol', '48 g/mol'], correctAnswer: 0, explanation: 'Masa molar = 12 + 2(16) = 44 g/mol.', area: 'chemistry', topic: 'Masa molar', difficulty: 'easy' },
  { id: 'ipn_q18', readingId: null, text: 'Electrones de valencia del nitrógeno (Z=7):', options: ['5', '3', '7', '2'], correctAnswer: 0, explanation: 'Configuración: 1s² 2s² 2p³. Tiene 5 electrones de valencia.', area: 'chemistry', topic: 'Configuración', difficulty: 'medium' },
  { id: 'ipn_q19', readingId: null, text: 'Solución con pH = 3 es:', options: ['Ácida', 'Básica', 'Neutra', 'Amphotérica'], correctAnswer: 0, explanation: 'pH < 7 indica solución ácida.', area: 'chemistry', topic: 'pH', difficulty: 'easy' },
  { id: 'ipn_q20', readingId: null, text: 'El etanol es un:', options: ['Alcohol', 'Aldehído', 'Cetona', 'Ácido'], correctAnswer: 0, explanation: 'El etanol (C₂H₅OH) es un alcohol.', area: 'chemistry', topic: 'Orgánica', difficulty: 'easy' },

  // BIOLOGÍA
  { id: 'ipn_b1', readingId: 'ipn_r2', text: '¿Quién descubrió la célula?', options: ['Robert Hooke', 'Leeuwenhoek', 'Robert Brown', 'Schwann'], correctAnswer: 0, explanation: 'Robert Hooke descubrió la célula en 1665 al observar cortes de corcho.', area: 'biology', topic: 'Historia', difficulty: 'easy' },
  { id: 'ipn_b2', readingId: null, text: 'Función de las mitocondrias:', options: ['Producción de ATP', 'Síntesis de proteínas', 'Almacenamiento de agua', 'Digestión celular'], correctAnswer: 0, explanation: 'Las mitocondrias son las "centrales energéticas", produciendo ATP.', area: 'biology', topic: 'Orgánulos', difficulty: 'easy' },
  { id: 'ipn_b3', readingId: null, text: '¿Qué célula carece de núcleo verdadero?', options: ['Procariota', 'Eucariota animal', 'Eucariota vegetal', 'Fungi'], correctAnswer: 0, explanation: 'Las procariotas (bacterias) no tienen núcleo definido.', area: 'biology', topic: 'Tipos de células', difficulty: 'easy' },
  { id: 'ipn_b4', readingId: null, text: 'La fotosíntesis ocurre en:', options: ['Cloroplastos', 'Mitocondrias', 'Ribosomas', 'Núcleo'], correctAnswer: 0, explanation: 'La fotosíntesis ocurre en los cloroplastos de las células vegetales.', area: 'biology', topic: 'Fotosíntesis', difficulty: 'easy' },
  { id: 'ipn_b5', readingId: null, text: 'División celular que produce células idénticas:', options: ['Mitosis', 'Meiosis', 'Fisión binaria', 'Budding'], correctAnswer: 0, explanation: 'La mitosis produce dos células hijas idénticas a la madre.', area: 'biology', topic: 'División celular', difficulty: 'medium' },
  { id: 'ipn_b6', readingId: null, text: 'El ADN se encuentra principalmente en:', options: ['El núcleo', 'Mitocondrias', 'Citoplasma', 'Membrana'], correctAnswer: 0, explanation: 'En células eucariotas, el ADN se encuentra principalmente en el núcleo.', area: 'biology', topic: 'Material genético', difficulty: 'easy' },
  { id: 'ipn_b7', readingId: null, text: 'Molécula que transporta información del núcleo al citoplasma:', options: ['ARN mensajero', 'ARN de transferencia', 'ADN polimerasa', 'Ribosomas'], correctAnswer: 0, explanation: 'El ARNm transporta la información genética desde el ADN hasta los ribosomas.', area: 'biology', topic: 'Expresión génica', difficulty: 'medium' },
  { id: 'ipn_b8', readingId: null, text: 'Producto de la fermentación láctica:', options: ['Ácido láctico', 'Etanol', 'CO₂', 'Agua'], correctAnswer: 0, explanation: 'La fermentación láctica produce ácido láctico a partir de glucosa.', area: 'biology', topic: 'Metabolismo', difficulty: 'medium' },
  { id: 'ipn_b9', readingId: null, text: 'Los ribosomas sintetizan:', options: ['Proteínas', 'Lípidos', 'Carbohidratos', 'ARN'], correctAnswer: 0, explanation: 'Los ribosomas son los sitios donde se sintetizan las proteínas.', area: 'biology', topic: 'Orgánulos', difficulty: 'easy' },
  { id: 'ipn_b10', readingId: null, text: 'Reproducción que produce descendencia idéntica:', options: ['Asexual', 'Sexual', 'Ambas', 'Ninguna'], correctAnswer: 0, explanation: 'La reproducción asexual produce descendencia clónica.', area: 'biology', topic: 'Reproducción', difficulty: 'easy' },
  { id: 'ipn_b11', readingId: null, text: 'La selección natural fue propuesta por:', options: ['Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'Fleming'], correctAnswer: 0, explanation: 'Charles Darwin propuso la teoría de la evolución por selección natural.', area: 'biology', topic: 'Evolución', difficulty: 'easy' },
  { id: 'ipn_b12', readingId: null, text: 'Nivel de organización más básico de la vida:', options: ['Célula', 'Tejido', 'Órgano', 'Sistema'], correctAnswer: 0, explanation: 'La célula es la unidad básica de la vida.', area: 'biology', topic: 'Organización', difficulty: 'easy' },
  { id: 'ipn_b13', readingId: null, text: 'Proceso que produce glucosa y oxígeno:', options: ['Fotosíntesis', 'Respiración', 'Fermentación', 'Digestión'], correctAnswer: 0, explanation: 'La fotosíntesis produce glucosa y oxígeno a partir de CO₂ y agua.', area: 'biology', topic: 'Fotosíntesis', difficulty: 'easy' },
  { id: 'ipn_b14', readingId: null, text: 'Los cromosomas se encuentran en:', options: ['El núcleo', 'Citoplasma', 'Membrana', 'Ribosomas'], correctAnswer: 0, explanation: 'Los cromosomas se encuentran en el núcleo de las células eucariotas.', area: 'biology', topic: 'Genética', difficulty: 'easy' },
  { id: 'ipn_b15', readingId: null, text: 'Tejido que cubre y protege:', options: ['Epitelial', 'Conectivo', 'Muscular', 'Nervioso'], correctAnswer: 0, explanation: 'El tejido epitelial cubre y protege las superficies del cuerpo.', area: 'biology', topic: 'Tejidos', difficulty: 'medium' },
  { id: 'ipn_b16', readingId: null, text: 'Órgano responsable de la filtración de sangre:', options: ['Riñón', 'Hígado', 'Pulmón', 'Corazón'], correctAnswer: 0, explanation: 'Los riñones filtran la sangre y eliminan desechos.', area: 'biology', topic: 'Sistemas', difficulty: 'easy' },
  { id: 'ipn_b17', readingId: null, text: 'Estructura que regula el paso de sustancias en la célula:', options: ['Membrana plasmática', 'Pared celular', 'Núcleo', 'Citoplasma'], correctAnswer: 0, explanation: 'La membrana plasmática regula el paso de sustancias.', area: 'biology', topic: 'Célula', difficulty: 'easy' },
  { id: 'ipn_b18', readingId: null, text: 'Tipo de reproducción que requiere dos gametos:', options: ['Sexual', 'Asexual', 'Bipartición', 'Gemación'], correctAnswer: 0, explanation: 'La reproducción sexual requiere la unión de dos gametos.', area: 'biology', topic: 'Reproducción', difficulty: 'easy' },
  { id: 'ipn_b19', readingId: null, text: 'El proceso de traducción ocurre en:', options: ['Ribosomas', 'Núcleo', 'Mitocondrias', 'Lisosomas'], correctAnswer: 0, explanation: 'La traducción (síntesis de proteínas) ocurre en los ribosomas.', area: 'biology', topic: 'Expresión génica', difficulty: 'medium' },
  { id: 'ipn_b20', readingId: null, text: 'Gas producido durante la respiración celular:', options: ['CO₂', 'O₂', 'N₂', 'H₂'], correctAnswer: 0, explanation: 'La respiración celular produce CO₂ como subproducto.', area: 'biology', topic: 'Respiración', difficulty: 'easy' },

  // COMPETENCIA ESCRITA Y LECTORA
  { id: 'ipn_s1', readingId: 'ipn_r1', text: '¿Cuándo comenzó la Revolución Mexicana?', options: ['1910', '1810', '1920', '1900'], correctAnswer: 0, explanation: 'La Revolución Mexicana comenzó en 1910 con el Plan de San Luis.', area: 'reading', topic: 'Comprensión', difficulty: 'easy' },
  { id: 'ipn_s2', readingId: 'ipn_r1', text: 'Lema principal del movimiento maderista:', options: ['"Sufragio efectivo, no reelección"', '"Tierra y libertad"', '"México para los mexicanos"', '"Reforma, libertad"'], correctAnswer: 0, explanation: '"Sufragio efectivo, no reelección" fue la bandera del movimiento.', area: 'reading', topic: 'Comprensión', difficulty: 'easy' },
  { id: 'ipn_s3', readingId: 'ipn_r1', text: 'Documento importante de la Revolución:', options: ['Constitución de 1917', 'Constitución de 1857', 'Plan de Ayala', 'Tratado de Guadalupe'], correctAnswer: 0, explanation: 'La Constitución de 1917 fue uno de los logros de la revolución.', area: 'reading', topic: 'Comprensión', difficulty: 'easy' },
  { id: 'ipn_s4', readingId: null, text: 'Función de la coma:', options: ['Pausa breve', 'Finalizar oración', 'Expresar pregunta', 'Enfatizar'], correctAnswer: 0, explanation: 'La coma indica una pausa breve dentro de la oración.', area: 'reading', topic: 'Puntuación', difficulty: 'easy' },
  { id: 'ipn_s5', readingId: null, text: 'Oración con ortografía correcta:', options: ['El niño jugaba en el parque.', 'El niño jugaba en el parke.', 'El ninio jugaba en el parque.', 'El niño jugaba en el parque.'], correctAnswer: 0, explanation: '"Niño" lleva tilde (aguda en vocal). "Parque" con qu.', area: 'reading', topic: 'Ortografía', difficulty: 'easy' },
  { id: 'ipn_s6', readingId: null, text: '¿Qué es un sinónimo?', options: ['Significado similar', 'Significado opuesto', 'Igual sonido', 'Origen extranjero'], correctAnswer: 0, explanation: 'Los sinónimos tienen significados similares (ej: feliz - contento).', area: 'reading', topic: 'Vocabulario', difficulty: 'easy' },
  { id: 'ipn_s7', readingId: null, text: 'Sujeto en: "Los estudiantes aprobaron el examen."', options: ['Los estudiantes', 'aprobaron', 'el examen', 'aprobaron el examen'], correctAnswer: 0, explanation: 'El sujeto es "Los estudiantes", quienes realizan la acción.', area: 'reading', topic: 'Sintaxis', difficulty: 'easy' },
  { id: 'ipn_s8', readingId: null, text: 'Antónimo de "generoso":', options: ['Tacaño', 'Bondadoso', 'Altruista', 'Caritativo'], correctAnswer: 0, explanation: 'El antónimo de generoso es tacaño. Los demás son sinónimos.', area: 'reading', topic: 'Vocabulario', difficulty: 'easy' },
  { id: 'ipn_s9', readingId: null, text: '"¡Qué día tan hermoso!" es oración:', options: ['Exclamativa', 'Interrogativa', 'Imperativa', 'Enunciativa'], correctAnswer: 0, explanation: 'Es exclamativa, indicada por los signos de exclamación.', area: 'reading', topic: 'Tipos de oraciones', difficulty: 'easy' },
  { id: 'ipn_s10', readingId: null, text: 'Plural de "crisis":', options: ['crisis', 'crises', 'crisises', 'cris'], correctAnswer: 0, explanation: '"Crisis" es invariable: su plural es igual al singular.', area: 'reading', topic: 'Plural', difficulty: 'medium' },
  { id: 'ipn_s11', readingId: null, text: 'Completa: "_____ muchos libros en la biblioteca."', options: ['Hay', 'Ahí', 'Ay', 'Ahi'], correctAnswer: 0, explanation: '"Hay" (verbo haber) indica existencia. "Ahí" indica lugar.', area: 'reading', topic: 'Ortografía', difficulty: 'easy' },
  { id: 'ipn_s12', readingId: null, text: 'Figura retórica que da cualidades humanas a objetos:', options: ['Personificación', 'Metáfora', 'Símil', 'Hipérbole'], correctAnswer: 0, explanation: 'La personificación atribuye características humanas a objetos.', area: 'reading', topic: 'Figuras retóricas', difficulty: 'medium' },
  { id: 'ipn_s13', readingId: null, text: 'Oración con concordancia correcta:', options: ['Los niños juegan en el parque.', 'Los niños juega en el parque.', 'El niños juegan en el parque.', 'Los niño juegan en el parque.'], correctAnswer: 0, explanation: 'Sujeto plural requiere verbo en plural.', area: 'reading', topic: 'Concordancia', difficulty: 'easy' },
  { id: 'ipn_s14', readingId: null, text: 'Significado de "echarle ganas":', options: ['Esforzarse', 'Desanimarse', 'Descansar', 'Abandonar'], correctAnswer: 0, explanation: '"Echarle ganas" significa poner empeño o esforzarse.', area: 'reading', topic: 'Expresiones', difficulty: 'easy' },
  { id: 'ipn_s15', readingId: null, text: 'Complemento directo en: "El perro de mi vecino ladra mucho":', options: ['No tiene', 'ladra', 'mucho', 'de mi vecino'], correctAnswer: 0, explanation: '"Ladrar" es intransitivo, no requiere complemento directo.', area: 'reading', topic: 'Sintaxis', difficulty: 'hard' },
  { id: 'ipn_s16', readingId: null, text: 'Prefijo que significa "antes":', options: ['Pre-', 'Post-', 'Re-', 'Sub-'], correctAnswer: 0, explanation: '"Pre-" significa antes (ej: prehistoria, previo).', area: 'reading', topic: 'Morfología', difficulty: 'easy' },
  { id: 'ipn_s17', readingId: null, text: 'Sufijo que indica aumentativo:', options: ['-ón', '-ito', '-illo', '-cito'], correctAnswer: 0, explanation: 'El sufijo "-ón" indica aumentativo (ej: casón, grandón).', area: 'reading', topic: 'Morfología', difficulty: 'easy' },
  { id: 'ipn_s18', readingId: null, text: 'Palabra aguda:', options: ['Café', 'Lápiz', 'Máquina', 'Fácil'], correctAnswer: 0, explanation: '"Café" es aguda (tilde en la última sílaba).', area: 'reading', topic: 'Acentuación', difficulty: 'easy' },
  { id: 'ipn_s19', readingId: null, text: 'Oración compuesta:', options: ['Llegó y se fue', 'Llegó', 'Llegó tarde', 'Llegó rápido'], correctAnswer: 0, explanation: '"Llegó y se fue" tiene dos proposiciones unidas por conjunción.', area: 'reading', topic: 'Sintaxis', difficulty: 'medium' },
  { id: 'ipn_s20', readingId: null, text: 'Metáfora:', options: ['"El tiempo es oro"', '"Corre como el viento"', '"Es fuerte como un toro"', '"Más alto que una torre"'], correctAnswer: 0, explanation: '"El tiempo es oro" es metáfora (sin "como").', area: 'reading', topic: 'Figuras retóricas', difficulty: 'medium' },
  { id: 'ipn_s21', readingId: null, text: 'Uso correcto de "haber":', options: ['Ha llegado', 'A llegado', 'Ah llegado', 'Ahi llegado'], correctAnswer: 0, explanation: '"Ha" es la forma correcta del verbo haber.', area: 'reading', topic: 'Ortografía', difficulty: 'easy' },
  { id: 'ipn_s22', readingId: null, text: 'Género de "la mano":', options: ['Femenino', 'Masculino', 'Neutro', 'Ambos'], correctAnswer: 0, explanation: '"Mano" es femenino a pesar de terminar en -o.', area: 'reading', topic: 'Género', difficulty: 'medium' },
  { id: 'ipn_s23', readingId: null, text: 'Oración en voz pasiva:', options: ['El libro fue leído', 'Leí el libro', 'Estoy leyendo', 'Leeré el libro'], correctAnswer: 0, explanation: '"El libro fue leído" está en voz pasiva.', area: 'reading', topic: 'Voz pasiva', difficulty: 'medium' },
  { id: 'ipn_s24', readingId: null, text: 'Significado de "albricias":', options: ['Noticias alegres', 'Tristeza', 'Miedo', 'Enojo'], correctAnswer: 0, explanation: '"Albricias" significa noticias alegres o buenas nuevas.', area: 'reading', topic: 'Vocabulario', difficulty: 'hard' },
  { id: 'ipn_s25', readingId: null, text: 'Uso de mayúscula correcto:', options: ['México, D.F.', 'méxico, d.f.', 'MÉXICO, D.F.', 'méxico, D.F.'], correctAnswer: 0, explanation: 'Los nombres propios llevan mayúscula inicial.', area: 'reading', topic: 'Ortografía', difficulty: 'easy' },

  // HISTORIA
  { id: 'ipn_h1', readingId: null, text: 'Primer presidente de México:', options: ['Guadalupe Victoria', 'Iturbide', 'Juárez', 'Díaz'], correctAnswer: 0, explanation: 'Guadalupe Victoria fue el primer presidente de México (1824-1829).', area: 'history', topic: 'México', difficulty: 'medium' },
  { id: 'ipn_h2', readingId: null, text: 'La Independencia de México comenzó en:', options: ['1810', '1821', '1910', '1800'], correctAnswer: 0, explanation: 'El Grito de Dolores de Hidalgo marcó el inicio en 1810.', area: 'history', topic: 'Independencia', difficulty: 'easy' },
  { id: 'ipn_h3', readingId: null, text: '¿Quién construyó las pirámides de Teotihuacan?', options: ['Teotihuacanos', 'Aztecas', 'Mayas', 'Zapotecas'], correctAnswer: 0, explanation: 'Los teotihuacanos construyeron Teotihuacan con sus pirámides.', area: 'history', topic: 'Prehispánico', difficulty: 'easy' },
  { id: 'ipn_h4', readingId: null, text: 'La Segunda Guerra Mundial terminó en:', options: ['1945', '1939', '1941', '1950'], correctAnswer: 0, explanation: 'La WWII terminó en 1945 con la rendición de Alemania y Japón.', area: 'history', topic: 'Universal', difficulty: 'easy' },
  { id: 'ipn_h5', readingId: null, text: '¿Quién pintó la Mona Lisa?', options: ['Leonardo da Vinci', 'Miguel Ángel', 'Rafael', 'Donatello'], correctAnswer: 0, explanation: 'Leonardo da Vinci pintó la Mona Lisa entre 1503 y 1519.', area: 'history', topic: 'Arte', difficulty: 'easy' },
  { id: 'ipn_h6', readingId: null, text: 'La Revolución Industrial comenzó en:', options: ['Inglaterra', 'Francia', 'EE.UU.', 'Alemania'], correctAnswer: 0, explanation: 'La Revolución Industrial comenzó en Inglaterra a finales del siglo XVIII.', area: 'history', topic: 'Universal', difficulty: 'medium' },
  { id: 'ipn_h7', readingId: null, text: 'Machu Picchu fue construido por:', options: ['Inca', 'Azteca', 'Maya', 'Tolteca'], correctAnswer: 0, explanation: 'Machu Picchu fue construido por el imperio Inca en el siglo XV.', area: 'history', topic: 'Universal', difficulty: 'easy' },
  { id: 'ipn_h8', readingId: null, text: 'La Guerra Fría fue entre:', options: ['EE.UU. y URSS', 'Alemania y Francia', 'China y Japón', 'Inglaterra y España'], correctAnswer: 0, explanation: 'La Guerra Fría (1947-1991) fue entre Estados Unidos y la Unión Soviética.', area: 'history', topic: 'Contemporánea', difficulty: 'easy' },
  { id: 'ipn_h9', readingId: null, text: 'Líder de la Revolución Cubana junto a Fidel Castro:', options: ['Che Guevara', 'Bolívar', 'Zapata', 'Villa'], correctAnswer: 0, explanation: 'El Che Guevara fue líder de la Revolución Cubana junto a Fidel Castro.', area: 'history', topic: 'Contemporánea', difficulty: 'easy' },
  { id: 'ipn_h10', readingId: null, text: 'Caída del Muro de Berlín:', options: ['1989', '1991', '1979', '1999'], correctAnswer: 0, explanation: 'El Muro de Berlín cayó el 9 de noviembre de 1989.', area: 'history', topic: 'Contemporánea', difficulty: 'medium' },
  { id: 'ipn_h11', readingId: null, text: 'Descubrimiento de América:', options: ['1492', '1498', '1500', '1488'], correctAnswer: 0, explanation: 'Cristóbal Colón llegó a América el 12 de octubre de 1492.', area: 'history', topic: 'Descubrimiento', difficulty: 'easy' },
  { id: 'ipn_h12', readingId: null, text: 'La Reforma fue durante el gobierno de:', options: ['Juárez', 'Maximiliano', 'Díaz', 'Iturbide'], correctAnswer: 0, explanation: 'Las Leyes de Reforma fueron promulgadas durante el gobierno de Benito Juárez.', area: 'history', topic: 'Reforma', difficulty: 'medium' },
  { id: 'ipn_h13', readingId: null, text: 'Imperio que construyó el Coliseo:', options: ['Romano', 'Griego', 'Egipcio', 'Persa'], correctAnswer: 0, explanation: 'El Coliseo fue construido por el Imperio Romano.', area: 'history', topic: 'Universal', difficulty: 'easy' },
  { id: 'ipn_h14', readingId: null, text: 'Líder de la Independencia de la India:', options: ['Gandhi', 'Nehru', 'Jinnah', 'Bose'], correctAnswer: 0, explanation: 'Mahatma Gandhi lideró el movimiento de independencia de India.', area: 'history', topic: 'Contemporánea', difficulty: 'medium' },
  { id: 'ipn_h15', readingId: null, text: 'Primera Guerra Mundial comenzó en:', options: ['1914', '1918', '1939', '1900'], correctAnswer: 0, explanation: 'La WWI comenzó en 1914 con el asesinato del archiduque Francisco Fernando.', area: 'history', topic: 'Contemporánea', difficulty: 'medium' },

  // INGLÉS
  { id: 'ipn_e1', readingId: 'ipn_r5', text: 'Main cause of climate change:', options: ['CO₂ emissions', 'Solar radiation', 'Volcanic activity', 'Ocean currents'], correctAnswer: 0, explanation: 'The text states the increase is "primarily due to increased carbon dioxide emissions."', area: 'english', topic: 'Reading', difficulty: 'easy' },
  { id: 'ipn_e2', readingId: 'ipn_r5', text: 'Target limit for global warming:', options: ['1.5°C', '2°C', '1°C', '3°C'], correctAnswer: 0, explanation: 'The text mentions limiting warming to "1.5°C above pre-industrial levels."', area: 'english', topic: 'Reading', difficulty: 'easy' },
  { id: 'ipn_e3', readingId: null, text: 'Choose: "They _____ to the movies last night."', options: ['went', 'go', 'goes', 'going'], correctAnswer: 0, explanation: '"Went" is the simple past of "go" for completed past actions.', area: 'english', topic: 'Past tense', difficulty: 'easy' },
  { id: 'ipn_e4', readingId: null, text: 'Plural of "child":', options: ['children', 'childs', 'childrens', 'childes'], correctAnswer: 0, explanation: '"Children" is the irregular plural of "child".', area: 'english', topic: 'Plurals', difficulty: 'easy' },
  { id: 'ipn_e5', readingId: null, text: 'Preposition: "I was born _____ 2000."', options: ['in', 'on', 'at', 'by'], correctAnswer: 0, explanation: 'We use "in" for years, months, and seasons.', area: 'english', topic: 'Prepositions', difficulty: 'easy' },
  { id: 'ipn_e6', readingId: null, text: 'Correct question:', options: ['Where do you live?', 'Where you live?', 'Where does you live?', 'Where are you live?'], correctAnswer: 0, explanation: 'Questions use "do/does" + subject + base verb.', area: 'english', topic: 'Questions', difficulty: 'easy' },
  { id: 'ipn_e7', readingId: null, text: 'Meaning of "huge":', options: ['Very big', 'Very small', 'Very fast', 'Very slow'], correctAnswer: 0, explanation: '"Huge" means very big or enormous.', area: 'english', topic: 'Vocabulary', difficulty: 'easy' },
  { id: 'ipn_e8', readingId: null, text: 'Comparative: "My brother is _____ than me."', options: ['taller', 'more tall', 'tall', 'most tall'], correctAnswer: 0, explanation: '"Taller" is the correct comparative of "tall".', area: 'english', topic: 'Comparatives', difficulty: 'easy' },
  { id: 'ipn_e9', readingId: null, text: 'Opposite of "expensive":', options: ['cheap', 'free', 'costly', 'valuable'], correctAnswer: 0, explanation: '"Cheap" is the opposite of "expensive".', area: 'english', topic: 'Antonyms', difficulty: 'easy' },
  { id: 'ipn_e10', readingId: null, text: 'Correct sentence:', options: ['I don\'t like coffee.', 'I doesn\'t like coffee.', 'I not like coffee.', 'I no like coffee.'], correctAnswer: 0, explanation: 'Correct negative: subject + don\'t/doesn\'t + base verb.', area: 'english', topic: 'Negatives', difficulty: 'easy' },
  { id: 'ipn_e11', readingId: null, text: 'Past participle of "write":', options: ['written', 'wrote', 'writed', 'writing'], correctAnswer: 0, explanation: '"Written" is the past participle of "write" (write-wrote-written).', area: 'english', topic: 'Irregular verbs', difficulty: 'medium' },
  { id: 'ipn_e12', readingId: null, text: 'Choose: "She _____ English for 5 years."', options: ['has studied', 'studied', 'have studied', 'studying'], correctAnswer: 0, explanation: '"Has studied" is present perfect for actions that continue to present.', area: 'english', topic: 'Present perfect', difficulty: 'medium' },
  { id: 'ipn_e13', readingId: null, text: 'Conditional: "If I _____ rich, I would travel."', options: ['were', 'am', 'was', 'be'], correctAnswer: 0, explanation: 'Second conditional uses "were" for all subjects.', area: 'english', topic: 'Conditionals', difficulty: 'medium' },
  { id: 'ipn_e14', readingId: null, text: 'Passive voice: "The book _____ by the author."', options: ['was written', 'wrote', 'written', 'is writing'], correctAnswer: 0, explanation: 'Passive voice: be + past participle.', area: 'english', topic: 'Passive voice', difficulty: 'medium' },
  { id: 'ipn_e15', readingId: null, text: 'Meaning of "break down":', options: ['Stop working', 'Start working', 'Slow down', 'Speed up'], correctAnswer: 0, explanation: '"Break down" means to stop functioning.', area: 'english', topic: 'Phrasal verbs', difficulty: 'medium' }
];

export const ipnExamQuestionMap: Record<string, string[]> = {
  'ipn_full': [
    'ipn_m1', 'ipn_m2', 'ipn_m3', 'ipn_m4', 'ipn_m5', 'ipn_m6', 'ipn_m7', 'ipn_m8', 'ipn_m9', 'ipn_m10',
    'ipn_m11', 'ipn_m12', 'ipn_m13', 'ipn_m14', 'ipn_m15', 'ipn_m16', 'ipn_m17', 'ipn_m18', 'ipn_m19', 'ipn_m20',
    'ipn_m21', 'ipn_m22', 'ipn_m23', 'ipn_m24', 'ipn_m25',
    'ipn_f1', 'ipn_f2', 'ipn_f3', 'ipn_f4', 'ipn_f5', 'ipn_f6', 'ipn_f7', 'ipn_f8', 'ipn_f9', 'ipn_f10',
    'ipn_f11', 'ipn_f12', 'ipn_f13', 'ipn_f14', 'ipn_f15', 'ipn_f16', 'ipn_f17', 'ipn_f18', 'ipn_f19', 'ipn_f20',
    'ipn_q1', 'ipn_q2', 'ipn_q3', 'ipn_q4', 'ipn_q5', 'ipn_q6', 'ipn_q7', 'ipn_q8', 'ipn_q9', 'ipn_q10',
    'ipn_q11', 'ipn_q12', 'ipn_q13', 'ipn_q14', 'ipn_q15', 'ipn_q16', 'ipn_q17', 'ipn_q18', 'ipn_q19', 'ipn_q20',
    'ipn_b1', 'ipn_b2', 'ipn_b3', 'ipn_b4', 'ipn_b5', 'ipn_b6', 'ipn_b7', 'ipn_b8', 'ipn_b9', 'ipn_b10',
    'ipn_b11', 'ipn_b12', 'ipn_b13', 'ipn_b14', 'ipn_b15', 'ipn_b16', 'ipn_b17', 'ipn_b18', 'ipn_b19', 'ipn_b20',
    'ipn_s1', 'ipn_s2', 'ipn_s3', 'ipn_s4', 'ipn_s5', 'ipn_s6', 'ipn_s7', 'ipn_s8', 'ipn_s9', 'ipn_s10',
    'ipn_s11', 'ipn_s12', 'ipn_s13', 'ipn_s14', 'ipn_s15', 'ipn_s16', 'ipn_s17', 'ipn_s18', 'ipn_s19', 'ipn_s20',
    'ipn_s21', 'ipn_s22', 'ipn_s23', 'ipn_s24', 'ipn_s25',
    'ipn_h1', 'ipn_h2', 'ipn_h3', 'ipn_h4', 'ipn_h5', 'ipn_h6', 'ipn_h7', 'ipn_h8', 'ipn_h9', 'ipn_h10',
    'ipn_h11', 'ipn_h12', 'ipn_h13', 'ipn_h14', 'ipn_h15',
    'ipn_e1', 'ipn_e2', 'ipn_e3', 'ipn_e4', 'ipn_e5', 'ipn_e6', 'ipn_e7', 'ipn_e8', 'ipn_e9', 'ipn_e10',
    'ipn_e11', 'ipn_e12', 'ipn_e13', 'ipn_e14', 'ipn_e15'
  ],
  'ipn_math': ['ipn_m1', 'ipn_m2', 'ipn_m3', 'ipn_m4', 'ipn_m5', 'ipn_m6', 'ipn_m7', 'ipn_m8', 'ipn_m9', 'ipn_m10',
    'ipn_m11', 'ipn_m12', 'ipn_m13', 'ipn_m14', 'ipn_m15', 'ipn_m16', 'ipn_m17', 'ipn_m18', 'ipn_m19', 'ipn_m20',
    'ipn_m21', 'ipn_m22', 'ipn_m23', 'ipn_m24', 'ipn_m25'],
  'ipn_physics': ['ipn_f1', 'ipn_f2', 'ipn_f3', 'ipn_f4', 'ipn_f5', 'ipn_f6', 'ipn_f7', 'ipn_f8', 'ipn_f9', 'ipn_f10',
    'ipn_f11', 'ipn_f12', 'ipn_f13', 'ipn_f14', 'ipn_f15', 'ipn_f16', 'ipn_f17', 'ipn_f18', 'ipn_f19', 'ipn_f20'],
  'ipn_chemistry': ['ipn_q1', 'ipn_q2', 'ipn_q3', 'ipn_q4', 'ipn_q5', 'ipn_q6', 'ipn_q7', 'ipn_q8', 'ipn_q9', 'ipn_q10',
    'ipn_q11', 'ipn_q12', 'ipn_q13', 'ipn_q14', 'ipn_q15', 'ipn_q16', 'ipn_q17', 'ipn_q18', 'ipn_q19', 'ipn_q20'],
  'ipn_biology': ['ipn_b1', 'ipn_b2', 'ipn_b3', 'ipn_b4', 'ipn_b5', 'ipn_b6', 'ipn_b7', 'ipn_b8', 'ipn_b9', 'ipn_b10',
    'ipn_b11', 'ipn_b12', 'ipn_b13', 'ipn_b14', 'ipn_b15', 'ipn_b16', 'ipn_b17', 'ipn_b18', 'ipn_b19', 'ipn_b20'],
  'ipn_spanish': ['ipn_s1', 'ipn_s2', 'ipn_s3', 'ipn_s4', 'ipn_s5', 'ipn_s6', 'ipn_s7', 'ipn_s8', 'ipn_s9', 'ipn_s10',
    'ipn_s11', 'ipn_s12', 'ipn_s13', 'ipn_s14', 'ipn_s15', 'ipn_s16', 'ipn_s17', 'ipn_s18', 'ipn_s19', 'ipn_s20',
    'ipn_s21', 'ipn_s22', 'ipn_s23', 'ipn_s24', 'ipn_s25'],
  'ipn_history': ['ipn_h1', 'ipn_h2', 'ipn_h3', 'ipn_h4', 'ipn_h5', 'ipn_h6', 'ipn_h7', 'ipn_h8', 'ipn_h9', 'ipn_h10',
    'ipn_h11', 'ipn_h12', 'ipn_h13', 'ipn_h14', 'ipn_h15'],
  'ipn_english': ['ipn_e1', 'ipn_e2', 'ipn_e3', 'ipn_e4', 'ipn_e5', 'ipn_e6', 'ipn_e7', 'ipn_e8', 'ipn_e9', 'ipn_e10',
    'ipn_e11', 'ipn_e12', 'ipn_e13', 'ipn_e14', 'ipn_e15']
};

export function getIpnExamById(id: string): Exam | undefined {
  return ipnExams.find(e => e.id === id);
}

export function getIpnReadingById(id: string): Reading | undefined {
  return ipnReadings.find(r => r.id === id);
}

export function getIpnQuestionById(id: string): Question | undefined {
  return ipnQuestions.find(q => q.id === id);
}

export function getIpnQuestionsWithReadings(examId: string): (Question & { reading?: Reading })[] {
  const questionIds = ipnExamQuestionMap[examId] || [];
  return questionIds.map(id => {
    const q = getIpnQuestionById(id)!;
    return {
      ...q,
      reading: q.readingId ? getIpnReadingById(q.readingId) : undefined
    };
  });
}

export function getIpnAreaLabel(area: string): string {
  const labels: Record<string, string> = {
    math: 'Matemáticas',
    physics: 'Física',
    chemistry: 'Química',
    biology: 'Biología',
    reading: 'Competencia Escrita y Lectora',
    history: 'Historia',
    english: 'Inglés'
  };
  return labels[area] || area;
}
