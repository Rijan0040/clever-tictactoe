import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";

// Define player types
export type Player = "X" | "O" | "draw" | null;
export type Board = (Player)[];
export type WinningLine = number[] | null;

// Game state interface
interface GameState {
  board: Board;
  currentPlayer: Player;
  winner: Player;
  winningLine: WinningLine;
  xScore: number;
  oScore: number;
  draws: number;
}

// Game context interface
interface GameContextType {
  board: Board;
  currentPlayer: Player;
  winner: Player;
  winningLine: WinningLine;
  xScore: number;
  oScore: number;
  draws: number;
  makeMove: (index: number) => void;
  resetGame: () => void;
  resetScores: () => void;
}

// Create the context with initial undefined value
const GameContext = createContext<GameContextType | undefined>(undefined);

// Initial empty game board
const initialBoard: Board = Array(9).fill(null);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>({
    board: initialBoard,
    currentPlayer: "X",
    winner: null,
    winningLine: null,
    xScore: 0,
    oScore: 0,
    draws: 0,
  });

  // All possible winning combinations
  const winningCombinations = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6], // diagonal top-right to bottom-left
  ];

  // Check for a winner
  const checkWinner = (board: Board): { winner: Player; line: number[] | null } => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], line: combination };
      }
    }

    // Check for draw
    if (board.every((cell) => cell !== null)) {
      return { winner: "draw", line: null };
    }

    return { winner: null, line: null };
  };

  // Handle player move
  const makeMove = (index: number) => {
    // Don't allow moves if there's already a winner or the cell is already filled
    if (gameState.winner || gameState.board[index]) return;

    // Create new board with the player's move
    const newBoard = [...gameState.board];
    newBoard[index] = gameState.currentPlayer;

    // Check for winner
    const { winner, line } = checkWinner(newBoard);

    // Update scores
    let xScore = gameState.xScore;
    let oScore = gameState.oScore;
    let draws = gameState.draws;

    if (winner === "X") {
      xScore += 1;
      toast("Player X wins!", {
        description: "X has claimed victory!",
      });
    } else if (winner === "O") {
      oScore += 1;
      toast("Player O wins!", {
        description: "O has claimed victory!",
      });
    } else if (winner === "draw") {
      draws += 1;
      toast("It's a draw!", {
        description: "No winner this time.",
      });
    }

    // Update game state
    setGameState({
      board: newBoard,
      currentPlayer: gameState.currentPlayer === "X" ? "O" : "X",
      winner: winner === "draw" ? null : winner,
      winningLine: line,
      xScore,
      oScore,
      draws,
    });
  };

  // Reset the game board but keep scores
  const resetGame = () => {
    setGameState({
      ...gameState,
      board: initialBoard,
      currentPlayer: "X",
      winner: null,
      winningLine: null,
    });
  };

  // Reset both game board and scores
  const resetScores = () => {
    setGameState({
      board: initialBoard,
      currentPlayer: "X",
      winner: null,
      winningLine: null,
      xScore: 0,
      oScore: 0,
      draws: 0,
    });
    toast("Scores reset", {
      description: "Game scores have been reset.",
    });
  };

  const value = {
    ...gameState,
    makeMove,
    resetGame,
    resetScores,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

// Custom hook to use the game context
export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
