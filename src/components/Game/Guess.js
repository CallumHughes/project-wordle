import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

const blankResult = range(0, 5).map(() => ({ letter: "", status: "" }));

const Guess = ({ guess, answer }) => {
  const checkResults = guess ? checkGuess(guess, answer) : blankResult;

  const checkResultsWithKey = checkResults.map(({ letter, status }) => ({
    key: crypto.randomUUID(),
    letter,
    status,
  }));

  return (
    <p className="guess">
      {checkResultsWithKey.map(({ key, letter, status }) => (
        <span key={key} className={"cell" + (status && ` ${status}`)}>
          {letter}
        </span>
      ))}
    </p>
  );
};

export default Guess;
