import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { HappyBanner, SadBanner } from "./Banners";
import { checkGuess } from "../../game-helpers";
import Keyboard from "./Keyboard";

const checkForGameWin = (result) =>
  result.every(({ status }) => status === "correct");

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [winGame, setWinGame] = useState(false);
  const [loseGame, setLoseGame] = useState(false);
  const [guessResults, setGuessResults] = useState([]);

  const handleRestart = () => {
    setAnswer(sample(WORDS));
    setWinGame(false);
    setLoseGame(false);
    setGuessResults([]);
  };

  const handleSubmitUpdate = (guess) => {
    if (guessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const result = checkGuess(guess, answer);
    const hasWon = checkForGameWin(result);

    setGuessResults([...guessResults, guess]);

    if (hasWon) {
      setWinGame(true);
    }

    if (!hasWon && guessResults.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setLoseGame(true);
    }
  };

  return (
    <>
      {winGame && (
        <HappyBanner
          numberOfGuesses={guessResults.length}
          onRestart={handleRestart}
        />
      )}
      {loseGame && <SadBanner answer={answer} onRestart={handleRestart} />}
      <GuessResults answer={answer} guessResults={guessResults} />
      <GuessInput
        onSubmit={handleSubmitUpdate}
        isDisabled={winGame || loseGame}
      />
      <Keyboard guessResults={guessResults} answer={answer} />
    </>
  );
}

export default Game;
