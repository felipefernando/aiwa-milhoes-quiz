
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Question } from '@/data/questions';
import { Clock, Trophy, Star } from 'lucide-react';

interface GameScreenProps {
  questions: Question[];
  playerName: string;
  onGameComplete: (score: number, correctAnswers: number) => void;
}

const GameScreen = ({ questions, playerName, onGameComplete }: GameScreenProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleNextQuestion();
    }
  }, [timeLeft, showResult]);

  useEffect(() => {
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowResult(false);
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answerIndex);
      setShowResult(true);
      
      if (answerIndex === currentQuestion.correctAnswer) {
        setCorrectAnswers(prev => prev + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalScore = Math.round((correctAnswers / questions.length) * 100);
      onGameComplete(finalScore, correctAnswers);
    }
  };

  const getAnswerButtonClass = (answerIndex: number) => {
    if (!showResult) {
      return "bg-white hover:bg-blue-50 border-2 border-blue-300 text-gray-800 hover:border-blue-500";
    }
    
    if (answerIndex === currentQuestion.correctAnswer) {
      return "bg-green-500 text-white border-green-600";
    }
    
    if (answerIndex === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
      return "bg-red-500 text-white border-red-600";
    }
    
    return "bg-gray-200 text-gray-600 border-gray-300";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <Card className="relative z-10 w-full max-w-4xl bg-gradient-to-br from-blue-50 to-indigo-100 border-4 border-blue-400 shadow-2xl">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-amber-600" />
              <span className="font-bold text-gray-800">AIWA de MILHÕES</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border-2 border-amber-400">
                <Star className="w-4 h-4 text-amber-600" />
                <span className="font-bold text-gray-800">{correctAnswers} acertos</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border-2 border-red-400">
                <Clock className="w-4 h-4 text-red-600" />
                <span className="font-bold text-gray-800">{timeLeft}s</span>
              </div>
            </div>
          </div>
          
          <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
            Olá, {playerName}!
          </CardTitle>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-semibold text-gray-700">
              <span>Pergunta {currentQuestionIndex + 1} de {questions.length}</span>
              <span>Nível: {currentQuestion.difficulty}</span>
            </div>
            <Progress value={progress} className="h-3 bg-gray-200" />
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-400">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-800 text-center leading-relaxed">
                  {currentQuestion.question}
                </h2>
              </CardContent>
            </Card>
            
            <div className="grid gap-4">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`p-6 text-left h-auto text-lg font-semibold transition-all duration-300 hover:scale-102 ${getAnswerButtonClass(index)}`}
                >
                  <span className="mr-4 text-xl font-bold">
                    {String.fromCharCode(65 + index)})
                  </span>
                  {option}
                </Button>
              ))}
            </div>
            
            {showResult && (
              <div className="text-center space-y-4">
                <div className={`p-4 rounded-lg font-bold text-lg ${
                  selectedAnswer === currentQuestion.correctAnswer 
                    ? 'bg-green-100 text-green-800 border-2 border-green-400' 
                    : 'bg-red-100 text-red-800 border-2 border-red-400'
                }`}>
                  {selectedAnswer === currentQuestion.correctAnswer 
                    ? '🎉 Correto! Parabéns!' 
                    : '❌ Resposta incorreta!'}
                </div>
                
                <Button
                  onClick={handleNextQuestion}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-8 text-lg"
                >
                  {currentQuestionIndex < questions.length - 1 ? '➡️ Próxima Pergunta' : '🏁 Ver Resultado Final'}
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameScreen;
