import React from "react";
import Guess from "./Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

const GuessResults = ({ guessResults, answer }) => {
  const guessBlanks = range(
    0,
    NUM_OF_GUESSES_ALLOWED - guessResults.length
  ).map(() => "");

  const guessesWithKeys = [...guessResults, ...guessBlanks].map((guess) => ({
    guess: guess,
    key: crypto.randomUUID(),
  }));

  return (
    <div className="guess-results">
      {guessesWithKeys.map(({ guess, key }) => (
        <Guess key={key} guess={guess} answer={answer} />
      ))}
    </div>
  );
};

export default GuessResults;
