import React, { useEffect, useState } from "react";

const KeyboardLetter = ({ children, status, resetFlag }) => {
  const [guessStatus, setGuessStatus] = useState();

  useEffect(() => {
    if (
      status === "incorrect" &&
      guessStatus !== "misplaced" &&
      guessStatus !== "correct"
    ) {
      return setGuessStatus("incorrect");
    }
    if (status === "misplaced" && guessStatus !== "correct") {
      return setGuessStatus("misplaced");
    }
    if (status === "correct") {
      return setGuessStatus("correct");
    }
  }, [status]);

  useEffect(() => {
    if (resetFlag) {
      setGuessStatus(undefined);
    }
  }, [resetFlag]);

  const className = `keyboard-letter ${guessStatus ? guessStatus : ""}`.trim();

  return <div className={className}>{children}</div>;
};

export default KeyboardLetter;
