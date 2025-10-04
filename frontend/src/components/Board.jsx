// components/Board.jsx
import React from "react";

const Board = ({ children }) => {
  return (
    
      <div className="bg-black/80">
      <main className="relative z-10">
        {children} {/* Page-specific content */}
      </main>
      </div>
    
  );
};

export default Board;
