import React from "react";

import Form from "./Form";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessResults from "./GuessResults";
import GameOverBanner from "./GameOverBanner";

export const GAME_STATUS = {
  NEW: 1,
  WIN: 2,
  LOOSE: 3,
};

function Game() {
  const [input, setInput] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(GAME_STATUS.NEW);

  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.info({ answer });

  const addGuess = (guess) => {
    if (guesses.length > NUM_OF_GUESSES_ALLOWED) return;

    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (guess === answer) {
      setGameStatus(GAME_STATUS.WIN);
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(GAME_STATUS.LOOSE);
    }
  };

  const handleRestart = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setInput("");
    setGameStatus(GAME_STATUS.NEW);
  };

  const isGameOver =
    gameStatus === GAME_STATUS.WIN || gameStatus === GAME_STATUS.LOOSE;

  return (
    <>
      <GameOverBanner
        gameStatus={gameStatus}
        answer={answer}
        guessCount={guesses.length}
        handleRestart={handleRestart}
      />
      <GuessResults guesses={guesses} answer={answer} />
      <Form
        disabled={isGameOver}
        input={input}
        setInput={setInput}
        addGuess={addGuess}
        handleRestart={handleRestart}
      />
    </>
  );
}

export default Game;
