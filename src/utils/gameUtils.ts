import { Question, questions } from '@/data/questions';

export const getRandomQuestions = (count: number = 8): Question[] => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(question => {
    const correctOptionText = question.options[question.correctAnswer];
    const shuffledOptions = shuffleArray([...question.options]);
    const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);
    
    return {
      ...question,
      options: shuffledOptions,
      correctAnswer: newCorrectIndex
    };
  });
};

const shuffleArray = (array: string[]): string[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getNewCorrectAnswerIndex = (originalOptions: string[], originalCorrectIndex: number): number => {
  const correctOption = originalOptions[originalCorrectIndex];
  const shuffledOptions = shuffleArray([...originalOptions]);
  return shuffledOptions.indexOf(correctOption);
};

export const calculateScore = (correctAnswers: number, totalQuestions: number): number => {
  return Math.round((correctAnswers / totalQuestions) * 100);
};

export const getScoreMessage = (score: number): string => {
  if (score >= 90) return "🏆 Excelente! Você é um expert em 5S!";
  if (score >= 70) return "🎉 Muito bom! Você domina bem os conceitos!";
  if (score >= 50) return "👏 Bom trabalho! Continue estudando!";
  return "📚 Continue se dedicando aos estudos do 5S!";
};

export const formatPlayerName = (firstName: string, lastName: string): string => {
  return `${firstName.trim()} ${lastName.trim()}`;
};
