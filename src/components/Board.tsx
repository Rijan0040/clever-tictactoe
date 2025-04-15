
import React from "react";
import Cell from "./Cell";
import { useGame } from "@/context/GameContext";

const Board: React.FC = () => {
  const { board, winningLine } = useGame();
  
  const isWinningCell = (index: number) => {
    return winningLine ? winningLine.includes(index) : false;
  };
  
  return (
    <div className="grid grid-cols-3 gap-2 md:gap-3 bg-white p-4 rounded-lg shadow-md animate-fade-in">
      {board.map((_, index) => (
        <Cell
          key={index}
          index={index}
          isWinningCell={isWinningCell(index)}
        />
      ))}
    </div>
  );
};

export default Board;
