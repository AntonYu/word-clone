import { GAME_STATUS } from "./Game";

export default function GameOverBanner({
  answer,
  guessCount,
  gameStatus,
  handleRestart,
}) {
  return (
    <>
      {gameStatus === GAME_STATUS.WIN && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guessCount} guesses</strong>.{" "}
            <button onClick={handleRestart}>Restart!</button>
          </p>
        </div>
      )}
      {gameStatus === GAME_STATUS.LOOSE && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.{" "}
            <button onClick={handleRestart}>Restart!</button>
          </p>
        </div>
      )}
    </>
  );
}
