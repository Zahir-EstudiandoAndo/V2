import type { Exam, Reading, Question } from '../../../shared/types';

export const exaniExams: Exam[] = [
  {
    id: 'exani_full',
    title: 'EXANI-II Completo - Simulacro Oficial',
    description: 'Examen realista de 120 reactivos: 30 de cada área. Tiempo límite: 3.5 horas.',
    area: 'reading',
    difficulty: 'full',
    timeLimit: 210,
    questionCount: 120,
    icon: 'Trophy'
  },
  {
    id: 'reading_basic',
    title: 'Comprensión Lectora - Nivel Básico',
    description: 'Textos informativos y literarios con preguntas de comprensión.',
    area: 'reading',
    difficulty: 'basic',
    timeLimit: 30,
    questionCount: 20,
    icon: 'BookOpen'
  },
  {
    id: 'reading_advanced',
    title: 'Comprensión Lectora - Nivel Avanzado',
    description: 'Textos complejos con análisis de argumentación y estructura.',
    area: 'reading',
    difficulty: 'advanced',
    timeLimit: 35,
    questionCount: 20,
    icon: 'BookOpen'
  },
  {
    id: 'writing_basic',
    title: 'Redacción Indirecta - Fundamentos',
    description: 'Gramática básica, ortografía y concordancia nominal.',
    area: 'writing',
    difficulty: 'basic',
    timeLimit: 25,
    questionCount: 20,
    icon: 'Pencil'
  },
  {
    id: 'math_basic',
    title: 'Pensamiento Matemático - Básico',
    description: 'Aritmética, álgebra elemental y geometría básica.',
    area: 'math',
    difficulty: 'basic',
    timeLimit: 35,
    questionCount: 20,
    icon: 'Calculator'
  },
  {
    id: 'english_basic',
    title: 'Inglés Diagnóstico - Nivel 1',
    description: 'Comprensión lectora básica y vocabulario fundamental.',
    area: 'english',
    difficulty: 'basic',
    timeLimit: 25,
    questionCount: 20,
    icon: 'Globe'
  }
];

export const exaniReadings: Reading[] = [
  {
    id: 'r_neuroplasticidad',
    title: 'Neuroplasticidad: El cerebro que se reinventa',
    type: 'CIENCIA',
    area: 'reading',
    content: `<p>Durante décadas, el dogma central de la neurología sostenía que el cerebro adulto era una estructura estática, incapaz de generar nuevas neuronas o modificar sus conexiones de manera significativa. Sin embargo, investigaciones recientes han derribado este mito, introduciendo el concepto de neuroplasticidad.</p>
    <p>La neuroplasticidad se define como la capacidad del sistema nervioso para cambiar su estructura y su funcionamiento a lo largo de la vida, como reacción a la diversidad del entorno. Este proceso permite a las neuronas regenerarse tanto anatómica como funcionalmente y formar nuevas conexiones sinápticas.</p>
    <p>Este descubrimiento tiene implicaciones profundas para la educación y la rehabilitación. Significa que el aprendizaje no es meramente la acumulación de datos, sino un proceso biológico que remodela físicamente el órgano del pensamiento.</p>`
  },
  {
    id: 'r_materia_oscura',
    title: 'El misterio de la materia oscura',
    type: 'ASTRONOMÍA',
    area: 'reading',
    content: `<p>Al observar la rotación de las galaxias, los astrónomos se toparon con un problema aritmético fundamental: no había suficiente materia visible para mantener las estrellas en sus órbitas. Según las leyes de Newton, las estrellas en los bordes de las galaxias deberían salir despedidas al espacio.</p>
    <p>Para explicar esta discrepancia, se postuló la existencia de la "materia oscura", una sustancia hipotética que no emite ni refleja luz, pero que ejerce atracción gravitatoria. Se estima que constituye aproximadamente el 85% de la materia del universo.</p>
    <p>Su detección es, por tanto, indirecta. Sabemos que está ahí por sus efectos gravitacionales sobre la materia visible.</p>`
  },
  {
    id: 'r_pedro_paramo',
    title: 'Ecos del Llano',
    type: 'LITERATURA',
    area: 'reading',
    content: `<p>Vine a este pueblo porque me dijeron que acá vivía mi padre, un tal Pedro Páramo. Mi madre me lo dijo. Y yo le prometí que vendría a verlo en cuanto ella muriera. Le apreté sus manos en señal de que lo haría; pues ella estaba por morirse y yo en un plan de prometerlo todo.</p>
    <p>Entonces no pude hacer otra cosa que decirle que así lo haría, y de tanto decírselo se lo seguí diciendo aun después de que a mis manos les costó trabajo zafarse de sus manos muertas.</p>
    <p>El calor aquí es sofocante. El aire pesa, como si estuviera hecho de plomo derretido.</p>`
  },
  {
    id: 'r_sor_juana',
    title: 'Hombres Necios',
    type: 'POESÍA',
    area: 'reading',
    content: `<p>Hombres necios que acusáis<br>a la mujer sin razón,<br>sin ver que sois la ocasión<br>de lo mismo que culpáis:</p>
    <p>si con ansia sin igual<br>solicitáis su desdén,<br>¿por qué queréis que obren bien<br>si las incitáis al mal?</p>
    <p>En estas redondillas, Sor Juana Inés de la Cruz expone la hipocresía de la sociedad patriarcal del siglo XVII.</p>`
  },
  {
    id: 'r_redes_sociales',
    title: 'La dictadura del Like',
    type: 'ARGUMENTATIVO',
    area: 'reading',
    content: `<p>Vivimos en la era de la validación externa cuantificable. Las redes sociales han gamificado la interacción humana, convirtiendo la aprobación social en una métrica visible: el "like".</p>
    <p>El problema no es la tecnología en sí, sino el diseño conductual detrás de ella. Las plataformas están diseñadas para generar descargas de dopamina intermitentes, similares a las de las máquinas tragamonedas.</p>
    <p>Además, esta dinámica fomenta la homogeneización del pensamiento. Se sacrifica la autenticidad en el altar de la popularidad algorítmica.</p>`
  },
  {
    id: 'r_lectura_profunda',
    title: 'La resistencia lectora',
    type: 'ENSAYO',
    area: 'reading',
    content: `<p>La lectura profunda es un acto de resistencia. En un mundo dominado por la inmediatez y la fragmentación de la atención, sentarse a leer un texto largo y complejo se ha convertido en una actividad contracultural.</p>
    <p>Maryanne Wolf, neurocientífica cognitiva, advierte que si no ejercitamos los circuitos neuronales de la lectura profunda, estos se atrofian.</p>
    <p>Defender la lectura no es nostalgia por el papel; es defender nuestra capacidad de pensamiento crítico.</p>`
  },
  {
    id: 'r_english_tsunami',
    title: 'A Mega-Tsunami on Early Mars',
    type: 'SCIENCE',
    area: 'english',
    content: `<p>A group of researchers led by François Costard reports on a dramatic tsunami that occurred on Mars billions of years ago, before the planet turned into the dusty desert we see today.</p>
    <p>On Earth, tsunamis are usually caused when an earthquake, volcanic eruption, or landslide displaces a huge volume of water. The tsunami that occurred about three billion years ago on Mars was much more violent.</p>
    <p>Based on their study of surrounding landforms, Costard's team identified the site of the tsunami's origin as Lomonosov crater, which shows signs of having been hit by an asteroid when it was submerged underwater.</p>`
  },
  {
    id: 'r_english_whatsapp',
    title: 'WhatsApp Encryption Under Scrutiny',
    type: 'TECHNOLOGY',
    area: 'english',
    content: `<p>A new lawsuit filed against Meta by different international groups accuses the company of accessing users' messages on WhatsApp, claiming that its end-to-end encryption measures are false.</p>
    <p>One of the particularities that characterizes Meta's instant messaging platform is that it applies its end-to-end encryption technology in all its functions.</p>
    <p>This security and privacy measure guarantees that only the sender and receiver access the messages, encrypting the information and thereby preventing third parties from accessing its content.</p>`
  }
];

