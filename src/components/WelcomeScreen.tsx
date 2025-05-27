
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Star, Award } from 'lucide-react';

interface WelcomeScreenProps {
  onStartGame: (firstName: string, lastName: string) => void;
}

const WelcomeScreen = ({ onStartGame }: WelcomeScreenProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      onStartGame(firstName, lastName);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <Card className="relative z-10 w-full max-w-lg bg-gradient-to-br from-amber-50 to-yellow-100 border-4 border-amber-400 shadow-2xl">
        <CardHeader className="text-center pb-6">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Trophy className="w-12 h-12 text-amber-600 animate-pulse" />
            <Star className="w-8 h-8 text-amber-500" />
            <Award className="w-12 h-12 text-amber-600 animate-pulse" />
          </div>
          
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-2">
            AIWA de MILHÕES
          </CardTitle>
          
          <p className="text-lg text-gray-700 font-semibold">
            Quiz Educativo - 5S: Utilização e Organização
          </p>
          
          <div className="mt-4 p-4 bg-white rounded-lg border-2 border-amber-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Como Jogar:</h3>
            <ul className="text-left text-gray-700 space-y-1">
              <li>• 8 perguntas sobre 5S</li>
              <li>• Múltipla escolha</li>
              <li>• Ganhe pontos a cada acerto</li>
              <li>• Torne-se um expert em 5S!</li>
            </ul>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Nome:
              </label>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Digite seu nome"
                className="border-2 border-amber-300 focus:border-amber-500 bg-white"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Sobrenome:
              </label>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Digite seu sobrenome"
                className="border-2 border-amber-300 focus:border-amber-500 bg-white"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold py-3 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              disabled={!firstName.trim() || !lastName.trim()}
            >
              🎮 COMEÇAR O JOGO
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeScreen;
