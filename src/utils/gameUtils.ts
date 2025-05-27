
import { Question, questions } from '@/data/questions';

export const getRandomQuestions = (count: number = 8): Question[] => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
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
