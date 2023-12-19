import React from "react";
import RestartGameButton from "./RestartGameButton";

const SadBanner = ({ answer, onRestart }) => {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong>.
      </p>
      <RestartGameButton onClick={onRestart} />
    </div>
  );
};

export default SadBanner;
