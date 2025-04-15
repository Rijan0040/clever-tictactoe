
import React from "react";
import { GameProvider } from "@/context/GameContext";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import GameStatus from "./GameStatus";
import GameControls from "./GameControls";

const TicTacToe: React.FC = () => {
  return (
    <GameProvider>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tic Tac Toe</h1>
        <ScoreBoard />
        <GameStatus />
        <Board />
        <GameControls />
      </div>
    </GameProvider>
  );
};

export default TicTacToe;
