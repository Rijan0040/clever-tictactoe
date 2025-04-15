
import React from "react";
import { Player, useGame } from "@/context/GameContext";
import { cn } from "@/lib/utils";
import { X, Circle } from "lucide-react";

interface CellProps {
  index: number;
  isWinningCell: boolean;
}

const Cell: React.FC<CellProps> = ({ index, isWinningCell }) => {
  const { board, makeMove, winner } = useGame();
  const value = board[index] as Player;
  
  const handleClick = () => {
    makeMove(index);
  };
  
  return (
    <button
      className={cn(
        "h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 border border-gray-300 bg-game-board flex items-center justify-center transition-all duration-200 hover:bg-gray-100 rounded-md",
        isWinningCell && "bg-gray-200 animate-pulse-winner",
        winner && !isWinningCell && "opacity-70"
      )}
      onClick={handleClick}
      disabled={!!value || !!winner}
    >
      {value === "X" && (
        <X
          className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-game-x animate-scale-in"
          strokeWidth={3}
        />
      )}
      {value === "O" && (
        <Circle
          className="w-12 h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 text-game-o animate-scale-in"
          strokeWidth={3}
        />
      )}
    </button>
  );
};

export default Cell;
