import React, { useEffect, useState } from "react";
import KeyboardLetter from "./KeyboardLetter";
import { checkGuess } from "../../../game-helpers";

const keyBoardLettersRow1 = "qwertyuiop".toUpperCase().split("");
const keyBoardLettersRow2 = "asdfghjkl".toUpperCase().split("");
const keyBoardLettersRow3 = "zxcvbnm".toUpperCase().split("");

const getLetterStatusFromCheckResults = ({ letter, checkResults }) =>
  checkResults
    ? checkResults.find((guessResult) => guessResult.letter === letter)?.status
    : null;

const Keyboard = ({ guessResults, answer }) => {
  const lastGuess = guessResults.at(-1);
  const checkResults = lastGuess ? checkGuess(lastGuess, answer) : [];

  // resetFlag should be true if lastGuess is falsy (guesses are reset)
  const resetFlag = !lastGuess;

  return (
    <div>
      <div className={"keyboard-row-wrapper"}>
        {keyBoardLettersRow1.map((letter) => {
          const letterStatus = getLetterStatusFromCheckResults({
            letter,
            checkResults,
          });
          return (
            <KeyboardLetter
              key={letter}
              status={letterStatus}
              resetFlag={resetFlag}
            >
              {letter}
            </KeyboardLetter>
          );
        })}
      </div>
      <div className={"keyboard-row-wrapper"}>
        {keyBoardLettersRow2.map((letter) => {
          const letterStatus = getLetterStatusFromCheckResults({
            letter,
            checkResults,
          });
          return (
            <KeyboardLetter
              key={letter}
              status={letterStatus}
              resetFlag={resetFlag}
            >
              {letter}
            </KeyboardLetter>
          );
        })}
      </div>
      <div className={"keyboard-row-wrapper"}>
        {keyBoardLettersRow3.map((letter) => {
          const letterStatus = getLetterStatusFromCheckResults({
            letter,
            checkResults,
          });
          return (
            <KeyboardLetter
              key={letter}
              status={letterStatus}
              resetFlag={resetFlag}
            >
              {letter}
            </KeyboardLetter>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
