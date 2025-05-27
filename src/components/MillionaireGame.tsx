
import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import GameScreen from './GameScreen';
import ResultScreen from './ResultScreen';
import { getRandomQuestions, formatPlayerName } from '@/utils/gameUtils';
import { Question } from '@/data/questions';

type GameState = 'welcome' | 'playing' | 'finished';

const MillionaireGame = () => {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [playerName, setPlayerName] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [finalScore, setFinalScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleStartGame = (firstName: string, lastName: string) => {
    const formattedName = formatPlayerName(firstName, lastName);
    setPlayerName(formattedName);
    setQuestions(getRandomQuestions(5));
    setGameState('playing');
    console.log(`Jogo iniciado para: ${formattedName}`);
  };

  const handleGameComplete = (score: number, correct: number) => {
    setFinalScore(score);
    setCorrectAnswers(correct);
    setGameState('finished');
    console.log(`Jogo finalizado - Pontuação: ${score}%, Acertos: ${correct}`);
  };

  const handlePlayAgain = () => {
    setQuestions(getRandomQuestions(8));
    setGameState('playing');
    console.log('Iniciando novo jogo');
  };

  const handleBackToHome = () => {
    setGameState('welcome');
    setPlayerName('');
    setFinalScore(0);
    setCorrectAnswers(0);
    console.log('Voltando ao início');
  };

  switch (gameState) {
    case 'welcome':
      return <WelcomeScreen onStartGame={handleStartGame} />;
    
    case 'playing':
      return (
        <GameScreen
          questions={questions}
          playerName={playerName}
          onGameComplete={handleGameComplete}
        />
      );
    
    case 'finished':
      return (
        <ResultScreen
          playerName={playerName}
          score={finalScore}
          correctAnswers={correctAnswers}
          totalQuestions={questions.length}
          onPlayAgain={handlePlayAgain}
          onBackToHome={handleBackToHome}
        />
      );
    
    default:
      return <WelcomeScreen onStartGame={handleStartGame} />;
  }
};

export default MillionaireGame;
