
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useGame } from "@/context/GameContext";
import { X, Circle, Minus } from "lucide-react";

const ScoreBoard: React.FC = () => {
  const { xScore, oScore, draws, currentPlayer } = useGame();
  
  return (
    <div className="w-full max-w-md grid grid-cols-3 gap-2 md:gap-4 mb-8 animate-fade-in">
      <Card className={`${currentPlayer === "X" ? "border-game-x border-2" : ""} transition-all duration-300`}>
        <CardContent className="flex flex-col items-center justify-center p-4 space-y-2">
          <div className="flex items-center text-game-x">
            <X className="mr-1" />
            <span className="text-lg font-semibold">Player</span>
          </div>
          <div className="text-3xl font-bold">{xScore}</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <Minus className="mr-1" />
            <span className="text-lg font-semibold">Draws</span>
          </div>
          <div className="text-3xl font-bold">{draws}</div>
        </CardContent>
      </Card>
      
      <Card className={`${currentPlayer === "O" ? "border-game-o border-2" : ""} transition-all duration-300`}>
        <CardContent className="flex flex-col items-center justify-center p-4 space-y-2">
          <div className="flex items-center text-game-o">
            <Circle className="mr-1" />
            <span className="text-lg font-semibold">Player</span>
          </div>
          <div className="text-3xl font-bold">{oScore}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScoreBoard;
