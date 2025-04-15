
import React from "react";
import { useGame } from "@/context/GameContext";
import { X, Circle } from "lucide-react";

const GameStatus: React.FC = () => {
  const { winner, currentPlayer, board } = useGame();
  
  // Check if game is a draw
  const isDraw = !winner && board.every(cell => cell !== null);
  
  return (
    <div className="text-center mb-6 h-10 flex items-center justify-center animate-fade-in">
      {winner ? (
        <div className="flex items-center text-xl font-bold">
          {winner === "X" ? (
            <>
              <X className="mr-2 text-game-x" strokeWidth={3} />
              <span>Player X wins!</span>
            </>
          ) : (
            <>
              <Circle className="mr-2 text-game-o" strokeWidth={3} />
              <span>Player O wins!</span>
            </>
          )}
        </div>
      ) : isDraw ? (
        <div className="text-xl font-bold">It's a draw!</div>
      ) : (
        <div className="flex items-center text-lg">
          {currentPlayer === "X" ? (
            <>
              <X className="mr-2 text-game-x" strokeWidth={3} />
              <span>Player X's turn</span>
            </>
          ) : (
            <>
              <Circle className="mr-2 text-game-o" strokeWidth={3} />
              <span>Player O's turn</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default GameStatus;
