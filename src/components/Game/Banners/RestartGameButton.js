import React from "react";

const RestartGameButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="restart-game-button">
      Restart Game
    </button>
  );
};

export default RestartGameButton;
