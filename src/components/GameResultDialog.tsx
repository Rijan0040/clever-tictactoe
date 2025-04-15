
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useGame } from "@/context/GameContext";
import { X, Circle } from "lucide-react";

interface GameResultDialogProps {
  open: boolean;
  onClose: () => void;
}

const GameResultDialog: React.FC<GameResultDialogProps> = ({ open, onClose }) => {
  const { winner, resetGame } = useGame();
  
  // Check if game is a draw
  const isDraw = winner === "draw";
  
  const handleContinue = () => {
    resetGame();
    onClose();
  };
  
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="bg-white rounded-xl border-0 shadow-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-center">
            {isDraw ? (
              "It's a Draw!"
            ) : (
              <div className="flex items-center justify-center gap-2">
                {winner === "X" ? (
                  <>
                    <X className="text-game-x" strokeWidth={3} />
                    <span>Player X Wins!</span>
                  </>
                ) : (
                  <>
                    <Circle className="text-game-o" strokeWidth={3} />
                    <span>Player O Wins!</span>
                  </>
                )}
              </div>
            )}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-lg">
            {isDraw 
              ? "No winner this time. Would you like to play again?" 
              : `Congratulations! Player ${winner} has won the game.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2">
          <AlertDialogAction 
            onClick={handleContinue}
            className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
          >
            Play Again
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default GameResultDialog;
