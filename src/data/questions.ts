
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'basic' | 'intermediate' | 'advanced' | 'extra';
}

export const questions: Question[] = [
  // Nível Básico
  {
    id: 1,
    question: "O que significa Seiri no 5S?",
    options: ["Organização", "Utilização", "Limpeza"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 2,
    question: "Qual é o objetivo principal do Utilização?",
    options: ["Manter tudo limpo", "Separar o necessário do desnecessário", "Organizar ferramentas"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 3,
    question: "Utilização ajuda a reduzir:",
    options: ["Custos e desperdícios", "Iluminação no ambiente", "Espaço de armazenamento"],
    correctAnswer: 0,
    difficulty: 'basic'
  },
  {
    id: 4,
    question: "O que deve ser feito com itens desnecessários no Utilização?",
    options: ["Guardá-los em um canto", "Identificá-los e eliminá-los", "Usá-los imediatamente"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 5,
    question: "Qual é o foco do Organização?",
    options: ["Limpar o ambiente", "Ordenar itens para fácil acesso", "Treinar funcionários"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 6,
    question: "Seiton significa:",
    options: ["Utilização", "Organização", "Disciplina"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 7,
    question: "Na organização, cada item deve ter:",
    options: ["Um preço definido", "Um local específico", "Uma etiqueta colorida"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 8,
    question: "O que a utilização elimina no ambiente de trabalho?",
    options: ["Equipamentos novos", "Itens desnecessários", "Documentos importantes"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 9,
    question: "Qual prática da utilização melhora a segurança?",
    options: ["Guardar tudo em gavetas", "Remover objetos obsoletos", "Comprar mais ferramentas"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 10,
    question: "A utilização facilita:",
    options: ["A limpeza diária", "O acesso rápido a itens", "A compra de materiais"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 11,
    question: "O que é um exemplo de utilização?",
    options: ["Etiquetar gavetas", "Descartar papéis velhos", "Limpar o chão"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 12,
    question: "Na organização, o que ajuda a localizar itens?",
    options: ["Caixas coloridas", "Etiquetas e marcações", "Mais funcionários"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 13,
    question: "A utilização pode reduzir:",
    options: ["O tempo de procura", "O número de funcionários", "A iluminação do local"],
    correctAnswer: 0,
    difficulty: 'basic'
  },
  {
    id: 14,
    question: "O que a organização promove no ambiente?",
    options: ["Desordem", "Ordem e eficiência", "Acúmulo de itens"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 15,
    question: "Qual é um benefício da utilização?",
    options: ["Aumentar estoques", "Liberar espaço", "Comprar mais móveis"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 16,
    question: "Na organização as ferramentas devem estar:",
    options: ["Em qualquer lugar", "Em locais fixos e identificados", "Guardadas em caixas fechadas"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 17,
    question: "Utilização envolve:",
    options: ["Classificar itens úteis e inúteis", "Limpar máquinas diariamente", "Treinar novos funcionários"],
    correctAnswer: 0,
    difficulty: 'basic'
  },
  {
    id: 18,
    question: "O que a organização evita?",
    options: ["Uso de etiquetas", "Perda de tempo procurando itens", "Descarte de materiais"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 19,
    question: "Qual é um exemplo de organização?",
    options: ["Jogar fora papéis velhos", "Usar painéis de ferramentas", "Limpar mesas"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 20,
    question: "A utilização ajuda a identificar:",
    options: ["Funcionários ociosos", "Itens desnecessários", "Novas máquinas"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 21,
    question: "Na organização, o que melhora a produtividade?",
    options: ["Mais reuniões", "Ordenação visual", "Mais estoque"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 22,
    question: "A utilização é aplicado ao:",
    options: ["Treinar equipes", "Eliminar o desnecessário", "Comprar suprimentos"],
    correctAnswer: 1,
    difficulty: 'basic'
  },
  {
    id: 23,
    question: "A organização inclui o uso de:",
    options: ["Máquinas novas", "Sinalizações visuais", "Mais armários"],
    correctAnswer: 1,
    difficulty: 'basic'
  },

  // Nível Intermediário
  {
    id: 24,
    question: "Na utilização, como classificar itens?",
    options: ["Por cor e tamanho", "Por utilidade e frequência de uso", "Por preço de compra"],
    correctAnswer: 1,
    difficulty: 'intermediate'
  },
  {
    id: 25,
    question: "O que a organização utiliza para ordenar?",
    options: ["Caixas sem identificação", "Sistemas visuais, como etiquetas", "Apenas gavetas grandes"],
    correctAnswer: 1,
    difficulty: 'intermediate'
  },
  {
    id: 26,
    question: "Na utilização, o que fazer com itens pouco usados?",
    options: ["Descartá-los imediatamente", "Armazená-los em local adequado", "Deixá-los no mesmo lugar"],
    correctAnswer: 1,
    difficulty: 'intermediate'
  },
  {
    id: 27,
    question: "Qual é um desafio da utilização?",
    options: ["Decidir o que é necessário", "Comprar mais materiais", "Limpar o ambiente"],
    correctAnswer: 0,
    difficulty: 'intermediate'
  },
  {
    id: 28,
    question: "Na organização reduz o risco de:",
    options: ["Compras desnecessárias", "Erros por desorganização", "Aumento de estoque"],
    correctAnswer: 1,
    difficulty: 'intermediate'
  },
  {
    id: 29,
    question: "Na utilização, documentos obsoletos devem ser:",
    options: ["Arquivados indefinidamente", "Reciclados ou descartados", "Digitalizados e guardados"],
    correctAnswer: 1,
    difficulty: 'intermediate'
  },
  {
    id: 30,
    question: "A organização melhora:",
    options: ["O fluxo de trabalho", "A quantidade de itens", "O tamanho do estoque"],
    correctAnswer: 0,
    difficulty: 'intermediate'
  },
  {
    id: 31,
    question: "Na utilização, qual é o primeiro passo?",
    options: ["Etiquetar tudo", "Identificar itens desnecessários", "Comprar organizadores"],
    correctAnswer: 1,
    difficulty: 'intermediate'
  },
  {
    id: 32,
    question: "A organização pode usar:",
    options: ["Apenas caixas grandes", "Layouts visuais e funcionais", "Mais funcionários"],
    correctAnswer: 1,
    difficulty: 'intermediate'
  },

  // Nível Avançado
  {
    id: 33,
    question: "Na utilização, como priorizar itens?",
    options: ["Por valor monetário", "Por frequência de uso e necessidade", "Por tamanho e peso"],
    correctAnswer: 1,
    difficulty: 'advanced'
  },
  {
    id: 34,
    question: "Organização em áreas críticas exige:",
    options: ["Menos organização", "Padrões visuais rigorosos", "Mais itens disponíveis"],
    correctAnswer: 1,
    difficulty: 'advanced'
  },
  {
    id: 35,
    question: "Qual é um impacto da utilização em longo prazo?",
    options: ["Aumento de custos", "Cultura de redução de desperdícios", "Mais espaço ocupado"],
    correctAnswer: 1,
    difficulty: 'advanced'
  },
  {
    id: 36,
    question: "A organização avançado inclui:",
    options: ["Sistemas de gestão visual complexos", "Apenas limpeza diária", "Compras frequentes"],
    correctAnswer: 0,
    difficulty: 'advanced'
  },
  {
    id: 37,
    question: "Na utilização, como evitar acúmulo futuro?",
    options: ["Comprar mais itens", "Revisar estoques regularmente", "Ignorar itens obsoletos"],
    correctAnswer: 1,
    difficulty: 'advanced'
  },
  {
    id: 38,
    question: "A organização em equipes grandes exige:",
    options: ["Menos sinalização", "Padronização clara e treinamento", "Mais armários"],
    correctAnswer: 1,
    difficulty: 'advanced'
  },
  {
    id: 39,
    question: "Qual é um indicador de sucesso da utilização?",
    options: ["Mais itens armazenados", "Redução de itens desnecessários", "Aumento de reuniões"],
    correctAnswer: 1,
    difficulty: 'advanced'
  },

  // Perguntas Extras
  {
    id: 40,
    question: "Utilização promove:",
    options: ["Acúmulo de materiais", "Uso eficiente de recursos", "Mais compras"],
    correctAnswer: 1,
    difficulty: 'extra'
  },
  {
    id: 41,
    question: "Na organização, o que é essencial?",
    options: ["Locais fixos para itens", "Mais espaço de armazenamento", "Menos etiquetas"],
    correctAnswer: 0,
    difficulty: 'extra'
  },
  {
    id: 42,
    question: "A utilização pode melhorar:",
    options: ["A segurança no trabalho", "O número de acidentes", "O estoque excessivo"],
    correctAnswer: 0,
    difficulty: 'extra'
  },
  {
    id: 43,
    question: "A organização ajuda a:",
    options: ["Aumentar a desordem", "Localizar itens rapidamente", "Comprar mais ferramentas"],
    correctAnswer: 1,
    difficulty: 'extra'
  },
  {
    id: 44,
    question: "Na utilização, o que fazer com itens quebrados?",
    options: ["Consertá-los ou descartá-los", "Guardá-los indefinidamente", "Usá-los como estão"],
    correctAnswer: 0,
    difficulty: 'extra'
  },
  {
    id: 45,
    question: "Na organização inclui o uso de:",
    options: ["Caixas sem identificação", "Painéis de ferramentas visuais", "Mais reuniões"],
    correctAnswer: 1,
    difficulty: 'extra'
  },
  {
    id: 46,
    question: "Utilização reduz:",
    options: ["O tempo de limpeza", "O espaço ocupado por itens úteis", "A necessidade de organização"],
    correctAnswer: 0,
    difficulty: 'extra'
  },
  {
    id: 47,
    question: "Na organização, qual é o benefício principal?",
    options: ["Mais estoque", "Eficiência no trabalho", "Menos funcionários"],
    correctAnswer: 1,
    difficulty: 'extra'
  },
  {
    id: 48,
    question: "Utilização exige:",
    options: ["Decisões sobre utilidade", "Mais armários", "Menos limpeza"],
    correctAnswer: 0,
    difficulty: 'extra'
  },
  {
    id: 49,
    question: "Organização melhora a:",
    options: ["Quantidade de itens", "Produtividade da equipe", "Compra de materiais"],
    correctAnswer: 1,
    difficulty: 'extra'
  }
];