export const exaniQuestions: Question[] = [
  // COMPRENSIÓN LECTORA (30 preguntas)
  { id: 'r001', readingId: 'r_neuroplasticidad', text: '¿Cuál es la implicación fundamental del cambio de paradigma descrito en el texto?', options: ['La neurología carecía de bases científicas antes del descubrimiento.', 'El cerebro humano posee un potencial adaptativo que trasciende su biología inicial.', 'El dogma estático era una mentira deliberada.', 'La regeneración neuronal ocurre independientemente del entorno.'], correctAnswer: 1, explanation: 'La neuroplasticidad implica que el cerebro no es fijo, sino que su potencial se expande y adapta a lo largo de la vida. Este es el cambio de paradigma más importante: pasamos de ver el cerebro como estático a entenderlo como un órgano en constante transformación.', area: 'reading', topic: 'Idea principal', difficulty: 'medium' },
  { id: 'r002', readingId: 'r_neuroplasticidad', text: 'En el contexto del aprendizaje, ¿cómo se reinterpreta el acto de "adquirir conocimiento"?', options: ['Como una simple memorización de datos externos.', 'Como una reconfiguración física y funcional de la arquitectura cerebral.', 'Como un proceso puramente psicológico sin base orgánica.', 'Como una acumulación estática de información.'], correctAnswer: 1, explanation: 'El aprendizaje es un proceso biológico que remodela físicamente el cerebro, creando nuevas conexiones sinápticas. Cada vez que aprendemos algo nuevo, nuestro cerebro cambia físicamente.', area: 'reading', topic: 'Inferencia', difficulty: 'medium' },
  { id: 'r003', readingId: 'r_neuroplasticidad', text: '¿Qué relación existe entre neuroplasticidad y rehabilitación según el texto?', options: ['No existe relación directa.', 'La rehabilitación es imposible sin medicamentos.', 'Otras áreas del cerebro pueden asumir funciones perdidas.', 'Solo funciona en niños pequeños.'], correctAnswer: 2, explanation: 'El texto indica que habilidades perdidas pueden recuperarse entrenando otras áreas cerebrales. Esto es posible gracias a la neuroplasticidad, que permite que diferentes regiones del cerebro compensen funciones dañadas.', area: 'reading', topic: 'Comprensión literal', difficulty: 'easy' },
  
  { id: 'r004', readingId: 'r_materia_oscura', text: '¿Por qué los astrónomos postularon la existencia de la materia oscura?', options: ['Porque pudieron observarla directamente.', 'Porque las estrellas brillaban demasiado.', 'Porque la materia visible no explica el comportamiento gravitacional observado.', 'Porque Newton se equivocó en sus cálculos.'], correctAnswer: 2, explanation: 'La materia oscura fue postulada para explicar por qué las galaxias no se desintegran por falta de masa visible. Las estrellas en los bordes deberían salir despedidas, pero no lo hacen, lo que indica la presencia de masa invisible.', area: 'reading', topic: 'Causa-efecto', difficulty: 'medium' },
  { id: 'r005', readingId: 'r_materia_oscura', text: '¿Qué característica fundamental distingue a la materia oscura?', options: ['Emite luz infrarroja.', 'No interactúa con la fuerza electromagnética.', 'Es más densa que el plomo.', 'Solo existe en el centro de las galaxias.'], correctAnswer: 1, explanation: 'La materia oscura no emite ni refleja luz porque no interactúa electromagnéticamente. Esta es su característica distintiva: es invisible a nuestros telescopios.', area: 'reading', topic: 'Detalle', difficulty: 'easy' },
  { id: 'r006', readingId: 'r_materia_oscura', text: '¿Qué porcentaje de la materia del universo es materia oscura según el texto?', options: ['Aproximadamente 15%.', 'Aproximadamente 50%.', 'Aproximadamente 85%.', 'Menos del 5%.'], correctAnswer: 2, explanation: 'El texto indica que constituye aproximadamente el 85% de la materia del universo. Esto significa que la materia que conocemos (planetas, estrellas, etc.) representa solo el 15%.', area: 'reading', topic: 'Dato numérico', difficulty: 'easy' },
  
  { id: 'r007', readingId: 'r_pedro_paramo', text: '¿Qué recurso literario predomina en la descripción del ambiente?', options: ['La hipérbole y la comparación sensorial.', 'La personificación exclusiva.', 'El símil sin metáfora.', 'La aliteración constante.'], correctAnswer: 0, explanation: 'El texto usa hipérbole ("plomo derretido") y comparaciones sensoriales para crear atmósfera opresiva. El calor sofocante y el aire que "pesa" son ejemplos claros.', area: 'reading', topic: 'Recursos literarios', difficulty: 'medium' },
  { id: 'r008', readingId: 'r_pedro_paramo', text: '¿Qué simboliza la promesa hecha a la madre moribunda?', options: ['Una simple obligación familiar.', 'Un pacto que trasciende la muerte y vincula al hijo con su pasado.', 'Un acto de rebeldía juvenil.', 'Una tradición mexicana sin mayor significado.'], correctAnswer: 1, explanation: 'La promesa conecta al protagonista con su origen y lo obliga a confrontar su historia. Las "manos muertas" que no sueltan simbolizan cómo el pasado lo ata.', area: 'reading', topic: 'Simbolismo', difficulty: 'hard' },
  { id: 'r009', readingId: 'r_pedro_paramo', text: '¿Qué tono predomina en el fragmento?', options: ['Alegre y esperanzador.', 'Nostálgico y desolador.', 'Irónico y humorístico.', 'Neutral y descriptivo.'], correctAnswer: 1, explanation: 'El ambiente sofocante, las ruinas y la muerte crean un tono desolador y melancólico. La descripción del calor "como plomo derretido" contribuye a esta atmósfera.', area: 'reading', topic: 'Tono', difficulty: 'easy' },
  
  { id: 'r010', readingId: 'r_sor_juana', text: '¿Cuál es la tesis central del poema de Sor Juana?', options: ['Que los hombres son superiores intelectualmente.', 'Que existe una contradicción en el juicio moral masculino hacia las mujeres.', 'Que las mujeres deben someterse.', 'Que el amor es imposible.'], correctAnswer: 1, explanation: 'Sor Juana denuncia la hipocresía de condenar en la mujer lo que el hombre mismo provoca. La pregunta retórica final evidencia esta contradicción.', area: 'reading', topic: 'Tema central', difficulty: 'medium' },
  { id: 'r011', readingId: 'r_sor_juana', text: '¿Qué figura retórica usa Sor Juana para exponer la contradicción?', options: ['Solo la metáfora.', 'El retruécano y la antítesis.', 'La onomatopeya.', 'El símil únicamente.'], correctAnswer: 1, explanation: 'Utiliza el retruécano (mostrar lo mismo desde otra perspectiva) y la antítesis (contraposición de ideas) para mostrar la contradicción masculina.', area: 'reading', topic: 'Figuras retóricas', difficulty: 'medium' },
  { id: 'r012', readingId: 'r_sor_juana', text: '¿Qué significa "necedad" en el contexto del poema?', options: ['Falta de inteligencia.', 'Terquedad en el error moral.', 'Ignorancia académica.', 'Pobreza económica.'], correctAnswer: 1, explanation: 'La necedad aquí no es falta de inteligencia sino obstinación en el error moral. Los hombres persisten en su juicio injusto a pesar de la evidencia.', area: 'reading', topic: 'Vocabulario en contexto', difficulty: 'hard' },
  
  { id: 'r013', readingId: 'r_redes_sociales', text: '¿Qué efecto tienen las redes sociales según el texto?', options: ['Mejoran la autoestima de todos.', 'Crean adicción a la retroalimentación inmediata.', 'Fomentan el pensamiento crítico.', 'Eliminan la necesidad de aprobación.'], correctAnswer: 1, explanation: 'Las plataformas generan descargas de dopamina que crean adicción a la validación externa. Esto se compara con las máquinas tragamonedas.', area: 'reading', topic: 'Idea principal', difficulty: 'easy' },
  { id: 'r014', readingId: 'r_redes_sociales', text: '¿Por qué se homogeneiza el pensamiento en redes sociales?', options: ['Porque las personas quieren ser únicas.', 'Porque se busca maximizar likes evitando controversia.', 'Porque los algoritmos promueven la diversidad.', 'Porque no hay suficientes usuarios.'], correctAnswer: 1, explanation: 'Para obtener más likes, los usuarios evitan opiniones controvertidas o matizadas. Esto lleva a la "homogeneización del pensamiento".', area: 'reading', topic: 'Inferencia', difficulty: 'medium' },
  { id: 'r015', readingId: 'r_redes_sociales', text: '¿Qué implica comparar las redes sociales con "máquinas tragamonedas"?', options: ['Que son muy coloridas.', 'Que están diseñadas para crear adicción mediante recompensas intermitentes.', 'Que se pueden ganar premios.', 'Que son ilegales.'], correctAnswer: 1, explanation: 'Las tragamonedas crean adicción con recompensas impredecibles, igual que los likes. Las descargas de dopamina intermitentes mantienen al usuario enganchado.', area: 'reading', topic: 'Comparación', difficulty: 'medium' },
  
  { id: 'r016', readingId: 'r_lectura_profunda', text: '¿Por qué la lectura profunda es un "acto de resistencia"?', options: ['Porque los libros son caros.', 'Porque contradice la cultura de la inmediatez y fragmentación.', 'Porque está prohibida en algunos países.', 'Porque nadie lee ya.'], correctAnswer: 1, explanation: 'En un mundo de inmediatez, leer textos largos es contracultural. Va en contra de la tendencia dominante de consumo rápido de información.', area: 'reading', topic: 'Inferencia', difficulty: 'medium' },
  { id: 'r017', readingId: 'r_lectura_profunda', text: '¿Qué consecuencia tiene no ejercitar la lectura profunda?', options: ['Se pierde la vista.', 'Se atrofian los circuitos neuronales relacionados.', 'Se olvida el alfabeto.', 'No hay consecuencias.'], correctAnswer: 1, explanation: 'Maryanne Wolf advierte que estos circuitos neuronales se atrofian sin uso. Es el principio de "use it or lose it" aplicado al cerebro.', area: 'reading', topic: 'Comprensión literal', difficulty: 'easy' },
  { id: 'r018', readingId: 'r_lectura_profunda', text: '¿Contra qué nos protege la lectura profunda según el texto?', options: ['Contra el aburrimiento.', 'Contra la manipulación y las noticias falsas.', 'Contra el insomnio.', 'Contra la soledad.'], correctAnswer: 1, explanation: 'Sin lectura profunda somos más vulnerables a la manipulación y desinformación. El pensamiento crítico desarrollado por la lectura nos protege.', area: 'reading', topic: 'Inferencia', difficulty: 'medium' },

  // Preguntas sin texto (habilidades puras)
  { id: 'r019', readingId: null, text: '¿Cuál es la intención del autor de un texto que utiliza ironía constante para describir las costumbres de la alta sociedad?', options: ['Halagar a la clase aristocrática.', 'Criticar socialmente comportamientos pretenciosos.', 'Documentar históricamente un período.', 'Entretener sin mayor propósito.'], correctAnswer: 1, explanation: 'La ironía es un recurso común para la crítica social. El autor expone lo ridículo de ciertos comportamientos sin decirlo explícitamente.', area: 'reading', topic: 'Intención del autor', difficulty: 'medium' },
  { id: 'r020', readingId: null, text: 'En un texto argumentativo, la función de los conectores como "por lo tanto" y "en consecuencia" es:', options: ['Introducir ejemplos.', 'Expresar consecuencias lógicas.', 'Presentar ideas contradictorias.', 'Concluir el texto.'], correctAnswer: 1, explanation: 'Estos conectores indican relaciones de consecuencia entre premisas. Señalan que lo que viene después es resultado de lo anterior.', area: 'reading', topic: 'Conectores', difficulty: 'easy' },
  { id: 'r021', readingId: null, text: '¿Qué indica que un texto tiene una estructura deductiva?', options: ['Comienza con ejemplos particulares.', 'Inicia con una tesis general que luego desarrolla.', 'Presenta una narración cronológica.', 'Alterna entre teoría y práctica.'], correctAnswer: 1, explanation: 'La estructura deductiva va de lo general (tesis) a lo particular (argumentos). Es el método científico clásico.', area: 'reading', topic: 'Estructura textual', difficulty: 'medium' },
  { id: 'r022', readingId: null, text: 'La función referencial de un texto se caracteriza por:', options: ['Expresar emociones del emisor.', 'Informar sobre hechos objetivos.', 'Persuadir al receptor.', 'Establecer contacto social.'], correctAnswer: 1, explanation: 'La función referencial prioriza el contenido informativo sobre la expresión emocional. Busca transmitir información objetiva sobre la realidad.', area: 'reading', topic: 'Funciones del lenguaje', difficulty: 'easy' },
  { id: 'r023', readingId: null, text: 'En un texto expositivo, la presencia de datos estadísticos tiene como propósito:', options: ['Emocionar al lector.', 'Fundamentar objetivamente las afirmaciones.', 'Crear suspense narrativo.', 'Establecer un tono humorístico.'], correctAnswer: 1, explanation: 'Los datos estadísticos aportan evidencia objetiva a un texto expositivo, dando credibilidad a los argumentos presentados.', area: 'reading', topic: 'Recursos expositivos', difficulty: 'easy' },
  { id: 'r024', readingId: null, text: '¿Qué caracteriza a una metáfora?', options: ['Comparación explícita usando "como".', 'Identificación implícita de términos distintos.', 'Repetición de sonidos al inicio de palabras.', 'Exageración intencional.'], correctAnswer: 1, explanation: 'La metáfora identifica dos términos sin usar conectores comparativos explícitos. Es una comparación implícita (ej: "el tiempo es oro").', area: 'reading', topic: 'Figuras retóricas', difficulty: 'easy' },
  { id: 'r025', readingId: null, text: 'El tono de un texto está determinado principalmente por:', options: ['La longitud de los párrafos.', 'La actitud del autor hacia el tema.', 'La cantidad de verbos utilizados.', 'El número de páginas.'], correctAnswer: 1, explanation: 'El tono refleja la actitud emocional o valorativa del autor hacia su tema. Puede ser irónico, serio, humorístico, etc.', area: 'reading', topic: 'Tono', difficulty: 'easy' },
  { id: 'r026', readingId: null, text: '¿Qué tipo de texto presenta información de manera objetiva y ordenada?', options: ['Narrativo', 'Expositivo', 'Argumentativo', 'Lírico'], correctAnswer: 1, explanation: 'El texto expositivo tiene como objetivo informar sobre un tema de manera clara, objetiva y ordenada, sin incluir opiniones personales.', area: 'reading', topic: 'Tipos de texto', difficulty: 'easy' },
  { id: 'r027', readingId: null, text: 'La coherencia textual se refiere a:', options: ['La correcta escritura de las palabras.', 'La conexión lógica entre las ideas del texto.', 'El uso adecuado de signos de puntuación.', 'La extensión apropiada del texto.'], correctAnswer: 1, explanation: 'La coherencia es la conexión lógica entre las ideas. Un texto coherente presenta ideas relacionadas que se desarrollan de manera ordenada.', area: 'reading', topic: 'Coherencia', difficulty: 'medium' },
  { id: 'r028', readingId: null, text: '¿Qué es una síntesis de un texto?', options: ['Una copia exacta del texto original.', 'Un resumen que conserva las ideas principales.', 'Una interpretación personal del contenido.', 'Una traducción a otro idioma.'], correctAnswer: 1, explanation: 'Una síntesis es un resumen que conserva las ideas principales del texto original, eliminando información secundaria.', area: 'reading', topic: 'Comprensión lectora', difficulty: 'easy' },
  { id: 'r029', readingId: null, text: 'En la lectura de un texto literario, ¿qué es el narrador?', options: ['El autor del texto.', 'La voz que cuenta la historia.', 'El personaje principal.', 'El lector del texto.'], correctAnswer: 1, explanation: 'El narrador es la voz que cuenta la historia. No necesariamente coincide con el autor y puede ser primera o tercera persona.', area: 'reading', topic: 'Narrativa', difficulty: 'easy' },
  { id: 'r030', readingId: null, text: '¿Cuál es el propósito de un texto persuasivo?', options: ['Informar datos objetivos.', 'Entretener al lector.', 'Convencer al lector de una idea.', 'Describir un lugar.'], correctAnswer: 2, explanation: 'El texto persuasivo busca convencer al lector de adoptar una postura o realizar una acción. Usa argumentos y apelaciones emocionales.', area: 'reading', topic: 'Tipos de texto', difficulty: 'easy' },

  // REDACCIÓN INDIRECTA (30 preguntas)
  { id: 'w001', readingId: null, text: '¿Cuál oración contiene un sustantivo propio correctamente escrito?', options: ['La ciudad de mexico es grande.', 'El volcán Kilauea está en Hawaii.', 'juan llegó temprano.', 'Me gusta la Música clásica.'], correctAnswer: 1, explanation: 'Los sustantivos propios (Kilauea, Hawaii) llevan mayúscula inicial. "México" y "Juan" también deben llevar mayúscula inicial.', area: 'writing', topic: 'Sustantivos', difficulty: 'easy' },
  { id: 'w002', readingId: null, text: '¿Qué tipo de verbo es "hay" en la oración "Hay muchos libros"?', options: ['Transitivo.', 'Impersonal.', 'Copulativo.', 'Reflexivo.'], correctAnswer: 1, explanation: 'Los verbos impersonales como "hay" no tienen sujeto gramatical. No hay nadie que "haya" los libros; simplemente existen.', area: 'writing', topic: 'Verbos', difficulty: 'easy' },
  { id: 'w003', readingId: null, text: '¿Qué tipo de oración es "Estudia y aprueba"?', options: ['Yuxtapuesta.', 'Coordinada copulativa.', 'Subordinada.', 'Simple.'], correctAnswer: 1, explanation: 'Están unidas por el nexo coordinante "y", formando oración coordinada copulativa. Une elementos de manera aditiva.', area: 'writing', topic: 'Oraciones compuestas', difficulty: 'medium' },
  { id: 'w004', readingId: null, text: '¿Cuáles son las únicas contracciones válidas en español?', options: ['Del y al.', 'Pa y pa´l.', 'Pal y del.', 'Al y a el.'], correctAnswer: 0, explanation: 'En español solo existen dos contracciones: al (a + el) y del (de + el). "Pa" es coloquial y no forma parte de la norma culta.', area: 'writing', topic: 'Contracciones', difficulty: 'easy' },
  { id: 'w005', readingId: null, text: '¿Qué caracteriza a una oración subordinada?', options: ['Tiene dos verbos independientes.', 'Una oración depende sintácticamente de otra.', 'No tiene verbo.', 'Siempre es interrogativa.'], correctAnswer: 1, explanation: 'En las subordinadas, una oración depende sintácticamente de la principal. No puede funcionar sola como oración completa.', area: 'writing', topic: 'Oraciones subordinadas', difficulty: 'medium' },
  { id: 'w006', readingId: null, text: '¿Cuál oración tiene concordancia correcta?', options: ['El espacio y la motivación apropiado.', 'El espacio y la motivación apropiados.', 'El espacio y la motivación apropiada.', 'Los espacio y motivación apropiados.'], correctAnswer: 1, explanation: 'Con sustantivos de diferente género, el adjetivo va en masculino plural. "Espacio" es masculino y "motivación" es femenino.', area: 'writing', topic: 'Concordancia', difficulty: 'medium' },
  { id: 'w007', readingId: null, text: '¿Qué son los sustantivos colectivos?', options: ['Los que nombran varios objetos con plural.', 'Palabras singulares que designan conjuntos.', 'Sustantivos que siempre van en plural.', 'Los que nombran sentimientos.'], correctAnswer: 1, explanation: 'Palabras como "mayoría, gente, clero" son singulares pero designan conjuntos de personas o cosas.', area: 'writing', topic: 'Sustantivos', difficulty: 'medium' },
  { id: 'w008', readingId: null, text: '¿Cuándo se sustantiva un adjetivo?', options: ['Cuando va después del sustantivo.', 'Cuando va precedido de artículo y funciona como sustantivo.', 'Cuando describe un color.', 'Nunca puede sustantivarse.'], correctAnswer: 1, explanation: 'Un adjetivo se sustantiva cuando lleva artículo: "La pelirroja llegó" (la persona pelirroja).', area: 'writing', topic: 'Adjetivos', difficulty: 'hard' },
  { id: 'w009', readingId: null, text: '¿Qué nexos caracterizan a las oraciones coordinadas adversativas?', options: ['Y, e, ni.', 'Pero, sino, mas.', 'O, u.', 'Porque, ya que.'], correctAnswer: 1, explanation: 'Los nexos adversativos (pero, sino, mas) indican contraste u oposición entre las ideas unidas.', area: 'writing', topic: 'Nexos', difficulty: 'easy' },
  { id: 'w010', readingId: null, text: '¿Cuál es la forma correcta de referirse a una escritora?', options: ['Fue nombrado uno de los escritores.', 'Fue nombrada una de las escritoras.', 'Fue nombrado una de los escritores.', 'Fue nombrada uno de los escritoras.'], correctAnswer: 1, explanation: 'Se debe usar el género gramatical correcto: "fue nombrada una de las escritoras". El verbo y el artículo deben concordar.', area: 'writing', topic: 'Género gramatical', difficulty: 'medium' },
  
  { id: 'w011', readingId: null, text: '¿Cuándo se usa "rr" en español?', options: ['Siempre que el sonido es fuerte.', 'Cuando va entre vocales y el sonido es fuerte.', 'Al inicio de palabra.', 'Después de consonante.'], correctAnswer: 1, explanation: 'Se usa "rr" entre vocales con sonido fuerte: perro, carro. Al inicio o tras consonante se usa "r" (ratón, enredo).', area: 'writing', topic: 'Ortografía básica', difficulty: 'easy' },
  { id: 'w012', readingId: null, text: '¿Cuál palabra está correctamente escrita?', options: ['Enrredo.', 'Isrrael.', 'Enredo.', 'Ariba.'], correctAnswer: 2, explanation: 'Después de consonante (n) se usa "r" simple: enredo. "Israel" lleva una sola r, y "arriba" se escribe con doble r.', area: 'writing', topic: 'Ortografía básica', difficulty: 'easy' },
  { id: 'w013', readingId: null, text: '¿Qué diferencia hay entre acento prosódico y ortográfico?', options: ['Son lo mismo.', 'El prosódico es la intensidad de voz; el ortográfico es la tilde escrita.', 'El ortográfico no existe.', 'El prosódico solo existe en poesía.'], correctAnswer: 1, explanation: 'Todas las palabras tienen acento prosódico (sílaba fuerte); solo algunas llevan tilde (acento ortográfico) según las reglas.', area: 'writing', topic: 'Acentuación', difficulty: 'medium' },
  { id: 'w014', readingId: null, text: '¿Conservan tilde los adverbios terminados en -mente?', options: ['Nunca llevan tilde.', 'Conservan la tilde del adjetivo base.', 'Siempre llevan tilde.', 'Solo si son largos.'], correctAnswer: 1, explanation: 'Los adverbios en -mente conservan la tilde del adjetivo: rápidamente (de rápido), lentamente (de lento).', area: 'writing', topic: 'Acentuación', difficulty: 'medium' },
  { id: 'w015', readingId: null, text: '¿Las palabras agudas llevan tilde cuando...?', options: ['Siempre.', 'Terminan en vocal, n o s.', 'Nunca.', 'Terminan en consonante.'], correctAnswer: 1, explanation: 'Las agudas llevan tilde si terminan en vocal, n o s: café, canción, después. Si terminan en otra consonante, no llevan tilde.', area: 'writing', topic: 'Acentuación', difficulty: 'easy' },
  { id: 'w016', readingId: null, text: '¿Qué palabras llevan tilde diacrítica?', options: ['Todas las monosílabas.', 'Monosílabas que se distinguen por función gramatical.', 'Solo los verbos.', 'Ninguna monosílaba.'], correctAnswer: 1, explanation: 'La tilde diacrítica distingue función: él (pronombre) vs el (artículo), más (cantidad) vs mas (pero), tú (pronombre) vs tu (posesivo).', area: 'writing', topic: 'Acentuación', difficulty: 'medium' },
  { id: 'w017', readingId: null, text: '¿Cuándo se acentúan los pronombres interrogativos?', options: ['Nunca.', 'Siempre que introducen pregunta directa o indirecta.', 'Solo en preguntas directas.', 'Solo en oraciones largas.'], correctAnswer: 1, explanation: 'Qué, quién, cómo, dónde, cuándo, cuál, cuánto llevan tilde en preguntas directas e indirectas: "No sé qué hacer".', area: 'writing', topic: 'Acentuación', difficulty: 'medium' },
  { id: 'w018', readingId: null, text: '¿Cómo se escribe correctamente el ordinal de 15?', options: ['Quinceavo.', 'Decimoquinto.', 'Quince-avo.', 'El quinceavo.'], correctAnswer: 1, explanation: 'Los ordinales se escriben correctamente: "decimoquinto", no el cardinal "quinceavo" que es incorrecto.', area: 'writing', topic: 'Numerales', difficulty: 'medium' },
  { id: 'w019', readingId: null, text: '¿Cuándo es incorrecto usar coma?', options: ['Antes de "pero".', 'Entre sujeto y predicado.', 'En enumeraciones.', 'Antes de "sin embargo".'], correctAnswer: 1, explanation: 'Nunca se usa coma entre sujeto y predicado: incorrecto "La Organización, ha destinado". El sujeto y predicado van unidos sin pausa.', area: 'writing', topic: 'Puntuación', difficulty: 'medium' },
  { id: 'w020', readingId: null, text: '¿Se pueden combinar puntos suspensivos con "etcétera"?', options: ['Sí, siempre.', 'No, es redundante.', 'Solo en textos formales.', 'Solo en listas.'], correctAnswer: 1, explanation: 'No se combinan porque ambos indican continuación: incorrecto "Mercurio, Venus, etcétera...". Es redundante.', area: 'writing', topic: 'Puntuación', difficulty: 'easy' },
  { id: 'w021', readingId: null, text: '¿Qué función tienen los paréntesis?', options: ['Dar énfasis.', 'Encerrar información aclaratoria.', 'Indicar gritos.', 'Separar oraciones principales.'], correctAnswer: 1, explanation: 'Los paréntesis encierran información aclaratoria o complementaria que puede omitirse sin afectar la comprensión principal.', area: 'writing', topic: 'Puntuación', difficulty: 'easy' },
  { id: 'w022', readingId: null, text: '¿Se usa punto después de signos de interrogación o exclamación?', options: ['Siempre.', 'No, ya funcionan como punto si cierran oración.', 'Solo en preguntas.', 'Solo en exclamaciones.'], correctAnswer: 1, explanation: 'Los signos de cierre (? !) funcionan como punto. Incorrecto: "¿Cómo estás?." No se duplica el punto final.', area: 'writing', topic: 'Puntuación', difficulty: 'easy' },
  { id: 'w023', readingId: null, text: '¿Cuál es la función del punto y coma?', options: ['Igual que el punto.', 'Separar oraciones relacionadas o elementos complejos en enumeración.', 'Reemplazar la coma siempre.', 'Indicar pregunta.'], correctAnswer: 1, explanation: 'El punto y coma separa oraciones relacionadas o elementos que ya tienen comas internas en enumeraciones.', area: 'writing', topic: 'Puntuación', difficulty: 'medium' },
  { id: 'w024', readingId: null, text: '¿Cuál conector expresa causa?', options: ['Por lo tanto.', 'Puesto que.', 'Sin embargo.', 'Además.'], correctAnswer: 1, explanation: 'Los conectores causales (puesto que, ya que, porque) expresan razón o causa de una acción.', area: 'writing', topic: 'Conectores', difficulty: 'easy' },
  { id: 'w025', readingId: null, text: '¿Qué conector usarías para reformular una idea?', options: ['Por lo tanto.', 'Es decir.', 'Sin embargo.', 'Porque.'], correctAnswer: 1, explanation: 'Los conectores explicativos (es decir, en otras palabras, o sea) reformulan o aclaran lo dicho anteriormente.', area: 'writing', topic: 'Conectores', difficulty: 'easy' },
  { id: 'w026', readingId: null, text: '¿Qué expresa el conector "sin embargo"?', options: ['Causa.', 'Contraste u oposición.', 'Adición.', 'Consecuencia.'], correctAnswer: 1, explanation: '"Sin embargo" es un conector adversativo que indica contraste o matiza lo anteriormente dicho.', area: 'writing', topic: 'Conectores', difficulty: 'easy' },
  { id: 'w027', readingId: null, text: '¿Cuál es un conector de orden o secuencia?', options: ['Porque.', 'En primer lugar.', 'Sin embargo.', 'Es decir.'], correctAnswer: 1, explanation: '"En primer lugar, en segundo lugar, finalmente" ordenan la información de manera secuencial.', area: 'writing', topic: 'Conectores', difficulty: 'easy' },
  { id: 'w028', readingId: null, text: '¿Qué conector introduce un ejemplo?', options: ['Sin embargo.', 'Por ejemplo.', 'Por lo tanto.', 'Aunque.'], correctAnswer: 1, explanation: '"Por ejemplo, como, tal como" introducen ejemplos o ilustraciones que aclaran una idea general.', area: 'writing', topic: 'Conectores', difficulty: 'easy' },
  { id: 'w029', readingId: null, text: '¿Qué expresa "a pesar de que"?', options: ['Causa.', 'Concesión u obstáculo que no impide.', 'Consecuencia.', 'Adición.'], correctAnswer: 1, explanation: 'Los conectores concesivos indican obstáculo que no impide la acción principal: "A pesar de la lluvia, salió".', area: 'writing', topic: 'Conectores', difficulty: 'medium' },
  { id: 'w030', readingId: null, text: 'Complete: "La estrategia funcionó; _____, ahora tenemos más clientes."', options: ['sin embargo', 'por lo tanto', 'es decir', 'aunque'], correctAnswer: 1, explanation: '"Por lo tanto" expresa consecuencia de la estrategia exitosa. Es un conector consecutivo.', area: 'writing', topic: 'Conectores', difficulty: 'easy' },

  // PENSAMIENTO MATEMÁTICO (30 preguntas)
  { id: 'm001', readingId: null, text: 'La expresión 2² × 5² se puede escribir como:', options: ['12', '20', '100', '50'], correctAnswer: 2, explanation: '2² × 5² = 4 × 25 = 100. También podemos aplicar la propiedad: (2×5)² = 10² = 100.', area: 'math', topic: 'Potencias', difficulty: 'easy' },
  { id: 'm002', readingId: null, text: '¿Cuál es el resultado de 3⁻²?', options: ['-9', '-6', '1/9', '9'], correctAnswer: 2, explanation: '3⁻² = 1/3² = 1/9. Un exponente negativo indica el recíproco de la base elevada al exponente positivo.', area: 'math', topic: 'Exponentes negativos', difficulty: 'easy' },
  { id: 'm003', readingId: null, text: 'Si 2x + 5 = 13, ¿cuál es el valor de x?', options: ['3', '4', '9', '6'], correctAnswer: 1, explanation: '2x = 13 - 5 = 8, por lo tanto x = 4. Despejamos x restando 5 de ambos lados y dividiendo entre 2.', area: 'math', topic: 'Ecuaciones lineales', difficulty: 'easy' },
  { id: 'm004', readingId: null, text: '¿Qué opción es equivalente a 4(2m + n)²?', options: ['(4m + 2n)²', '(8m + 4n)²', '(4m + 2n)(4m + 2n)', '16m² + 8mn + n²'], correctAnswer: 2, explanation: '4(2m + n)² = [2(2m + n)]² = (4m + 2n)². Sacamos el 2 de la raíz cuadrada del 4.', area: 'math', topic: 'Productos notables', difficulty: 'medium' },
  { id: 'm005', readingId: null, text: 'Factoriza completamente: x² - 9', options: ['(x - 3)²', '(x + 3)(x + 3)', '(x + 3)(x - 3)', 'x(x - 9)'], correctAnswer: 2, explanation: 'Diferencia de cuadrados: x² - 9 = (x + 3)(x - 3). Es de la forma a² - b² = (a+b)(a-b).', area: 'math', topic: 'Factorización', difficulty: 'easy' },
  { id: 'm006', readingId: null, text: 'Si f(x) = 2x² - 3x + 1, ¿cuál es f(2)?', options: ['3', '5', '7', '9'], correctAnswer: 0, explanation: 'f(2) = 2(2)² - 3(2) + 1 = 8 - 6 + 1 = 3. Sustituimos x por 2 y resolvemos.', area: 'math', topic: 'Funciones', difficulty: 'easy' },
  { id: 'm007', readingId: null, text: '¿Cuál es la solución del sistema: x + y = 5, x - y = 1?', options: ['x=2, y=3', 'x=3, y=2', 'x=4, y=1', 'x=1, y=4'], correctAnswer: 1, explanation: 'Sumando ambas ecuaciones: 2x = 6, entonces x = 3. Sustituyendo: 3 + y = 5, entonces y = 2.', area: 'math', topic: 'Sistemas de ecuaciones', difficulty: 'medium' },
  { id: 'm008', readingId: null, text: 'Simplifica: (3x²y³)²', options: ['6x⁴y⁶', '9x⁴y⁶', '9x²y³', '3x⁴y⁶'], correctAnswer: 1, explanation: '(3x²y³)² = 9x⁴y⁶. Elevamos cada factor al cuadrado: 3² = 9, (x²)² = x⁴, (y³)² = y⁶.', area: 'math', topic: 'Leyes de exponentes', difficulty: 'easy' },
  { id: 'm009', readingId: null, text: '¿Cuál es el valor de x en la inecuación 2x - 5 > 3?', options: ['x > 1', 'x > 4', 'x < 4', 'x > -1'], correctAnswer: 1, explanation: '2x > 8, por lo tanto x > 4. Sumamos 5 a ambos lados y dividimos entre 2.', area: 'math', topic: 'Inecuaciones', difficulty: 'easy' },
  { id: 'm010', readingId: null, text: 'Un producto cuesta $48.50 con rebaja del 25%. ¿Cuál es el precio final?', options: ['$36.38', '$35.50', '$36.50', '$34.50'], correctAnswer: 0, explanation: '$48.50 × 0.75 = $36.375 ≈ $36.38. El 75% representa el precio después del 25% de descuento.', area: 'math', topic: 'Porcentajes', difficulty: 'medium' },
  
  { id: 'm011', readingId: null, text: 'Un guardabosques observa la punta de un árbol a 10 m de distancia con ángulo de elevación de 65°. ¿Cuál es la altura? (tan 65° = 2.10)', options: ['21.0 m', '22.8 m', '25.6 m', '19.5 m'], correctAnswer: 0, explanation: 'h = 10 × tan(65°) = 10 × 2.10 = 21.0 m. Usamos tangente porque relaciona el cateto opuesto con el adyacente.', area: 'math', topic: 'Trigonometría', difficulty: 'medium' },
  { id: 'm012', readingId: null, text: 'Si sec a = 5/4, calcule tan a.', options: ['4/5', '4/3', '3/4', '5/3'], correctAnswer: 2, explanation: 'sec a = 5/4 → cos a = 4/5. Usando sen²a + cos²a = 1: sen a = 3/5. Entonces tan a = sen/cos = (3/5)/(4/5) = 3/4.', area: 'math', topic: 'Identidades trigonométricas', difficulty: 'hard' },
  { id: 'm013', readingId: null, text: '¿Cuál es el área de un círculo con radio 6 cm?', options: ['36π cm²', '12π cm²', '18π cm²', '24π cm²'], correctAnswer: 0, explanation: 'A = πr² = π(6)² = 36π cm². El área de un círculo es pi por el radio al cuadrado.', area: 'math', topic: 'Áreas', difficulty: 'easy' },
  { id: 'm014', readingId: null, text: 'Un rectángulo tiene perímetro 30 cm y largo 10 cm. ¿Cuál es su ancho?', options: ['5 cm', '6 cm', '7 cm', '8 cm'], correctAnswer: 0, explanation: 'P = 2(l + a) → 30 = 2(10 + a) → 15 = 10 + a → a = 5 cm. El perímetro es la suma de todos los lados.', area: 'math', topic: 'Perímetros', difficulty: 'easy' },
  { id: 'm015', readingId: null, text: 'La hipotenusa de un triángulo rectángulo mide 10 cm y un cateto 6 cm. ¿Cuánto mide el otro cateto?', options: ['8 cm', '7 cm', '9 cm', '6 cm'], correctAnswer: 0, explanation: 'Por Pitágoras: c² = 10² - 6² = 100 - 36 = 64 → c = 8 cm. El cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.', area: 'math', topic: 'Pitágoras', difficulty: 'easy' },
  { id: 'm016', readingId: null, text: '¿Cuál es el volumen de un cilindro con radio 3 cm y altura 10 cm?', options: ['30π cm³', '60π cm³', '90π cm³', '120π cm³'], correctAnswer: 2, explanation: 'V = πr²h = π(9)(10) = 90π cm³. El volumen es el área de la base por la altura.', area: 'math', topic: 'Volúmenes', difficulty: 'medium' },
  { id: 'm017', readingId: null, text: 'Dos ángulos complementarios miden (2x + 10)° y (3x - 5)°. ¿Cuál es el valor de x?', options: ['35', '37', '33', '30'], correctAnswer: 1, explanation: '2x + 10 + 3x - 5 = 90 → 5x + 5 = 90 → 5x = 85 → x = 17. Ángulos complementarios suman 90°.', area: 'math', topic: 'Ángulos', difficulty: 'medium' },
  { id: 'm018', readingId: null, text: 'Un triángulo equilátero tiene perímetro 24 cm. ¿Cuánto mide cada lado?', options: ['6 cm', '8 cm', '12 cm', '4 cm'], correctAnswer: 1, explanation: 'En un triángulo equilátero, los tres lados son iguales: 24 ÷ 3 = 8 cm.', area: 'math', topic: 'Triángulos', difficulty: 'easy' },
  
  { id: 'm019', readingId: null, text: '¿Qué conjunto tiene mayor desviación estándar? A={13,10,24,8,15,20}, B={16,16,9,12,12,16}, C={19,14,17,15,18,16}', options: ['A', 'B', 'C', 'Iguales'], correctAnswer: 0, explanation: 'El conjunto A tiene valores más dispersos (8 a 24), por lo tanto mayor desviación estándar. La desviación mide la dispersión de los datos.', area: 'math', topic: 'Estadística', difficulty: 'medium' },
  { id: 'm020', readingId: null, text: 'En una tienda se vendieron: 20, 35, 40, 30, 25, 50 pares de zapatos de lunes a sábado. ¿Cuál es la media?', options: ['30', '35', '33.3', '32.5'], correctAnswer: 2, explanation: 'Media = (20+35+40+30+25+50)/6 = 200/6 = 33.3. La media es el promedio aritmético.', area: 'math', topic: 'Media aritmética', difficulty: 'easy' },
  { id: 'm021', readingId: null, text: 'Al lanzar dos dados, ¿cuál es la probabilidad de que la suma sea 7?', options: ['1/6', '1/12', '1/9', '5/36'], correctAnswer: 0, explanation: 'Hay 6 combinaciones que suman 7 de 36 posibles: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Probabilidad = 6/36 = 1/6.', area: 'math', topic: 'Probabilidad', difficulty: 'medium' },
  { id: 'm022', readingId: null, text: 'Un dado está cargado: es dos veces más probable sacar par que impar. ¿Cuál es P(5)?', options: ['1/6', '1/9', '1/18', '2/9'], correctAnswer: 1, explanation: 'P(impar) = p, P(par) = 2p. Hay 3 impares y 3 pares: 3p + 3(2p) = 1 → 9p = 1 → p = 1/9.', area: 'math', topic: 'Probabilidad condicional', difficulty: 'hard' },
  { id: 'm023', readingId: null, text: 'De una baraja de 52 cartas, se extrae una. ¿Cuál es la probabilidad de que sea un as?', options: ['1/13', '4/13', '1/52', '1/4'], correctAnswer: 0, explanation: 'Hay 4 ases de 52 cartas: 4/52 = 1/13. La probabilidad es casos favorables entre casos posibles.', area: 'math', topic: 'Probabilidad', difficulty: 'easy' },
  { id: 'm024', readingId: null, text: 'En una clase de 30 alumnos, 18 son mujeres. ¿Cuál es el porcentaje de hombres?', options: ['40%', '35%', '45%', '50%'], correctAnswer: 0, explanation: 'Hombres = 30 - 18 = 12. Porcentaje = (12/30) × 100 = 40%.', area: 'math', topic: 'Porcentajes', difficulty: 'easy' },
  { id: 'm025', readingId: null, text: 'Los salarios de 5 empleados son: $4000, $4500, $5000, $5500, $6000. ¿Cuál es la mediana?', options: ['$4500', '$5000', '$4800', '$5500'], correctAnswer: 1, explanation: 'La mediana es el valor central cuando están ordenados: $5000. Es el valor que divide los datos en dos partes iguales.', area: 'math', topic: 'Mediana', difficulty: 'easy' },
  { id: 'm026', readingId: null, text: 'Si la probabilidad de lluvia es 0.3, ¿cuál es la probabilidad de que no llueva?', options: ['0.7', '0.3', '0.5', '0.8'], correctAnswer: 0, explanation: 'P(no lluvia) = 1 - P(lluvia) = 1 - 0.3 = 0.7. La probabilidad de un evento y su complemento suman 1.', area: 'math', topic: 'Probabilidad complementaria', difficulty: 'easy' },
  { id: 'm027', readingId: null, text: 'Un árbol crece 0.6 m por año. Si mide 6.3 m, ¿qué edad tiene?', options: ['10 años', '10.5 años', '11 años', '9.5 años'], correctAnswer: 1, explanation: 'Edad = 6.3 ÷ 0.6 = 10.5 años. Dividimos la altura total entre el crecimiento anual.', area: 'math', topic: 'Razones', difficulty: 'easy' },
  { id: 'm028', readingId: null, text: '¿Cuál es el valor de la moda en: 5, 7, 8, 5, 9, 5, 10?', options: ['5', '7', '8', 'No hay moda'], correctAnswer: 0, explanation: 'El número 5 aparece 3 veces, más que cualquier otro. La moda es el valor que más se repite.', area: 'math', topic: 'Moda', difficulty: 'easy' },
  { id: 'm029', readingId: null, text: 'Una máquina produce 5% de piezas defectuosas. De 200 piezas, ¿cuántas se espera que sean defectuosas?', options: ['5', '10', '15', '20'], correctAnswer: 1, explanation: '200 × 0.05 = 10 piezas defectuosas. Multiplicamos el total por el porcentaje de defecto.', area: 'math', topic: 'Porcentajes', difficulty: 'easy' },
  { id: 'm030', readingId: null, text: 'Si x + 2y = 10 y 2x - y = 5, ¿cuál es el valor de x?', options: ['3', '4', '5', '2'], correctAnswer: 1, explanation: 'De la segunda ecuación: y = 2x - 5. Sustituyendo en la primera: x + 2(2x-5) = 10 → 5x - 10 = 10 → x = 4.', area: 'math', topic: 'Sistemas de ecuaciones', difficulty: 'medium' },

  // INGLÉS DIAGNÓSTICO (30 preguntas)
  { id: 'e001', readingId: 'r_english_tsunami', text: 'According to the text, what caused the mega-tsunami on Mars?', options: ['A volcanic eruption', 'An asteroid impact on Lomonosov crater', 'An earthquake', 'A landslide'], correctAnswer: 1, explanation: 'The text states that the tsunami originated from Lomonosov crater, which shows signs of having been hit by an asteroid.', area: 'english', topic: 'Reading comprehension', difficulty: 'easy' },
  { id: 'e002', readingId: 'r_english_tsunami', text: 'When did the tsunami occur on Mars?', options: ['Last year', 'About three billion years ago', 'During the dinosaur era', 'Last century'], correctAnswer: 1, explanation: 'The text mentions "about three billion years ago" as the time when the tsunami occurred.', area: 'english', topic: 'Detail comprehension', difficulty: 'easy' },
  { id: 'e003', readingId: 'r_english_tsunami', text: 'What does the discovery imply about Mars?', options: ['Mars never had oceans', 'Oceans existed more recently than previously thought', 'Mars is currently habitable', 'The planet has no craters'], correctAnswer: 1, explanation: 'The text suggests that if correct, oceans existed much more recently than previously believed.', area: 'english', topic: 'Inference', difficulty: 'medium' },
  { id: 'e004', readingId: 'r_english_whatsapp', text: 'What does end-to-end encryption guarantee according to WhatsApp?', options: ['Meta can access all messages', 'Only sender and receiver can access messages', 'Messages are stored without protection', 'Third parties can read messages'], correctAnswer: 1, explanation: 'The text states that end-to-end encryption guarantees only the sender and receiver can access the messages.', area: 'english', topic: 'Reading comprehension', difficulty: 'easy' },
  { id: 'e005', readingId: 'r_english_whatsapp', text: 'What do the plaintiffs claim about WhatsApp\'s encryption?', options: ['It only works in some countries', 'The security tools are false', 'It uses no recognized protocol', 'It is too expensive'], correctAnswer: 1, explanation: 'The lawsuit claims that WhatsApp\'s end-to-end encryption and security tools are false.', area: 'english', topic: 'Detail comprehension', difficulty: 'medium' },
  
  { id: 'e006', readingId: null, text: 'Choose the correct form: "She _____ to the gym every day."', options: ['go', 'goes', 'going', 'gone'], correctAnswer: 1, explanation: 'With third person singular (she), we use "goes" in present simple. The verb adds -es after vowel + o.', area: 'english', topic: 'Present simple', difficulty: 'easy' },
  { id: 'e007', readingId: null, text: 'Select the correct sentence:', options: ['I have lived here since 2010.', 'I have lived here for 2010.', 'I live here since 2010.', 'I am living here since 2010.'], correctAnswer: 0, explanation: '"Since" is used with a specific point in time with present perfect. "For" is used with durations.', area: 'english', topic: 'Present perfect', difficulty: 'medium' },
  { id: 'e008', readingId: null, text: 'Choose the correct conditional: "If I _____ rich, I would buy a yacht."', options: ['am', 'were', 'would be', 'had been'], correctAnswer: 1, explanation: 'In second conditional, we use "were" for all persons after "if" to express hypothetical situations.', area: 'english', topic: 'Conditionals', difficulty: 'medium' },
  { id: 'e009', readingId: null, text: 'Which sentence uses the passive voice correctly?', options: ['The cake was baked by my mother.', 'The cake baked by my mother.', 'My mother was baked the cake.', 'The cake is baking by my mother.'], correctAnswer: 0, explanation: 'Passive voice: subject + be + past participle + by + agent. The structure must include the auxiliary verb "be".', area: 'english', topic: 'Passive voice', difficulty: 'medium' },
  { id: 'e010', readingId: null, text: 'Choose the correct comparative: "This book is _____ than the movie."', options: ['more better', 'better', 'more good', 'gooder'], correctAnswer: 1, explanation: '"Better" is the correct comparative form of "good". "Good" is an irregular adjective.', area: 'english', topic: 'Comparatives', difficulty: 'easy' },
  
  { id: 'e011', readingId: null, text: 'Select the correct relative pronoun: "The man _____ lives next door is a doctor."', options: ['who', 'which', 'whose', 'whom'], correctAnswer: 0, explanation: '"Who" is used for people as subjects in relative clauses. "Which" is for things, "whom" for objects.', area: 'english', topic: 'Relative clauses', difficulty: 'medium' },
  { id: 'e012', readingId: null, text: 'Choose the correct phrasal verb: "I need to _____ early tomorrow."', options: ['wake up', 'wake on', 'wake in', 'wake at'], correctAnswer: 0, explanation: '"Wake up" means to stop sleeping. Phrasal verbs combine a verb with a preposition/adverb.', area: 'english', topic: 'Phrasal verbs', difficulty: 'easy' },
  { id: 'e013', readingId: null, text: 'Which sentence is grammatically correct?', options: ['She don\'t like coffee.', 'She doesn\'t likes coffee.', 'She doesn\'t like coffee.', 'She not like coffee.'], correctAnswer: 2, explanation: 'Third person singular negative: doesn\'t + base form of verb. No -s on the main verb.', area: 'english', topic: 'Negatives', difficulty: 'easy' },
  { id: 'e014', readingId: null, text: 'Choose the correct preposition: "I\'m interested _____ learning Japanese."', options: ['on', 'in', 'at', 'for'], correctAnswer: 1, explanation: '"Interested in" is the correct collocation. Prepositions often combine with specific adjectives.', area: 'english', topic: 'Prepositions', difficulty: 'easy' },
  { id: 'e015', readingId: null, text: 'Select the correct modal: "You _____ smoke in the hospital."', options: ['must', 'mustn\'t', 'don\'t have to', 'should'], correctAnswer: 1, explanation: '"Mustn\'t" expresses prohibition. "Don\'t have to" means no obligation.', area: 'english', topic: 'Modals', difficulty: 'medium' },
  
  { id: 'e016', readingId: null, text: 'Choose the synonym of "enormous":', options: ['tiny', 'huge', 'small', 'slight'], correctAnswer: 1, explanation: '"Huge" means very large, same as "enormous". Both describe something of great size.', area: 'english', topic: 'Synonyms', difficulty: 'easy' },
  { id: 'e017', readingId: null, text: 'What does "breakthrough" mean?', options: ['A failure', 'An important discovery', 'A physical break', 'A mistake'], correctAnswer: 1, explanation: '"Breakthrough" means an important development or discovery that advances knowledge.', area: 'english', topic: 'Vocabulary', difficulty: 'medium' },
  { id: 'e018', readingId: null, text: 'Choose the antonym of "optimistic":', options: ['hopeful', 'positive', 'pessimistic', 'confident'], correctAnswer: 2, explanation: '"Pessimistic" is the opposite of "optimistic". Optimistic = expecting good; pessimistic = expecting bad.', area: 'english', topic: 'Antonyms', difficulty: 'easy' },
  { id: 'e019', readingId: null, text: 'What does "to postpone" mean?', options: ['To cancel', 'To delay until later', 'To start immediately', 'To finish quickly'], correctAnswer: 1, explanation: '"Postpone" means to delay or defer to a later time. It does not mean to cancel.', area: 'english', topic: 'Vocabulary', difficulty: 'medium' },
  { id: 'e020', readingId: null, text: 'Choose the correct collocation: "_____ a decision"', options: ['do', 'make', 'take', 'have'], correctAnswer: 1, explanation: '"Make a decision" is the correct collocation. Some verbs combine with specific nouns.', area: 'english', topic: 'Collocations', difficulty: 'easy' },
  
  { id: 'e021', readingId: null, text: 'What does "ambiguous" mean?', options: ['Clear and precise', 'Having multiple meanings', 'Very simple', 'Extremely difficult'], correctAnswer: 1, explanation: '"Ambiguous" means open to more than one interpretation; unclear or uncertain.', area: 'english', topic: 'Vocabulary', difficulty: 'medium' },
  { id: 'e022', readingId: null, text: 'Choose the synonym of "to investigate":', options: ['to ignore', 'to examine', 'to forget', 'to avoid'], correctAnswer: 1, explanation: '"Examine" means to inspect or study carefully, similar to "investigate".', area: 'english', topic: 'Synonyms', difficulty: 'easy' },
  { id: 'e023', readingId: null, text: 'What does "sustainable" mean in environmental context?', options: ['Expensive', 'Able to continue without depleting resources', 'Temporary', 'Artificial'], correctAnswer: 1, explanation: '"Sustainable" means able to be maintained without depleting natural resources.', area: 'english', topic: 'Vocabulary', difficulty: 'medium' },
  { id: 'e024', readingId: null, text: 'Choose the correct word: "The _____ of the company increased by 20%."', options: ['profitable', 'profit', 'profits', 'profitably'], correctAnswer: 2, explanation: '"Profits" (noun, plural) is needed as the subject. "Profitable" is an adjective.', area: 'english', topic: 'Word forms', difficulty: 'medium' },
  { id: 'e025', readingId: null, text: 'What does "to take into account" mean?', options: ['To ignore', 'To consider', 'To forget', 'To reject'], correctAnswer: 1, explanation: '"Take into account" means to consider or include something in your thinking.', area: 'english', topic: 'Idioms', difficulty: 'medium' },
  
  { id: 'e026', readingId: null, text: 'Read: "Despite the rain, they went for a walk." What does this mean?', options: ['They stayed home because of rain', 'They went walking even though it was raining', 'They enjoyed the rain', 'They cancelled their walk'], correctAnswer: 1, explanation: '"Despite" indicates contrast - they walked even with the rain. It shows opposition.', area: 'english', topic: 'Reading comprehension', difficulty: 'easy' },
  { id: 'e027', readingId: null, text: 'Choose the correct reported speech: He said, "I am tired."', options: ['He said he is tired.', 'He said he was tired.', 'He said I am tired.', 'He said he were tired.'], correctAnswer: 1, explanation: 'In reported speech, present tense changes to past tense. "Am" becomes "was".', area: 'english', topic: 'Reported speech', difficulty: 'medium' },
  { id: 'e028', readingId: null, text: 'What is the past participle of "write"?', options: ['wrote', 'written', 'writing', 'writed'], correctAnswer: 1, explanation: '"Written" is the past participle. "Wrote" is the simple past. It is an irregular verb.', area: 'english', topic: 'Verb forms', difficulty: 'easy' },
  { id: 'e029', readingId: null, text: 'Choose the correct article: "I saw _____ eagle flying."', options: ['a', 'an', 'the', 'no article'], correctAnswer: 1, explanation: '"An" is used before words starting with vowel sounds. "Eagle" starts with a vowel sound.', area: 'english', topic: 'Articles', difficulty: 'easy' },
  { id: 'e030', readingId: null, text: 'What does "look forward to" mean?', options: ['To wait anxiously', 'To anticipate with pleasure', 'To look ahead', 'To delay'], correctAnswer: 1, explanation: '"Look forward to" means to anticipate something with pleasure or excitement.', area: 'english', topic: 'Phrasal verbs', difficulty: 'medium' }
];

