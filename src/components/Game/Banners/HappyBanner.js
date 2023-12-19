import React from "react";
import RestartGameButton from "./RestartGameButton";

const guessOrGuesses = (numberOfGuesses) =>
  numberOfGuesses > 1 ? "guesses" : "guess";

const HappyBanner = ({ numberOfGuesses, onRestart }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numberOfGuesses} {guessOrGuesses(numberOfGuesses)}
        </strong>
        .
      </p>
      <RestartGameButton onClick={onRestart} />
    </div>
  );
};

export default HappyBanner;
