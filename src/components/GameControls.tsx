
import React from "react";
import { Button } from "@/components/ui/button";
import { useGame } from "@/context/GameContext";
import { RotateCcw, RefreshCcw } from "lucide-react";

const GameControls: React.FC = () => {
  const { resetGame, resetScores, winner, board } = useGame();
  
  // Check if the game is over (either a winner or a draw)
  const gameOver = winner || board.every(cell => cell !== null);
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in">
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={resetGame}
      >
        <RotateCcw size={16} />
        {gameOver ? "New Game" : "Restart"}
      </Button>
      
      <Button 
        variant="secondary" 
        className="flex items-center gap-2"
        onClick={resetScores}
      >
        <RefreshCcw size={16} />
        Reset Scores
      </Button>
    </div>
  );
};

export default GameControls;
