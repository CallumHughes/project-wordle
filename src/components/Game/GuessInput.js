import React, { useState } from "react";
import { NUM_OF_CHARACTERS_ALLOWED } from "../../constants";

const INPUT_PATTERN = `^[a-zA-Z]{0,${NUM_OF_CHARACTERS_ALLOWED}}$`;
const VALIDATION_PATTERN = `^[a-zA-Z]{${NUM_OF_CHARACTERS_ALLOWED}}$`;

const GuessInput = ({ onSubmit, isDisabled }) => {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length === 5) {
      onSubmit(guess);
      setGuess("");
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value.toUpperCase();
    const regex = new RegExp(INPUT_PATTERN);
    if (newValue.length <= NUM_OF_CHARACTERS_ALLOWED && regex.test(newValue)) {
      setGuess(newValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={isDisabled}
        value={guess}
        id="guess-input"
        type="text"
        autoComplete="off"
        onChange={handleChange}
        pattern={VALIDATION_PATTERN}
      />
    </form>
  );
};

export default GuessInput;
