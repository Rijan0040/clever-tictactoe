
import React, { useState, useEffect } from "react";
import { GameProvider, useGame } from "@/context/GameContext";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import GameStatus from "./GameStatus";
import GameControls from "./GameControls";
import Advertisement from "./Advertisement";
import GameResultDialog from "./GameResultDialog";

const TicTacToeContent: React.FC = () => {
  const { winner } = useGame();
  const [showDialog, setShowDialog] = useState(false);
  
  useEffect(() => {
    if (winner || winner === "draw") {
      // Small delay to show the dialog after the board updates
      const timer = setTimeout(() => {
        setShowDialog(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [winner]);
  
  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tic Tac Toe</h1>
      <ScoreBoard />
      <GameStatus />
      <Board />
      <Advertisement />
      <GameControls />
      <GameResultDialog open={showDialog} onClose={handleCloseDialog} />
    </div>
  );
};

const TicTacToe: React.FC = () => {
  return (
    <GameProvider>
      <TicTacToeContent />
    </GameProvider>
  );
};

export default TicTacToe;
