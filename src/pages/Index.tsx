
import TicTacToe from "@/components/TicTacToe";

const Index = () => {
  return (
    <div className="min-h-screen w-full max-w-3xl mx-auto flex flex-col items-center justify-center p-4 py-8">
      <TicTacToe />
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Tic Tac Toe Game</p>
        <p>Play against a friend and enjoy the classic game!</p>
      </footer>
    </div>
  );
};

export default Index;