export const exaniExamQuestionMap: Record<string, string[]> = {
  'exani_full': [
    'r001', 'r002', 'r003', 'r004', 'r005', 'r006', 'r007', 'r008', 'r009', 'r010',
    'r011', 'r012', 'r013', 'r014', 'r015', 'r016', 'r017', 'r018', 'r019', 'r020',
    'r021', 'r022', 'r023', 'r024', 'r025', 'r026', 'r027', 'r028', 'r029', 'r030',
    'w001', 'w002', 'w003', 'w004', 'w005', 'w006', 'w007', 'w008', 'w009', 'w010',
    'w011', 'w012', 'w013', 'w014', 'w015', 'w016', 'w017', 'w018', 'w019', 'w020',
    'w021', 'w022', 'w023', 'w024', 'w025', 'w026', 'w027', 'w028', 'w029', 'w030',
    'm001', 'm002', 'm003', 'm004', 'm005', 'm006', 'm007', 'm008', 'm009', 'm010',
    'm011', 'm012', 'm013', 'm014', 'm015', 'm016', 'm017', 'm018', 'm019', 'm020',
    'm021', 'm022', 'm023', 'm024', 'm025', 'm026', 'm027', 'm028', 'm029', 'm030',
    'e001', 'e002', 'e003', 'e004', 'e005', 'e006', 'e007', 'e008', 'e009', 'e010',
    'e011', 'e012', 'e013', 'e014', 'e015', 'e016', 'e017', 'e018', 'e019', 'e020',
    'e021', 'e022', 'e023', 'e024', 'e025', 'e026', 'e027', 'e028', 'e029', 'e030'
  ],
  'reading_basic': ['r001', 'r002', 'r003', 'r004', 'r005', 'r006', 'r007', 'r008', 'r009', 'r010', 'r011', 'r012', 'r013', 'r014', 'r015', 'r016', 'r017', 'r018', 'r019', 'r020'],
  'reading_advanced': ['r021', 'r022', 'r023', 'r024', 'r025', 'r026', 'r027', 'r028', 'r029', 'r030', 'r001', 'r002', 'r003', 'r004', 'r005', 'r006', 'r007', 'r008', 'r009', 'r010'],
  'writing_basic': ['w001', 'w002', 'w003', 'w004', 'w005', 'w006', 'w007', 'w008', 'w009', 'w010', 'w011', 'w012', 'w013', 'w014', 'w015', 'w016', 'w017', 'w018', 'w019', 'w020'],
  'math_basic': ['m001', 'm002', 'm003', 'm004', 'm005', 'm006', 'm007', 'm008', 'm009', 'm010', 'm011', 'm012', 'm013', 'm014', 'm015', 'm016', 'm017', 'm018', 'm019', 'm020'],
  'english_basic': ['e001', 'e002', 'e003', 'e004', 'e005', 'e006', 'e007', 'e008', 'e009', 'e010', 'e011', 'e012', 'e013', 'e014', 'e015', 'e016', 'e017', 'e018', 'e019', 'e020']
};

export function getExaniExamById(id: string): Exam | undefined {
  return exaniExams.find(e => e.id === id);
}

export function getExaniReadingById(id: string): Reading | undefined {
  return exaniReadings.find(r => r.id === id);
}

export function getExaniQuestionById(id: string): Question | undefined {
  return exaniQuestions.find(q => q.id === id);
}

export function getExaniQuestionsWithReadings(examId: string): (Question & { reading?: Reading })[] {
  const questionIds = exaniExamQuestionMap[examId] || [];
  return questionIds.map(id => {
    const q = getExaniQuestionById(id)!;
    return {
      ...q,
      reading: q.readingId ? getExaniReadingById(q.readingId) : undefined
    };
  });
}

export function getExaniAreaLabel(area: string): string {
  const labels: Record<string, string> = {
    reading: 'Comprensión Lectora',
    writing: 'Redacción Indirecta',
    math: 'Pensamiento Matemático',
    english: 'Inglés Diagnóstico'
  };
  return labels[area] || area;
}
