
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Question } from '@/data/questions';
import { Clock, Trophy, Star, Volume2, VolumeX } from 'lucide-react';

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
  const [isReading, setIsReading] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [timerActive, setTimerActive] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const readQuestion = () => {
    if (!voiceEnabled || !('speechSynthesis' in window)) {
      setTimerActive(true);
      return;
    }

    setIsReading(true);
    setTimerActive(false);

    // Cancela qualquer fala em andamento
    window.speechSynthesis.cancel();

    // Aguarda um pouco para garantir que o cancelamento foi processado
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance();
      
      // Configura para voz feminina em português
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(voice => 
        voice.lang.startsWith('pt') && voice.name.toLowerCase().includes('female')
      ) || voices.find(voice => 
        voice.lang.startsWith('pt') && voice.name.toLowerCase().includes('woman')
      ) || voices.find(voice => 
        voice.lang.startsWith('pt')
      );

      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }

      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 0.8;

      // Texto completo: pergunta + alternativas
      const fullText = `${currentQuestion.question}. As alternativas são: ${currentQuestion.options.map((option, index) => 
        `Alternativa ${String.fromCharCode(65 + index)}: ${option}`
      ).join('. ')}`;

      utterance.text = fullText;

      utterance.onend = () => {
        console.log('Leitura finalizada, iniciando timer');
        setIsReading(false);
        setTimerActive(true);
      };

      utterance.onerror = (event) => {
        console.error('Erro na síntese de voz:', event);
        setIsReading(false);
        setTimerActive(true);
      };

      window.speechSynthesis.speak(utterance);
    }, 100);
  };

  useEffect(() => {
    // Aguarda as vozes carregarem
    const loadVoices = () => {
      if (window.speechSynthesis.getVoices().length > 0) {
        readQuestion();
      } else {
        window.speechSynthesis.addEventListener('voiceschanged', () => {
          readQuestion();
        }, { once: true });
      }
    };

    if ('speechSynthesis' in window) {
      loadVoices();
    } else {
      setTimerActive(true);
    }

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [currentQuestionIndex, voiceEnabled]);

  useEffect(() => {
    if (timerActive && timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleNextQuestion();
    }
  }, [timeLeft, showResult, timerActive]);

  useEffect(() => {
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowResult(false);
    setTimerActive(false);
    window.speechSynthesis.cancel();
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer === null && !isReading) {
      window.speechSynthesis.cancel();
      setSelectedAnswer(answerIndex);
      setShowResult(true);
      setTimerActive(false);
      
      if (answerIndex === currentQuestion.correctAnswer) {
        setCorrectAnswers(prev => prev + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    window.speechSynthesis.cancel();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalScore = Math.round((correctAnswers / questions.length) * 100);
      onGameComplete(finalScore, correctAnswers);
    }
  };

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
    if (voiceEnabled) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      if (!timerActive && !showResult) {
        setTimerActive(true);
      }
    }
  };

  const getAnswerButtonClass = (answerIndex: number) => {
    if (!showResult) {
      return "bg-white hover:bg-red-50 border-2 border-red-300 text-gray-800 hover:border-red-500";
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
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <Card className="relative z-10 w-full max-w-4xl bg-gradient-to-br from-red-50 to-red-100 border-4 border-red-400 shadow-2xl">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-red-600" />
              <span className="font-bold text-gray-800">AIWA de MILHÕES</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                onClick={toggleVoice}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-sm"
              >
                {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                {voiceEnabled ? 'Desligar Voz' : 'Ligar Voz'}
              </Button>
              
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border-2 border-red-400">
                <Star className="w-4 h-4 text-red-600" />
                <span className="font-bold text-gray-800">{correctAnswers} acertos</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border-2 border-red-400">
                <Clock className="w-4 h-4 text-red-600" />
                <span className="font-bold text-gray-800">
                  {isReading ? 'Lendo...' : `${timeLeft}s`}
                </span>
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
            <Card className="bg-gradient-to-r from-red-100 to-red-200 border-2 border-red-400">
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
                  disabled={showResult || isReading}
                  className={`p-6 text-left h-auto text-lg font-semibold transition-all duration-300 hover:scale-102 ${getAnswerButtonClass(index)}`}
                >
                  <span className="mr-4 text-xl font-bold">
                    {String.fromCharCode(65 + index)})
                  </span>
                  {option}
                </Button>
              ))}
            </div>
            
            {isReading && (
              <div className="text-center">
                <div className="p-4 rounded-lg font-bold text-lg bg-blue-100 text-blue-800 border-2 border-blue-400">
                  🔊 Aguarde... lendo a pergunta e alternativas
                </div>
              </div>
            )}
            
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
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-8 text-lg"
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
