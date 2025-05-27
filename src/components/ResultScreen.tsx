
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Star, Award, RotateCcw, Home } from 'lucide-react';
import { getScoreMessage } from '@/utils/gameUtils';

interface ResultScreenProps {
  playerName: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  onBackToHome: () => void;
}

const ResultScreen = ({ 
  playerName, 
  score, 
  correctAnswers, 
  totalQuestions, 
  onPlayAgain, 
  onBackToHome 
}: ResultScreenProps) => {
  const scoreMessage = getScoreMessage(score);
  
  const getScoreColor = () => {
    if (score >= 90) return 'from-amber-400 to-yellow-500';
    if (score >= 70) return 'from-green-400 to-emerald-500';
    if (score >= 50) return 'from-blue-400 to-cyan-500';
    return 'from-gray-400 to-slate-500';
  };

  const getScoreIcon = () => {
    if (score >= 90) return <Trophy className="w-16 h-16 text-amber-600 animate-bounce" />;
    if (score >= 70) return <Award className="w-16 h-16 text-green-600 animate-pulse" />;
    if (score >= 50) return <Star className="w-16 h-16 text-blue-600" />;
    return <Star className="w-16 h-16 text-gray-600" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <Card className="relative z-10 w-full max-w-2xl bg-gradient-to-br from-white to-gray-100 border-4 border-amber-400 shadow-2xl">
        <CardHeader className="text-center pb-6">
          <div className="flex justify-center mb-4">
            {getScoreIcon()}
          </div>
          
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            RESULTADO FINAL
          </CardTitle>
          
          <div className="text-2xl font-bold text-gray-800 mb-2">
            Parabéns, {playerName}!
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className={`inline-block px-8 py-4 rounded-full bg-gradient-to-r ${getScoreColor()} text-white shadow-lg`}>
              <div className="text-4xl font-bold mb-1">{score}%</div>
              <div className="text-lg">Pontuação Final</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-green-50 border-2 border-green-200">
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-green-600">{correctAnswers}</div>
                <div className="text-green-700 font-semibold">Acertos</div>
              </CardContent>
            </Card>
            
            <Card className="bg-red-50 border-2 border-red-200">
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-red-600">{totalQuestions - correctAnswers}</div>
                <div className="text-red-700 font-semibold">Erros</div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
            <CardContent className="p-6 text-center">
              <div className="text-xl font-bold text-gray-800 mb-2">
                {scoreMessage}
              </div>
              <div className="text-gray-600">
                Você respondeu {correctAnswers} de {totalQuestions} perguntas corretamente!
              </div>
            </CardContent>
          </Card>
          
          <div className="flex gap-4 justify-center">
            <Button
              onClick={onPlayAgain}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-6 text-lg flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Jogar Novamente
            </Button>
            
            <Button
              onClick={onBackToHome}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-6 text-lg flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Início
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultScreen;
